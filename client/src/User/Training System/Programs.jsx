import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdbreact";
import Navbar from "../../components/navbar/Navbar";
import { useHistory } from "react-router-dom";

const Program = () => {
  const [program, setProgram] = useState([]);

  const history = useHistory();

  const fetchData = async () => {
    const response = await Axios.get("http://localhost:5000/training/get");
    setProgram(response.data);
  };

  const btnClicked = (id) => {
    history.push("/user/programdetail/" + id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <p className="h1 text-center mb-4">Men Workout Plans </p>
      <br />
      <MDBContainer className="text-center">
        <MDBRow>
          {program?.length === 0 ? (
            <h2 style={{ paddingLeft: "0.5em" }}>NOTHING TO DISPLAY YET...</h2>
          ) : (
            program?.map((program, i) => (
              <MDBCol md="4" key={i}>
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage
                    className="img-fluid"
                    src={"http://localhost:5000/" + program.imageName}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{program.title}</MDBCardTitle>
                    <MDBCardText>
                      Target Areas: {program.targetArea}
                    </MDBCardText>
                    <MDBCardText>Equipments: {program.equipment}</MDBCardText>
                    <MDBBtn onClick={() => btnClicked(program._id)}>
                      Details
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))
          )}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Program;
