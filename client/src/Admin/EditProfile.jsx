import React, { useState } from "react";
import Axios from "axios";
import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import ErrorNotice from "../components/error/ErrorNotice";
import { useEffect } from "react";
import SideNav from "./SideNav//SideNav";

const EditProfile = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [gender, setGender] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [error, setError] = useState();

  const fetchUser = async () => {
    await Axios.get("http://localhost:5000/users/getUser", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      if (res) {
        setName(res.data.name);
        setEmail(res.data.email);
        setUserName(res.data.userName);
        setGender(res.data.gender);
        setPhoneNumber(res.data.phoneNumber);
        setAddress(res.data.address);
      }
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        email,
        userName,
        gender,
        phoneNumber,
        address,
      };
      const response=await Axios.put("http://localhost:5000/users/editUser", data, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      if(response.data.success)
      window.location.reload();
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };
  useEffect(() => {
    fetchUser();
  },[]);
  return (
    <>
    <SideNav/>
    <br/>
      <MDBRow>
        <MDBCol md="2"></MDBCol>
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h3 text-center mb-4">Profile</p>
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <MDBInput
                    label="User Name"
                    icon="user"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />

                  <select
                    className="browser-default custom-select"
                    value={gender}
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
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <MDBInput
                    label="Address"
                    icon="address-card"
                    type="text"
                    value={address}
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
                    Update
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="2"></MDBCol>
      </MDBRow>
    </>
  );
};

export default EditProfile;
