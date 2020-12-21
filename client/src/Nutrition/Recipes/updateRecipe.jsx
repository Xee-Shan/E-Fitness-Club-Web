import React, { useState, useEffect } from "react";
import { MDBBtn, MDBInput, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SideNav from "../SideNav/SideNav";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import NutritionistAuth from "../../auth/NutritionAuth" 


const EditRecipe = () => {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const getRecipe = async () => {
    await Axios.get("http://localhost:5000/recipes/get/" + id).then((res) => {
   if (res) {
        setName(res.data.name);
        setType(res.data.type);
        setIngredients(res.data.ingredients);
        setCategory(res.data.method);
        setDescription(res.data.description);
      }
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      name: name,
      type: type,
      ingredients: ingredients,
      category: category,
      description: description,
    };
    await Axios.put("http://localhost:5000/recipes/update/" + id, data).then(
      (res) => {
        if (res) history.push("/nutritionist/recipe");
      }
    );
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <>
    <NutritionistAuth>
      <SideNav />
      <br/>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h3 text-center mb-4">Update Recipe</p>
              <MDBInput
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <select
                className="browser-default custom-select"
                onChange={(e) => setType(e.target.value)}
                value={type}
              >
                <option>Type</option>
                <option value="Break Fast">Break Fast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
              <br />
              <MDBInput
                label="Ingredients"
                value={ingredients}
                type="text"
                onChange={(e) => setIngredients(e.target.value)}
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <MDBInput
                label="Category"
                value={category}
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Description
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon">
                    <i className="fas fa-pencil-alt prefix"></i>
                  </span>
                </div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  required
                ></textarea>
              </div>
              <br />
              <div className="text-center mt-4">
                <MDBBtn onClick={submit} color="unique" type="submit">
                  Update Recipe
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </NutritionistAuth>
    </>
  );
};

export default EditRecipe;
