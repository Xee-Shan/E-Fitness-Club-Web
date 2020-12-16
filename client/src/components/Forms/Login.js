import React, { useState, useContext, Fragment } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../error/ErrorNotice";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBJumbotron,
  MDBCardImage,
} from "mdbreact";
import Navbar from "../navbar/Navbar";
import ResponseNotice from "../response/ResponseNotice";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const reset = () => {
    history.push("/reset/password");
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );

      if (loginRes.data.user.role === "admin") {
        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/admin/product");
      }

      if (loginRes.data.user.role === "trainer") {
        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/trainer/dashboard");
      }

      if (loginRes.data.user.role === "nutritionist") {
        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/nutritionist/dashboard");
      }

      if (loginRes.data.user.role === "physiatrist") {
        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/doctor/home");
      }

      if (loginRes.data.user.role === "user") {
        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/user/program");
      }
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBJumbotron className="text-center">
              <MDBCardTitle className="card-title h4 pb-2">
                <strong>Hello, Friends</strong>
              </MDBCardTitle>
              <MDBCardImage
                src="https://img.wallpapersafari.com/desktop/1600/900/96/4/TAeOSs.jpg"
                className="img-fluid"
              />
              <MDBCardBody>
                <MDBCardTitle className="indigo-text h5 m-4">
                  Welcome to your new journey
                </MDBCardTitle>
                <MDBBtn href="/register">Sign up</MDBBtn>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h3 text-center mb-4">Login</p>
                  {response && (
                    <ResponseNotice
                      message={response}
                      clearError={() => setResponse(undefined)}
                    />
                  )}
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
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <Fragment>
                      <MDBBtn
                        onClick={submit}
                        className="blue-gradient "
                        outline
                        color="white"
                      >
                        Login
                      </MDBBtn>
                      <MDBBtn
                        onClick={reset}
                        className="blue-gradient"
                        outline
                        color="white"
                      >
                        Reset
                      </MDBBtn>
                    </Fragment>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Login;
