import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBView } from "mdbreact";
const About = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Section title
          </h2>
          <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit id
            laborum.
          </p>
        </MDBCol>
        <MDBCol md="6">
          <MDBView hover rounded className="z-depth-1-half mb-4">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg"
              alt=""
            />
          </MDBView>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default About;
