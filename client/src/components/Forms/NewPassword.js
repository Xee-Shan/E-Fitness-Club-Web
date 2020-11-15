import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

const NewPassword = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="2"></MDBCol>
          <MDBCol md="8">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h3 text-center mb-4">Create New Password</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Enter Password"
                      icon="lock"
                      type="password"
                    />
                  </div>
                  <div className="grey-text">
                    <MDBInput
                      label="Re-Type Password"
                      icon="lock"
                      type="password"
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn>Submit</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="2"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default NewPassword;
