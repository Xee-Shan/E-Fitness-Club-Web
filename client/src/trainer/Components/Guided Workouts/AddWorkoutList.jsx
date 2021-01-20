import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Axios from "axios";
import SideNav from "../SideNav/SideNav";
import TrainerAuth from "../../../auth/TrainerAuth";
import { useParams } from "react-router-dom";

const AddWorkout = () => {
  const [inputFields, setInputFields] = useState([
    { day: "", exerciseName: "", sets: "", reps: "" },
  ]);
  const { id } = useParams();

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      { day: "", exerciseName: "", sets: "", reps: "" },
    ]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(
      "http://localhost:5000/training/add/guided/workout/detail/" + id,
      inputFields,
      { headers: { "x-auth-token": localStorage.getItem("auth-token") } }
    ).then((res) => {
      if (res) {
        alert("Workout Added");
      }
    });
  };

  return (
    <TrainerAuth>
      <>
        <SideNav />
        <br />
        <MDBContainer>
          <h1>Add Complete Workout</h1>
          <form>
            {inputFields.map((inputField, index) => (
              <div key={index}>
                <MDBRow>
                  <MDBCol md="2">
                    <MDBInput
                      name="day"
                      type="text"
                      label="Enter Day"
                      value={inputField.day}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      name="exerciseName"
                      type="text"
                      label="Exercise Name"
                      value={inputField.exerciseName}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      name="sets"
                      type="text"
                      label="Enter Sets"
                      value={inputField.sets}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </MDBCol>
                  <MDBCol md="2">
                    <MDBInput
                      name="reps"
                      type="text"
                      label="Enter Reps"
                      value={inputField.reps}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </MDBCol>
                  <MDBCol md="4">
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
    </TrainerAuth>
  );
};

export default AddWorkout;
