import React, { useState, useContext, Fragment } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../../context/userContext";
import ErrorNotice from "../../../components/error/ErrorNotice";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import ResponseNotice from "../../../components/response/ResponseNotice";

const TrainerLoginForm = () => {
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
          token: undefined,
          user: undefined,
        });
        setResponse("You are not Authorized");
      }

      if (loginRes.data.user.role === "user") {
        setUserData({
          token: undefined,
          user: undefined,
        });
        setResponse("You are not Authorized");
      }

      if (loginRes.data.user.role === "Nutritionist") {
        setUserData({
          token: undefined,
          user: undefined,
        });
        setResponse("You are not Authorized");
      }

      if (loginRes.data.user.role === "physiatrist") {
        setUserData({
          token: undefined,
          user: undefined,
        });
        setResponse("You are not Authorized");
      }

      if (loginRes.data.user.role === "trainer") {
        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/trainer/dashboard");
      }
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <>
      <br />
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
                  <p className="h3 text-center mb-4">Trainer Login</p>
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
                      <MDBBtn onClick={submit}>Login</MDBBtn>
                      <MDBBtn onClick={reset}>Reset</MDBBtn>
                    </Fragment>
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

export default TrainerLoginForm;
