import React from "react";
import { MDBFooter, MDBBtn, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="text-center font-small darken-2">
      <div className="pt-4">
        <MDBBtn outline color="white" tag="a" href="/login">
          Login
          <MDBIcon icon="user" className="ml-2" />
        </MDBBtn>
        <MDBBtn outline color="white" tag="a" href="/register">
          Register
          <MDBIcon icon="registered" className="ml-2" />
        </MDBBtn>
        <hr className="my4" />
      </div>
      <div className="pb-4">
        <MDBIcon fab icon="facebook" className="mr-3" />
        <MDBIcon fab icon="twitter" className="mr-3" />
        <MDBIcon fab icon="youtube" className="mr-3" />
        <MDBIcon fab icon="pinterest" className="mr-3" />
      </div>
      <p className="footer-copyright mb-0 py-3 text-center">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="/"> efitnessclub.com </a>
      </p>
    </MDBFooter>
  );
};

export default Footer;
