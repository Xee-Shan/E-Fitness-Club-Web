import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdbreact";
import React, { Fragment } from "react";
import underweight from "../Images/WhatsApp Image 2020-10-14 at 4.29.44 PM.jpeg";
import overweight from "../Images/WhatsApp Image 2020-10-14 at 4.29.45 PM.jpeg";
import normal from "../Images/WhatsApp Image 2020-10-14 at 4.29.46 PM (1).jpeg";
import obese from "../Images/WhatsApp Image 2020-10-14 at 4.29.46 PM.jpeg";
import history from "../../../history/History";
import Navbar from "../../../components/navbar/Navbar";
import UserAuth from "../../../auth/UserAuth";
const DietPlan = () => {
  function btnClicked() {
    history.push("/dietplans/underWeight");
  }

  function obeseClicked() {
    history.push("/dietplans/obese");
  }

  function normalClicked() {
    history.push("/dietplans/normal");
  }

  function overWeightClicked() {
    history.push("/dietplans/overweight");
  }
  return (
    <UserAuth>
      <>
        <Navbar />
        <br />
        <p className="h1 text-center">Diet Plans</p>
        <br />
        <Fragment>
          <div className="container">
            <br />
            <MDBRow>
              <MDBCol md="3">
                <MDBCard>
                  <img src={underweight} alt="" height="300" width="250" />
                </MDBCard>
                <MDBCardBody className="text-center">
                  <MDBBtn gradient="peach" size="lg" onClick={btnClicked}>
                    Under Weight
                  </MDBBtn>
                </MDBCardBody>
              </MDBCol>

              <MDBCol md="3">
                <MDBCard>
                  <img src={normal} alt="" height="300" width="250" />
                </MDBCard>
                <MDBCardBody className="text-center">
                  <MDBBtn gradient="purple" size="lg" onClick={normalClicked}>
                    Normal
                  </MDBBtn>
                </MDBCardBody>
              </MDBCol>

              <MDBCol md="3">
                <MDBCard>
                  <img src={overweight} alt="" height="300" width="250" />
                </MDBCard>
                <MDBCardBody className="text-center">
                  <MDBBtn gradient="blue" size="lg" onClick={overWeightClicked}>
                    Over Weight
                  </MDBBtn>
                </MDBCardBody>
              </MDBCol>

              <MDBCol md="3">
                <MDBCard>
                  <img src={obese} alt="" height="300" width="250" />
                </MDBCard>
                <MDBCardBody className="text-center">
                  <MDBBtn gradient="aqua" size="lg" onClick={obeseClicked}>
                    Obese
                  </MDBBtn>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </div>
        </Fragment>
      </>
    </UserAuth>
  );
};

export default DietPlan;
