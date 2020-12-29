import React from "react";
import { MDBFooter, MDBBtn, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      color="blue-gradient"
      className="text-center font-small darken-2"
    >
      <div className="pt-4">
        <MDBBtn outline color="white" href="/login" size="sm">
          Login
          <MDBIcon icon="user" className="ml-2" />
        </MDBBtn>
        <MDBBtn outline color="white" href="/register" size="sm">
          Register
          <MDBIcon icon="registered" className="ml-2" />
        </MDBBtn>
        <hr className="my4" />
      </div>
      <div className="pb-4">
        <a href="https://www.facebook.com/" target="blank">
          <MDBIcon fab icon="facebook" className="mr-3" />
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <MDBIcon fab icon="instagram" className="mr-3" />
        </a>
        <a href="https://www.twitter.com/" target="blank">
          <MDBIcon fab icon="twitter" className="mr-3" />
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <MDBIcon fab icon="youtube" className="mr-3" />
        </a>
      </div>
      <p className="footer-copyright mb-0 py-3 text-center">
        &copy;{new Date().getFullYear()}
        {""} Copyright:{" "}
        <a href="/" target="blank">
          efitnessclub.com
        </a>
      </p>
    </MDBFooter>
  );
};

export default Footer;
