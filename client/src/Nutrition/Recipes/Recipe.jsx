import React, { useEffect, useState } from "react";
import { MDBBtn, MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import axios from "axios";
import SideNav from "../SideNav/SideNav";
import { useHistory } from "react-router-dom";
import NutritionistAuth from "../../auth/NutritionAuth" 


export default function Recipe() {
  let [recipe, setRecipe] = useState();

  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/recipes/get");
      setRecipe(response.data);
    }
    fetchData();
  }, []);

  function handleDelete(id) {
    const value = window.confirm(
      "Are you sure you want to delete this Diet Plan ?"
    );
    if (value === true) {
      axios.delete("http://localhost:5000/recipes/delete/" + id);
      window.location.reload();
    }
  }

  const handleEdit = (id) => {
    history.push("/nutritionist/update/recipe/" +id);
  };
  return (
    <div>
      <NutritionistAuth>
      <SideNav />
      <br />
      <MDBContainer>
      <h2>List of Recipes : </h2>
      {recipe?.length === 0 ? (
        <h2>No recipes added yet...</h2>
      ) : (
      <MDBTable bordered>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Method</th>
                <th>Ingredients</th>
                <th>Action</th>
              </tr>
            </MDBTableHead>
            {recipe?.map((recipe, i) => (
            <MDBTableBody key={i}>
              <tr>
                <td>{i + 1}</td>
                <td>{recipe.name}</td>
                <td>{recipe.type}</td>
                <td>{recipe.method}</td>
                <td>{recipe.ingredients}</td>
                <td>
                  <MDBBtn color="warning" onClick={() => handleEdit(recipe._id)}>
                    Edit
                  </MDBBtn>
                  <MDBBtn
                    color="danger"
                    onClick={() => handleDelete(recipe._id)}
                  >
                    Delete
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
            ))}
          </MDBTable>
      )}
      </MDBContainer>
      </NutritionistAuth>
    </div>
  );
}
