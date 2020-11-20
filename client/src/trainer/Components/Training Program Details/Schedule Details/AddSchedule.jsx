import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import Axios from "axios";
import SideNav from "../../SideNav/SideNav";
import TrainerAuth from "../../../../auth/TrainerAuth";

const AddDetail = (props) => {
  const [inputFields, setInputFields] = useState([{ day: "", area: "" }]);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { day: "", area: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
    Axios.post(
      "http://localhost:5000/training/add/detail/" + props.match.params.id,
      inputFields
    );
    alert("Program Schedule Added");
  };

  return (
    <TrainerAuth>
      <>
        <SideNav />
        <br />
        <MDBContainer>
          <h1>Add Exercise Schedule</h1>
          <form>
            {inputFields.map((inputField, index) => (
              <div key={index}>
                <MDBRow>
                  <MDBCol md="4">
                    <MDBInput
                      name="day"
                      type="text"
                      label="Enter Day"
                      value={inputField.day}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBInput
                      name="area"
                      type="text"
                      label="Enter Area"
                      value={inputField.area}
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

export default AddDetail;
