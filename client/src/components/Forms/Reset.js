import React, { useState } from "react";
import Axios from "axios";
import Navbar from "../navbar/Navbar";
import ErrorNotice from "../error/ErrorNotice";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

const ResetPassword = () => {
  const [email, setEmail] = useState();
  const [error, setError] = useState();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const submit = async (e) => {
    try {
      e.preventDefault();
      let data = {
        email: email,
      };
      await Axios.post("http://localhost:5000/users/reset", data);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="2"></MDBCol>
          <MDBCol md="8">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h3 text-center mb-4">Reset Password</p>
                  {error && (
                    <ErrorNotice
                      message={error}
                      clearError={() => setError(undefined)}
                    />
                  )}
                  <div className="grey-text">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      type="email"
                      value={email}
                      onChange={onChangeEmail}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn onClick={submit}>Submit</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="2"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default ResetPassword;
