import React from "react";
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Details = () => {
  return (
    <MDBContainer>
      <MDBRow className="text-center">
        <MDBCol md="4">
          <MDBBtn tag="a" floating color="blue" className="accent-1">
            <MDBIcon icon="map-marker-alt" />
          </MDBBtn>
          <p>New York, 94126</p>
        </MDBCol>
        <MDBCol md="4">
          <MDBBtn tag="a" floating color="blue" className="accent-1">
            <MDBIcon icon="phone" />
          </MDBBtn>
          <p>+ 01 234 567 89</p>
        </MDBCol>
        <MDBCol md="4">
          <MDBBtn tag="a" floating color="blue" className="accent-1">
            <MDBIcon icon="envelope" />
          </MDBBtn>
          <p>info@gmail.com</p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Details;
