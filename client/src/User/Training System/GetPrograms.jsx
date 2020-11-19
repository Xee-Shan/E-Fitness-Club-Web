import React from "react";
import { useHistory } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBCardText,
} from "mdbreact";

const GetPrograms = ({ program }) => {
  const history = useHistory();

  const btnClicked = (id) => {
    history.push("/user/programdetail/" + id);
  };
  return (
    <>
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
                <br />
              </MDBCol>
            ))
          )}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default GetPrograms;
