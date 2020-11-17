import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import SideNav from "../SideNav/SideNav";
import { useHistory } from "react-router-dom";

const CreateRecipe = () => {
  let [name, setName] = useState("");
  let [type, setType] = useState("");
  let [ingredients, setIngredients] = useState("");
  let [method, setMethod] = useState("");
  let [description, setDescription] = useState("");
  let [image, setImage] = useState();

  const history = useHistory();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeType = (e) => {
    setType(e.target.value);
  };
  const onChangeIngredients = (e) => {
    setIngredients(e.target.value);
  };
  const onChangeMethod = (e) => {
    setMethod(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };
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
      <SideNav />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Create Recipe</p>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Name
              </label>
              <input
                onChange={onChangeName}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <br />
              <select
                className="browser-default custom-select"
                onChange={onChangeType}
              >
                <option>Type</option>
                <option value="Break Fast">Break Fast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
              <br />
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Ingredients
              </label>
              <input
                type="text"
                onChange={onChangeIngredients}
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Method
              </label>
              <input
                type="text"
                onChange={onChangeMethod}
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <br />
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
                  onChange={onChangeDescription}
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
                onChange={onChangeImage}
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
    </>
  );
};

export default CreateRecipe;
