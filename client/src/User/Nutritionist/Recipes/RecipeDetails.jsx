import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MDBContainer } from "mdbreact";
import Navbar from "../../Navbar/Navbar";

const RecipeDetail = (props) => {
  const [recipe, setRecipe] = useState({});
  const [imgURL, setImgURL] = useState({});

  const fetchData = async () => {
    const res = await Axios.get(
      "http://localhost:5000/recipes/get/" + props.match.params.id
    );
    setRecipe(res.data);
    setImgURL("http://localhost:5000/" + res.data.imageName);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <MDBContainer>
        <br />
        <h1 className="h1 text-center mb-4">{recipe.name}</h1>
        <h3>Description :</h3>
        <p>{recipe.description}</p>
      </MDBContainer>
      <MDBContainer>
        <br />
        <img width="1100" height="400" src={imgURL}></img>
        <h3>Type :</h3>
        <p>{recipe.type}</p>
        <h3>Ingredients :</h3>
        <p>{recipe.ingredients}</p>
        <h3>Method :</h3>
        <p>{recipe.method}</p>
      </MDBContainer>
    </>
  );
};
export default RecipeDetail;
