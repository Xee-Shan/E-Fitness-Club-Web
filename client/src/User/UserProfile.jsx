import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Axios from "axios";
import { useState } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import UserAuth from "../auth/UserAuth";

const UserProfile = () => {
  const [user, setUser] = useState();

  const fetchUser = async () => {
    const res = await Axios.get("http://localhost:5000/users/getUser", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    console.log(res.data);
    setUser(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserAuth>
      <div>
        <Navbar />

        <MDBContainer>
          <MDBRow>
            <MDBCol md="4"></MDBCol>
            <MDBCol>
              <ul style={{ listStyle: "none" }}>
                <h3>
                  <li>{user?.name}</li>
                  <li>{user?.userName}</li>
                  <li>{user?.email}</li>
                  <li>{user?.gender}</li>
                  <li>{user?.phoneNumber}</li>
                  <li>{user?.address}</li>
                </h3>
              </ul>
            </MDBCol>
            <MDBCol md="4"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </UserAuth>
  );
};

export default UserProfile;
