import React from "react";
import SideNav from "./Components/SideNav/SideNav";
import TrainerAuth from "../auth/TrainerAuth";
import { MDBCardBody, MDBContainer, MDBCardTitle, MDBCard } from "mdbreact";
const Dashboard = () => {
  return (
    <TrainerAuth>
      <SideNav />
      <MDBContainer>
        <br />
        <p className="h1 text-center">Welcome To Trainer Panel</p>
        <br />
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle></MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </TrainerAuth>
  );
};

export default Dashboard;
