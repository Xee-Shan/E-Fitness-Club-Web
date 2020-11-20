import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Axios from "axios";
import SideNav from "../../SideNav/SideNav";
import TrainerAuth from "../../../../auth/TrainerAuth";

const AddWorkout = (props) => {
  const [inputFields, setInputFields] = useState([
    { exerciseName: "", sets: "", reps: "" },
  ]);

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
      "http://localhost:5000/training/add/workout/detail/" +
        props.match.params.id,
      inputFields
    );
    alert("Program Workout Added");
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
                  <MDBCol md="3">
                    <MDBInput
                      name="exerciseName"
                      type="text"
                      label="Exercise Name"
                      value={inputField.exerciseName}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBInput
                      name="sets"
                      type="text"
                      label="Enter Sets"
                      value={inputField.sets}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </MDBCol>
                  <MDBCol md="3">
                    <MDBInput
                      name="reps"
                      type="text"
                      label="Enter Reps"
                      value={inputField.reps}
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
    </TrainerAuth>
  );
};

export default AddWorkout;
