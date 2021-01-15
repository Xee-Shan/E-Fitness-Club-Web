import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import img from "./Images/zeeshan.jpeg";

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
                  src={img}
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  style={{height:"220px", width:"270px"}}
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Muhammad Zeeshan Chaudhry</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Full Stack Developer
                </h6>
                <p className="grey-text">
                  He is a motivated front end developer and has done 30+
                  satisfied projects with tech rating of about four and half.
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
                  href="https://instagram.com/"
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
                  src="https://scontent.flhe7-1.fna.fbcdn.net/v/t1.0-9/18010488_1441241129273796_1316910691126033963_n.jpg?_nc_cat=101&ccb=2&_nc_sid=174925&_nc_eui2=AeHSbRPNZX1ks4l2kMDtSXEFCfpKjFgqgiMJ-kqMWCqCIzmhuCdXfYbzcNXhyL0jGoxjtoISNapcxrMqC-pJbFsl&_nc_ohc=hSAA7W4GFM4AX9aK3cK&_nc_ht=scontent.flhe7-1.fna&oh=acf9f5b9f7f17b9dadffce05c123905b&oe=60110822"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Osama Abdul Sabboor</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Web Developer
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

            <MDBCol lg="6" md="12" className="mb-5">
              <MDBCol md="4" lg="6" className="float-left">
                <img
                  src="https://scontent.flhe13-1.fna.fbcdn.net/v/t1.0-9/16602841_1114034188706147_5470258682028639371_n.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_eui2=AeH8mXt9pstNDulH6Zn_KyaY2CnGN3FWZFzYKcY3cVZkXBMfrPW8Fz9Zf12Apsdbc1QuMG2CTwU-J7q8pbYDA_Pf&_nc_ohc=pfgJGiOtOP8AX_5yhyn&_nc_ht=scontent.flhe13-1.fna&oh=a13e56ac383f89e9ec212cb7b490d327&oe=6011AED1"
                  className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                  tag="img"
                  alt="Sample avatar"
                />
              </MDBCol>
              <MDBCol md="8" lg="6" className="float-right">
                <h4 className="font-weight-bold mb-3">Mohtashim Tajamal</h4>
                <h6 className="font-weight-bold grey-text mb-3">
                  Web Developer
                </h6>
                <p className="grey-text">
                  He is an motivated front end developer and has done 30+
                  satisfied projects.
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
