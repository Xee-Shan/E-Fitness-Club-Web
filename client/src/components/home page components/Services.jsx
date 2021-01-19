import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
} from "mdbreact";

const Services = () => {
  return (
    <div className="container">
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="text-center">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Services We provide
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            We provide quality services to the user like the live chat with the
            doctor and body mass index and blogs which help them in achiving
            their goals related to their fitness.
          </p>
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img
                  className="img-fluid"
                  src="https://i1.wp.com/blog.happyfox.com/wp-content/uploads/2020/06/Live-Chat-Adoption.png?fit=1920%2C1080&ssl=1"
                  alt="Live Chat"
                />
                <MDBMask overlay="white-slight" />
              </MDBView>

              <h4 className="font-weight-bold mb-3">
                <MDBIcon icon="comment-alt" className="pr-2" />
                Live Chat
              </h4>

              <p className="dark-grey-text">
                Live Chat is the most important feature of our site in which the
                user can chat with the doctor directly and can doctor can take
                the queries of the users.
              </p>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img
                  className="img-fluid"
                  src="https://i2s3e2c6.stackpathcdn.com/wp-content/uploads/2019/06/BMI-ECPL.jpg"
                  alt="BMI"
                />
                <MDBMask overlay="white-slight" />
              </MDBView>

              <h4 className="font-weight-bold mb-3">
                <MDBIcon icon="calculator" className="pr-2" />
                BMI
              </h4>

              <p className="dark-grey-text">
                BMI is one of the important feature of our site in which user
                can calculate his/her body mass index and can carry out diet
                plans accordingly.
              </p>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img
                  className="img-fluid"
                  src="https://pagedesignweb.com/wp-content/uploads/2018/07/blogging-1.jpg"
                  alt="Blog"
                />
                <MDBMask overlay="white-slight" />
              </MDBView>

              <h4 className="font-weight-bold mb-3">
                <MDBIcon fab icon="blogger" className="pr-2" />
                Blog
              </h4>

              <p className="dark-grey-text">
                A Blog is one of the biggest feature of our site in which user
                is provided by the blogs written by our trainers and
                nutritionist.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Services;
