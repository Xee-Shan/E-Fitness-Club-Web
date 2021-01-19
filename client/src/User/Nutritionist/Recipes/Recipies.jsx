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
import Navbar from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import UserAuth from "../../../auth/UserAuth";

const Recipe = () => {
  const [recipe, setRecipe] = useState([]);
  const history = useHistory();
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
    <UserAuth>
        <Navbar />
        <br />
        <p className="h1 text-center mb-4">Recipes</p>
        <br />
        <MDBContainer className="text-center">
          <MDBRow>
            {recipe?.length === 0 ? (
              <h2 style={{ paddingLeft: "0.5em" }}>
                NOTHING TO DISPLAY YET...
              </h2>
            ) : (
              recipe?.map((recipe, i) => (
                <MDBCol md="4" key={i}>
                  <MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage
                      className="img-fluid"
                      src={recipe.imageURL}
                      waves
                    />
                    <MDBCardBody>
                      <MDBCardTitle>{recipe.name}</MDBCardTitle>
                      <MDBCardText>Type: {recipe.type}</MDBCardText>
                      <MDBBtn onClick={() => btnClicked(recipe._id)}>
                        Details
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                  <br />
                </MDBCol>
              ))
            )}
          </MDBRow>
        </MDBContainer>
    </UserAuth>
  );
};

export default Recipe;
