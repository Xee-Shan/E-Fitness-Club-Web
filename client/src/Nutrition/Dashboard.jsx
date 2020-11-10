import React from "react";
import SideNav from "./SideNav/SideNav";

const Dashboard = () => {
  return (
    <>
      <SideNav />
      <p className="h1 text-center mb-4" style={{ margin: "250px" }}>
        Welcome to Dashboard
      </p>
    </>
  );
};

export default Dashboard;
