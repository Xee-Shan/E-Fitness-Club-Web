import React from "react";
import SideNav from "./Components/SideNav/SideNav";
import TrainerAuth from "../auth/TrainerAuth";
const Dashboard = () => {
  return (
    <TrainerAuth>
      <>
        <SideNav />
        <p className="h1 text-center mb-4" style={{ margin: "250px" }}>
          Welcome to Dashboard
        </p>
      </>
    </TrainerAuth>
  );
};

export default Dashboard;
