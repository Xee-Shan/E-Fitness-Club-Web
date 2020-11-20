import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../context/userContext";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import ErrorNotice from "../error/ErrorNotice";
import Navbar from "../navbar/Navbar";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [gender, setGender] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [error, setError] = useState();
  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        name,
        email,
        userName,
        password,
        passwordCheck,
        gender,
        phoneNumber,
        address,
      };
      await Axios.post("http://localhost:5000/users/register", newUser);
      const loginRes = await Axios.post("http://localhost:5000/users/login", {
        email,
        password,
      });
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/user/program");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <>
      <Navbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="2"></MDBCol>
          <MDBCol md="8">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h3 text-center mb-4">Register</p>
                  {error && (
                    <ErrorNotice
                      message={error}
                      clearError={() => setError(undefined)}
                    />
                  )}
                  <div className="grey-text">
                    <MDBInput
                      label="Your Name"
                      icon="file-signature"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <MDBInput
                      label="User Name"
                      icon="user"
                      type="text"
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <MDBInput
                      label="Confirm Your Password"
                      icon="check-square"
                      type="password"
                      onChange={(e) => setPasswordCheck(e.target.value)}
                    />
                    <select
                      className="browser-default custom-select"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <MDBInput
                      label="Phone Number"
                      icon="phone-square-alt"
                      type="number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <MDBInput
                      label="Address"
                      icon="address-card"
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn onClick={submit} color="primary">
                      Register
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="2"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Register;
