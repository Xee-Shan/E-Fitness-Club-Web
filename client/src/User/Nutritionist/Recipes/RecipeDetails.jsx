import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MDBContainer } from "mdbreact";
import Navbar from "../../Navbar/Navbar";

const RecipeDetail = (props) => {
  const [recipe, setRecipe] = useState({});

  const fetchData = async () => {
    const res = await Axios.get(
      "http://localhost:5000/recipes/get/" + props.match.params.id
    );
    setRecipe(res.data);
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
        <br/>
        <img width="100%" src={recipe.imageURL}></img>
        <br />
        <br />
        <div style={{ backgroundColor: "#F5F6F6", padding: "10px" }}>
          <p className="h2">Type</p>
        </div>
        <p>{recipe.type}</p>
        <div style={{ backgroundColor: "#F5F6F6", padding: "10px" }}>
          <p className="h2">Description</p>
        </div>
        <p>{recipe.description}</p>
        <br />
        <div style={{ backgroundColor: "#F5F6F6", padding: "10px" }}>
          <p className="h3">Ingredients</p>
        </div>
        <p>{recipe.ingredients}</p>
        <div style={{ backgroundColor: "#F5F6F6", padding: "10px" }}>
          <p className="h3">Category</p>
        </div>
        <p>{recipe.category}</p>
      </MDBContainer>
    </>
  );
};
export default RecipeDetail;
