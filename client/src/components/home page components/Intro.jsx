import React from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
} from "mdbreact";

const Intro = () => {
  return (
    <div>
      <MDBView src="https://i.pinimg.com/originals/be/9d/bf/be9dbf1741a4c8854bbc3d27f2c50584.jpg">
        <MDBMask className="rgba-black-light" />
        <MDBContainer
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100%", width: "100%" }}
        >
          <MDBRow>
            <MDBCol md="12" className="mb-4 white-text text-center">
              <h1 className="h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 ">
                E-Fiteness Club
              </h1>
              <hr className="hr-light my-4" />
              <h5 className="text-uppercase mb-4 white-text ">
                <strong>Fitness Training Health Diet & Care</strong>
              </h5>
              <MDBBtn outline color="white" href="/about">
                About
              </MDBBtn>
              <MDBBtn outline color="white" href="/contact">
                Contact
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
};

export default Intro;
