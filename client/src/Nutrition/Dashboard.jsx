import React from "react";
import SideNav from "./SideNav/SideNav";
import NutritionistAuth from "../auth/NutritionAuth" 

const Dashboard = () => {
  return (
    <>
    <NutritionistAuth>
      <SideNav />
      <p className="h1 text-center mb-4" style={{ margin: "250px" }}>
        Welcome to Nutritionist Dashboard
      </p>
    </NutritionistAuth>
    </>
  );
};

export default Dashboard;
