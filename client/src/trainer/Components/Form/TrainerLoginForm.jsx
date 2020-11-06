import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import UserContext from "../../../context/userContext";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { MDBCard, MDBCardBody } from "mdbreact";

const AdminLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
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
    history.push("/trainer/dashboard");
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard style={{ margin: "150px" }}>
            <MDBCardBody>
              <form>
                <p className="h1 text-center py-4">Trainer Login</p>
                <div className="grey-text">
                  <MDBInput
                    label="Email"
                    icon="user"
                    group
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <MDBInput
                    label="Password"
                    icon="lock"
                    group
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit" onClick={submit}>
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AdminLogin;
