import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Axios from "axios";
import { useParams } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";

const NewPassword = () => {
  const [password, setPassword] = useState();
  const { token } = useParams();

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = async (e) => {
    try {
      e.preventDefault();
      const data = {
        password: password,
        token: token,
      };
      console.log(token);
      await Axios.post("http://localhost:5000/users/new/password", data);
    } catch (error) {
      console.log(error);
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
                  <p className="h3 text-center mb-4">Create New Password</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Enter Password"
                      icon="lock"
                      type="password"
                      value={password}
                      onChange={onChangePassword}
                    />
                  </div>

                  <div className="text-center">
                    <MDBBtn onClick={submit}>Update Password</MDBBtn>
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

export default NewPassword;
