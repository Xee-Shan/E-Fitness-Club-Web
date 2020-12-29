import React from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";

const Features = () => {
  return (
    <div className="container">
      <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Why is it so great?
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
          E-Fitness Club is a site in which user can easily contact with doctor
          and can easily talk about their medicine. We also have E-Commerece
          system through which user can easily avail all the equipment about
          their fitness in just one click. User can view diet Plans, workouts
          and Recipes that he needs and can also check his/her body mass index.
          so can start his/her training and diet according to his/her
          requirements
        </p>

        <MDBRow>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="user-cog"
                  size="2x"
                  className="deep-purple-text"
                />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">USER MANAGEMENT</h5>
                <p className="grey-text">
                  We use user management system to manage all the user that uses
                  our site to stay fit in their lives and to enjoy good health.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="briefcase-medical"
                  size="2x"
                  className="deep-purple-text"
                />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">HEALTH AND CARE</h5>
                <p className="grey-text">
                  Health and care system is the most important system in our
                  site through which user can directly contact the doctor about
                  their medicines and queries.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  fab
                  icon="nutritionix"
                  size="2x"
                  className="deep-purple-text"
                />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">NUTRITION AND DIET</h5>
                <p className="grey-text">
                  It will provide the recommended nutrition guide that user need
                  for their diet plan. This portal will ensure your complete
                  health and diet.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="text-name">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
              alt=""
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="shopping-cart"
                  size="2x"
                  className="deep-purple-text"
                />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">E-COMMERCE </h5>
                <p className="grey-text">
                  This system will help the user to get all the necessary
                  equipment's that are required for their fitness like
                  treadmill, dumbbells etc.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="dumbbell"
                  size="2x"
                  className="deep-purple-text"
                />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">EXERCISE AND TRAINING</h5>
                <p className="grey-text">
                  This is the most important system of our website.In this
                  system we will provide a complete workout and exercise videos
                  and pictures according to the trainee’s needs.
                </p>
              </MDBCol>
              <MDBCol size="2">
                <MDBIcon
                  icon="folder-open"
                  size="2x"
                  className="deep-purple-text"
                />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">BMI AND BLOG</h5>
                <p className="grey-text">
                  In this system user can calculate their body mass index by
                  giving their body details and can see blogs added by Trainer
                  and Nutrition to get motivation.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
    </div>
  );
};

export default Features;
