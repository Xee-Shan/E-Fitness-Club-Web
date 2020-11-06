import React, { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
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

export default function Product() {
  const [program, setProgram] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await Axios.get("http://localhost:5000/training/get", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      setProgram(response.data);
    }
    fetchData();
  }, [program]);

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
                    <MDBBtn href="/user/programdetail">Details</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))
          )}
        </MDBRow>
      </MDBContainer>
    </>
  );
}
