import React, { useEffect, useState } from "react";
import { MDBBtn } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { useDispatch } from "react-redux";
import axios from "axios";
import { updateProduct } from "../../actions/productAction";
import SideNav from "../SideNav/SideNav";
import { useHistory } from "react-router-dom";

export default function Recipe() {
  const dispatch = useDispatch();
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

  const handleEdit = (product) => {
    dispatch(updateProduct(product));
    history.push("/nutrition/update/recipe");
  };
  return (
    <div>
      <SideNav />
      <br />
      <h2>List of Recipes : </h2>
      {recipe?.length === 0 ? (
        <div>NOTHING TO DISPLAY YET...</div>
      ) : (
        recipe?.map((recipe, i) => (
          <MDBTable key={i} bordered>
            <MDBTableHead color="primary-color" textWhite>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Method</th>
                <th>Ingredients</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <td>{i + 1}</td>
                <td>{recipe.name}</td>
                <td>{recipe.type}</td>
                <td>{recipe.method}</td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.description}</td>
                <td>
                  <MDBBtn color="warning" onClick={() => handleEdit(recipe)}>
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
          </MDBTable>
        ))
      )}
    </div>
  );
}
