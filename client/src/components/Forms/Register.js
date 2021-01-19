import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../context/userContext";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import ErrorNotice from "../error/ErrorNotice";
import Navbar from "../navbar/Navbar";
import Background from "./RegisterBAck.jpg";

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
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol
            md="4"
            style={{ color: "White", backgroundImage: `url(${Background})` }}
          >
            <h2 style={{ paddingTop: "200px", textAlign: "center" }}>
              <strong>Hello, Friends!</strong>
            </h2>
            <p style={{ paddingTop: "50px", textAlign: "center" }}>
              Want to get in touch? Fill out your Personal Details To Start Your
              Jaourney With Us. Already Have Account then click on Login Button.{" "}
            </p>
            <div className="text-center" style={{ paddingTop: "50px" }}>
              <MDBBtn
                href="/login"
                className="aqua-gradient"
                outline
                color="white "
              >
                Log In
              </MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="8">
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
                <MDBBtn
                  onClick={submit}
                  className="blue-gradient"
                  outline
                  color="white"
                >
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="2"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Register;
