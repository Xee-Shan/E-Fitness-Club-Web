import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Axios from "axios";
import SideNav from "../SideNav/SideNav";
import NutritionAuth from "../../auth/NutritionAuth";
import { useParams, useHistory } from "react-router-dom";

const DietPlanList = () => {
  const [inputFields, setInputFields] = useState([
    { day: "", dietType: "", diet: "" },
  ]);
  const { id } = useParams();
  const history = useHistory();

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { exerciseName: "", sets: "", reps: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(
      "http://localhost:5000/dietplans/add/dietPlan/detail/" + id,
      inputFields)
    history.push("/nutritionist/dietPlan/" + id);
  };

  return (
    <NutritionAuth>
      <>
        <SideNav />
        <br />
        <MDBContainer>
          <h1>Add Diet Plan For Week</h1>
          <form>
            {inputFields.map((inputField, index) => (
              <div key={index}>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBInput
                      name="day"
                      type="text"
                      label="Day For Diet"
                      value={inputField.day}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBInput
                      name="dietType"
                      type="text"
                      label="Enter Diet Type"
                      value={inputField.dietType}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBInput
                      name="diet"
                      type="text"
                      label="Enter Diet"
                      value={inputField.diet}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBBtn onClick={() => handleRemoveFields(index)} size="sm">
                      -
                    </MDBBtn>
                    <MDBBtn onClick={() => handleAddFields()} size="sm">
                      +
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </div>
            ))}
            <MDBBtn onClick={handleSubmit}>Send</MDBBtn>
          </form>
        </MDBContainer>
      </>
    </NutritionAuth>
  );
};

export default DietPlanList;
