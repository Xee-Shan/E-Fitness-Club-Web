import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import axios from "axios";
import SideNav from "../SideNav/SideNav";
import { useHistory } from "react-router-dom";
import NutritionistAuth from "../../auth/NutritionAuth" 


const CreateRecipe = () => {
  let [name, setName] = useState("");
  let [type, setType] = useState("");
  let [ingredients, setIngredients] = useState("");
  let [method, setMethod] = useState("");
  let [description, setDescription] = useState("");
  let [image, setImage] = useState();

  const history = useHistory();
  
  const btnClicked = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("ingredients", ingredients);
    formData.append("description", description);
    formData.append("method", method);
    formData.append("image", image);

    axios.post("http://localhost:5000/recipes/create", formData).then((res) => {
      if (res.data.success) {
        history.push("/nutritionist/recipe");
      } else alert("Error occured");
    });
  };

  return (
    <>
    <NutritionistAuth>
      <SideNav />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Create Recipe</p>
              <MDBInput
                onChange={(e) => setName(e.target.value)}
                type="text"
                label="Name"
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <select
                className="browser-default custom-select"
                onChange={(e) => setType(e.target.value)}
              >
                <option>Type</option>
                <option value="Break Fast">Break Fast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
              <br/>
              <MDBInput
                type="text"
                label="Ingredients"
                onChange={(e) =>setIngredients(e.target.value)}
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <MDBInput
                type="text"
                label="Method"
                onChange={(e) => setMethod(e.target.value)}
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Descrpition
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon">
                    <i className="fas fa-pencil-alt prefix"></i>
                  </span>
                </div>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  required
                ></textarea>
              </div>
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Uplaod Image
              </label>
              <input
                type="file"
                accept=".jpeg, .jpg, .png"
                name="file"
                onChange={(e) => setImage(e.target.files[0])}
                id="defaultFormRegisterNameEx"
                className="form-control"
                style={{ borderStyle: "none" }}
                required
              />
              <br />
              <div className="text-center mt-4">
                <MDBBtn onClick={btnClicked} color="unique" type="submit">
                  Upload Recipe
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

export default CreateRecipe;
