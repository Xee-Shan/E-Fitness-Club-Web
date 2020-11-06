import React, { useState, useContext } from "react";
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
} from "mdbreact";
import Navbar from "../navbar/Navbar";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        "http://localhost:5000/users/login",
        loginUser
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      if (loginRes.data.user.role === "admin") {
        history.push("/admin/product");
      }
      if (loginRes.data.user.role === "user") {
        history.push("/user/product");
      }
      if (loginRes.data.user.role === "physiatrist") {
        history.push("/doctor/home");
      }
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <>
      <Navbar />
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h1 text-center mb-4">Login</p>
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
                    <MDBBtn onClick={submit}>Login</MDBBtn>
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
