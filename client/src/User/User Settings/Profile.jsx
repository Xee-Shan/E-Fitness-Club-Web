import React, { useState, useEffect } from "react";
import Axios from "axios";
import { MDBRow, MDBCol } from "mdbreact";

const UserProfile = () => {
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const res = await Axios.get("http://localhost:5000/users/getUser", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    setUser(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <MDBRow>
      <MDBCol md="4"></MDBCol>
      <MDBCol>
        <ul style={{ listStyle: "none" }}>
          <h3>
            <li>
              <h3 style={{ display: "inline" }}>
                <strong>Name: </strong>
              </h3>
              {user?.name}
            </li>
            <li>
              <h3 style={{ display: "inline" }}>
                <strong>User Name: </strong>
              </h3>
              {user?.userName}
            </li>
            <li>
              <h3 style={{ display: "inline" }}>
                <strong>Email: </strong>
              </h3>
              {user?.email}
            </li>
            <li>
              <h3 style={{ display: "inline" }}>
                <strong>Gender: </strong>
              </h3>
              {user?.gender}
            </li>
            <li>
              <h3 style={{ display: "inline" }}>
                <strong>Phone #: </strong>
              </h3>
              {user?.phoneNumber}
            </li>
            <li>
              <h3 style={{ display: "inline" }}>
                <strong>Address: </strong>
              </h3>
              {user?.address}
            </li>
          </h3>
        </ul>
      </MDBCol>
      <MDBCol md="4"></MDBCol>
    </MDBRow>
  );
};

export default UserProfile;
