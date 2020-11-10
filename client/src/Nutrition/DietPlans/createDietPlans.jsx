import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import history from "../../history/History";
import SideNav from "../SideNav/SideNav"

const CreateDietPlan = () => {
  let [day, setDay] = useState("");
  let [userType, setUserType] = useState("");
  let [dietType, setDietType] = useState("");
  let [diet, setDiet] = useState("");
//   let [description, setDescription] = useState("");
//   let [image, setImage] = useState();

  const onChangeDay = (e) => {
    setDay(e.target.value);
  };
  const onChangeUserType = (e) => {
    setUserType(e.target.value);
  };
  const onChangeDietType = (e) => {
    setDietType(e.target.value);
  };
  const onChangeDiet = (e) => {
    setDiet(e.target.value);
  };
//   const onChangeDescription = (e) => {
//     setDescription(e.target.value);
//   };
//   const onChangeImage = (e) => {
//     setImage(e.target.files[0]);
//   };

  const btnClicked = async (e) => {
    e.preventDefault();

    const DietPlan ={
      day:day,
      userType:userType,
      dietType:dietType,
      diet:diet,
    }
    // const formData = new FormData();
      // formData.append("day",day);
      // formData.append("userType",userType);
      // formData.append("dietType",dietType);
      // formData.append("diet",diet);
    // formData.append("day", day);
    // formData.append("userType", userType);
    // formData.append("dietType", dietType);
    // formData.append("diet", diet);
    // // formData.append("method", method);
    // formData.append("image", image);

    axios.post("http://localhost:5000/dietPlan/create", DietPlan).then((res) => {
      if (res.data.success) {
        history.push("/nutritionist/dietPlan");
      } else alert("Error occured");
    });
  };

  return (
    <>
    <SideNav/>
    <br/>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Add Diet Plans</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Day
            </label>
            <input
              onChange={onChangeDay}
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              required
            />
            <br />
            <select
              className="browser-default custom-select"
              onChange={onChangeUserType}
            >
              <option>User Type</option>
              <option value="Normal">Normal</option>
              <option value="UnderWeight">Under Weight</option>
              <option value="OverWeight">Over Weight</option>
              <option value="UnderWeight">Under Weight</option>
            </select>
            <br />
            <br />
            <select
              className="browser-default custom-select"
              onChange={onChangeDietType}
            >
              <option>Choose Option</option>
              <option value="BreakFast">Break Fast</option>
              <option value="MidMeal">Mid Meal</option>
              <option value="Lunch">Lunch</option>
              <option value="Evening">Evening</option>
              <option value="Dinner">Dinner</option>
            </select>
            <br />
            <br/>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Diet
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon">
                  <i className="fas fa-pencil-alt prefix"></i>
                </span>
              </div>
              <textarea
                onChange={onChangeDiet}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                required
              ></textarea>
            </div>
            <br />
            <br />
            <div className="text-center mt-4">
              <MDBBtn onClick={btnClicked} color="unique" type="submit">
                Add Diet Plan
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  );
};

export default CreateDietPlan;
