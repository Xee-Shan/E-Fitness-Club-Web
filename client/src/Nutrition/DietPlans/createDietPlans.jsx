import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import axios from "axios";
import SideNav from "../SideNav/SideNav";
import { useHistory } from "react-router-dom";
import NutritionistAuth from "../../auth/NutritionAuth";
import ErrorNotice from "../../components/error/ErrorNotice";

const CreateDietPlan = () => {
  let [day, setDay] = useState("");
  let [userType, setUserType] = useState("");
  let [dietType, setDietType] = useState("");
  let [diet, setDiet] = useState("");
  let [err,setErr] =useState("")
  const history = useHistory();
  
  const validate = () => {
    if (
      !day ||
      !userType ||
      !dietType ||
      !diet
    ) {
      setErr("Please Enter All Fields");
    }
  };
  
  const btnClicked = async (e) => {
    e.preventDefault();
    validate();

    if(err === undefined){
      console.log(err)
      const DietPlan = {
      day: day,
      userType: userType,
      dietType: dietType,
      diet: diet,
    };

    axios
      .post("http://localhost:5000/dietplans/create", DietPlan,
      {
        headers: { "x-auth-token": localStorage.getItem("auth-token")},
      })
      .then((res) => {
        if (res.data.success) {
          history.push("/nutritionist/dietPlan");
        } else alert("Error occured");
      });
  }
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
                <p className="h4 text-center mb-4">Add Diet Plans</p>
                {err && (
                  <ErrorNotice
                    message={err}
                    clearError={() => setErr(undefined)}
                  />
                )}
                <MDBInput
                  label="Day"
                  onChange={(e) =>  setDay(e.target.value)}
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
                  <option value="UnderWeight">Under Weight</option>
                </select>
                <br />
                <br />
                <select
                  className="browser-default custom-select"
                  onChange={(e) => setDietType(e.target.value)}
                >
                  <option>Choose Option</option>
                  <option value="BreakFast">Break Fast</option>
                  <option value="MidMeal">Mid Meal</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Evening">Evening</option>
                  <option value="Dinner">Dinner</option>
                </select>
                <br />
                <br />
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  Diet
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                      <i className="fas fa-pencil-alt prefix"></i>
                    </span>
                  </div>
                  <textarea
                    onChange={(e) => setDiet(e.target.value)}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    required
                  ></textarea>
                </div>
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
      </NutritionistAuth>
    </>
  );
};

export default CreateDietPlan;
