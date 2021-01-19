import React, { useState } from "react";
import {
  MDBBtn,
  MDBInput,
  MDBContainer,
  MDBCardBody,
  MDBCard,
  MDBRow,
  MDBCol,
} from "mdbreact";
import Axios from "axios";
import SideNav from "../SideNav/SideNav";
import { useHistory } from "react-router-dom";
import ErrorNotice from "../../components/error/ErrorNotice";
import Admin from "../../auth/Admin";

export default function AddEmployee() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [gender, setGender] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [role, setRole] = useState();

  const [error, setError] = useState();
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    if (
      role === "physiatrist" ||
      role === "trainer" ||
      role === "nutritionist"
    ) {
      try {
        const newUser = {
          name,
          email,
          userName,
          password,
          passwordCheck,
          gender,
          role,
          phoneNumber,
          address,
        };
        await Axios.post("http://localhost:5000/users/register", newUser);
        /*const loginRes = await Axios.post("http://localhost:5000/users/login", {
          email,
          password,
        });
        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user,
        });
        localStorage.setItem("auth-token", loginRes.data.token);*/
        history.push("/admin/employee");
      } catch (err) {
        err.response.data.msg && setError(err.response.data.msg);
      }
    } else {
      setError("Employee type not chosen");
    }
  };

  return (
    <Admin>
      <SideNav />
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h1 text-center mb-4">Add Employee</p>
                  {error && (
                    <ErrorNotice
                      message={error}
                      clearError={() => setError(undefined)}
                    />
                  )}
                  <div className="grey-text">
                    <MDBInput
                      label=" Name"
                      icon="file-signature"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <MDBInput
                      label="E-mail"
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
                      label=" password"
                      icon="lock"
                      type="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <MDBInput
                      label="Confirm Password"
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
                      type="Number"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <select
                      className="browser-default custom-select"
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option>Select type of employee</option>
                      <option value="physiatrist">Physiatrist/Doctor</option>
                      <option value="trainer">Trainer</option>
                      <option value="nutritionist">Nutritionist</option>
                    </select>
                    <MDBInput
                      label="Address"
                      icon="address-card"
                      type="text"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn onClick={submit} color="primary">
                      Add Employee
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Admin>
  );
}
