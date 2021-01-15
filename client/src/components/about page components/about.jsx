import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBView } from "mdbreact";
import Abt from "./Images/download.png";
const About = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <h2 className="h1-responsive font-weight-bold my-5 text-center">
            Information
          </h2>
          <p>
            When it comes to training and nutrition, there are 3 components that
            make results truly last. Individualization, education, and
            connection. That's why it’s our mission to provide world class
            coaching, over the top education, and non stop accountability, to
            guarantee our clients achieve the results they came to us for AND
            understand how to sustain them after they’re gone.
          </p>
        </MDBCol>
        <MDBCol md="1"/>
        <MDBCol md="5" style={{paddingTop:"50px"}}>
          <MDBView>
            <img
              className="img-fluid"
              src={Abt}
              alt=""
              style={{height:"250px",width:"350px"}}
            />
          </MDBView>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default About;
