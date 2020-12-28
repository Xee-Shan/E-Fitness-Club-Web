import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

const TeamPage = () => {
  return (
    <div className="container">
      <MDBCard className="my-5 px-5 pb-1 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Our amazing team consits of web developers , designers and front end
            develpers. We have done 60+ satisfied projects and are willing to
            get more and more.
          </p>
          <MDBRow className="text-md-left">
            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Zeeshan Chaudhry</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Web Developer
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a
                  href="https://www.facebook.com/"
                  target="blank"
                  className="p-2 fa-lg fb-ic"
                >
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="blank"
                  className="p-2 fa-lg tw-ic"
                >
                  <MDBIcon fab icon="twitter" />
                </a>
                <a
                  href="https://dribbble.com/"
                  target="blank"
                  className="p-2 fa-lg dribbble-ic"
                >
                  <MDBIcon fab icon="dribbble" />
                </a>
              </MDBCol>
            </MDBCol>

            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Osama Abdul Sabboor</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Graphics Designer
                </h6>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur.
                </p>
                <a
                  href="https://www.facebook.com/"
                  target="blank"
                  className="p-2 fa-lg fb-ic"
                >
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="blank"
                  className="p-2 fa-lg yt-ic"
                >
                  <MDBIcon fab icon="youtube" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="blank"
                  className="p-2 fa-lg ins-ic"
                >
                  <MDBIcon fab icon="instagram" />
                </a>
              </MDBCol>
            </MDBCol>

            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Mohtashim Tajamal</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Front end Developer
                </h6>
                <p className="grey-text">
                  He is an motivated front end developer and has done 30+
                  satisfied projects with teh rating of about four and half.
                </p>
                <a
                  href="https://www.facebook.com/"
                  target="blank"
                  className="p-2 fa-lg fb-ic"
                >
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="blank"
                  className="p-2 fa-lg yt-ic"
                >
                  <MDBIcon fab icon="youtube" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="blank"
                  className="p-2 fa-lg ins-ic"
                >
                  <MDBIcon fab icon="instagram" />
                </a>
              </MDBCol>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default TeamPage;
