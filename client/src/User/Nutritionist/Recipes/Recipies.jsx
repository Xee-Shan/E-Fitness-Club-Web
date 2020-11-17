import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdbreact";
import Navbar from "../../../components/navbar/Navbar";
import history from "../../../history/History";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);

  const fetchData = async () => {
    const response = await Axios.get("http://localhost:5000/recipes/get");
    setRecipe(response.data);
  };
  
  const btnClicked = (id) => {
    history.push("/user/recipedetail/" + id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <p className="h1 text-center mb-4">Recipes</p>
      <br />
      <MDBContainer className="text-center">
        <MDBRow>
          {recipe?.length === 0 ? (
            <h2 style={{ paddingLeft: "0.5em" }}>NOTHING TO DISPLAY YET...</h2>
          ) : (
            recipe?.map((recipe, i) => (
              <MDBCol md="4" key={i}>
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage
                    className="img-fluid"
                    src={"http://localhost:5000/" + recipe.imageName}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{recipe.name}</MDBCardTitle>
                    <MDBCardText>
                      Type: {recipe.type}
                    </MDBCardText>
                    <MDBBtn onClick={() => btnClicked(recipe._id)}>
                      Details
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))
          )}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Recipe;