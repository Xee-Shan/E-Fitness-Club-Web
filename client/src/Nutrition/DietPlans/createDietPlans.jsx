import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import axios from "axios";
import SideNav from "../SideNav/SideNav";
import { useHistory } from "react-router-dom";
import NutritionistAuth from "../../auth/NutritionAuth";

const CreateDietPlan = () => {
  let [title, setTitle] = useState("");
  let [userType, setUserType] = useState("");
  let [image, setImage] = useState();

  const [previewImage, setPreviewImage] = useState();

  const history = useHistory();

  const validate = () => {
    if (!title || !userType || !image) {
      alert("Please Enter All Fields");
    }
  };

  const btnClicked = async (e) => {
    console.log(title);
    e.preventDefault();
    validate();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("userType", userType);
    formData.append("image", image);
    console.log(formData);
    axios.post(
      "http://localhost:5000/dietplans/create",
      formData,
      history.push("/nutritionist/dietPlan")
    );
  };

  return (
    <>
      <NutritionistAuth>
        <SideNav />
        <br />
        <MDBContainer>
          <MDBRow>
            <MDBCol md="3" />
            <MDBCol md="6">
              <form>
                <p className="h4 text-center mb-4">Add Diet Plans</p>
                <MDBInput
                  label="Title"
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  required
                />
                <select
                  className="browser-default custom-select"
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option>User Type</option>
                  <option value="Normal">Normal</option>
                  <option value="UnderWeight">Under Weight</option>
                  <option value="OverWeight">Over Weight</option>
                  <option value="UnderWeight">Obese</option>
                </select>
                <br />
                <br />
                <br />
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  Uplaod Image
                </label>
                <img src={previewImage} alt="" />
                <input
                  type="file"
                  accept=".jpeg, .jpg, .png"
                  name="file"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    setPreviewImage(URL.createObjectURL(e.target.files[0]));
                  }}
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  style={{ borderStyle: "none" }}
                  required
                />
                <br />
                <div className="text-center mt-4">
                  <MDBBtn onClick={btnClicked} color="unique" type="submit">
                    Add Diet Plan
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
            <MDBCol md="3" />
          </MDBRow>
        </MDBContainer>
      </NutritionistAuth>
    </>
  );
};

export default CreateDietPlan;
