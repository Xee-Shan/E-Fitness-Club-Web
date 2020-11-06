import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const TestimonialsPage = () => {
  return (
    <div className="container">
      <MDBContainer>
        <section className="team-section text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">
            Testimonials v.3
          </h2>
          <p className="dark-grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>

          <MDBRow className="text-center">
            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                alt=""
                className="rounded-circle z-depth-1 img-fluid"
              />

              <h4 className="font-weight-bold dark-grey-text mt-4">
                Osama Abdul Sabboor
              </h4>
              <h6 className="font-weight-bold blue-text my-3">
                Graphics Designer
              </h6>
              <p className="font-weight-normal dark-grey-text">
                <MDBIcon className="fa fa-quote-left pr-2" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur quae quaerat ad velit ab hic
                tenetur.
              </p>
              <div className="orange-text">
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon far icon="star-half" />
              </div>
            </MDBCol>
            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                alt=""
                className="rounded-circle z-depth-1 img-fluid"
              />

              <h4 className="font-weight-bold dark-grey-text mt-4">
                Zeeshan Chaudhry
              </h4>
              <h6 className="font-weight-bold blue-text my-3">Web Developer</h6>
              <p className="font-weight-normal dark-grey-text">
                <MDBIcon className="fa fa-quote-left pr-2" />
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <div className="orange-text">
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
              </div>
            </MDBCol>
            <MDBCol md="4">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                alt=""
                className="rounded-circle z-depth-1 img-fluid"
              />

              <h4 className="font-weight-bold dark-grey-text mt-4">
                Mohtashim Tajamal
              </h4>
              <h6 className="font-weight-bold blue-text my-3">
                Front-End Developer
              </h6>
              <p className="font-weight-normal dark-grey-text">
                <MDBIcon className="fa fa-quote-left pr-2" />
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <div className="orange-text">
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon icon="star" />
                <MDBIcon far icon="star" />
              </div>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </div>
  );
};

export default TestimonialsPage;
