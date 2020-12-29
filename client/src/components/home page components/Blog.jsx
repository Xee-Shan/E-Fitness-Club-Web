import BMI from "./Images/BMI2.jpg"
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

const Blog = () => {
  return (
    <div className="container">
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="text-center">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Services We provide
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            We provide quality services to the user like the live chat with the doctor and body mass index and blogs which help them in achiving their goals related to their fitness.
          </p>
          <MDBRow>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img
                  className="img-fluid"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVQjATNELyuRd7M0gTntI0jKatdlWSO79-Q&usqp=CAU"
                  style={{height:"180px" ,width:"300px"}}
                  alt=""
                />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <a href="#!" className="pink-text">
                <h4 className="font-weight-bold mb-3">
                  <MDBIcon icon="map" className="pr-2" />
                  Live Chat
                </h4>
              </a>
              <p className="dark-grey-text">
                Live Chat is the most important feature of our site in which the user can chat with the doctor directly and can doctor can take the queries of the users.
              </p>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img
                  className="img-fluid"
                  src={BMI}
                  alt="BMI image"
                  style={{height:"180px" ,width:"300px"}}
                />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <a href="#!" className="deep-orange-text">
                <h4 className="font-weight-bold mb-3">
                  <MDBIcon icon="graduation-cap" className="pr-2" />
                  BMI
                </h4>
              </a>
              <p className="dark-grey-text">
                BMI is one of the important feature of our site in which user can calculate his/her body mass index and can carry out diet plans accordingly.
              </p>
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
              <MDBView hover className="rounded z-depth-2 mb-4" waves>
                <img
                  className="img-fluid"
                  src="https://cdn4.wpbeginner.com/wp-content/uploads/2018/07/whatisblog.png"
                  alt="Blog Image"
                />
                <MDBMask overlay="white-slight" />
              </MDBView>
              <a href="#!" className="blue-text">
                <h4 className="font-weight-bold mb-3">
                  <MDBIcon icon="fire" className="pr-2" />
                  Blog
                </h4>
              </a>
              <p className="dark-grey-text">
                A Blog is one of the biggest feature of our site in which user is provided by the blogs written by our trainers and nutritionist.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Blog;
