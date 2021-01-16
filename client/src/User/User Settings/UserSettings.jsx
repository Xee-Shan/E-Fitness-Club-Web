import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  MDBNav,
  MDBContainer,
  MDBNavItem,
  MDBNavLink,
  MDBTabContent,
  MDBTabPane,
} from "mdbreact";
import UserAuth from "../../auth/UserAuth";
import UserProfile from "./Profile";
import EditProfile from "./EditProfile";

const UserSetting = () => {
  const [active, setActive] = useState("1");
  const toggle = (tab) => (e) => {
    if (active !== tab) {
      setActive(tab);
    }
  };
  return (
    <UserAuth>
      <Navbar />
      <MDBContainer>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={active === "1"}
              onClick={toggle("1")}
              role="tab"
            >
              Profile
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              link
              to="#"
              active={active === "2"}
              onClick={toggle("2")}
              role="tab"
            >
              Edit Profile
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={active}>
          <MDBTabPane tabId="1">
            <br />
            <UserProfile />
          </MDBTabPane>
          <MDBTabPane tabId="2">
            <EditProfile />
          </MDBTabPane>
          <MDBTabPane tabId="3"></MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    </UserAuth>
  );
};

export default UserSetting;
