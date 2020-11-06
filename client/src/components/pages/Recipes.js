import React from "react";
import UserAuth from "../../auth/UserAuth";
import DietPlan from "../../Nutrition/DietPlans/dietPlan";
import Navbar from "../navbar/Navbar";

const Recipes = () => {
  return (
    <UserAuth>
      <Navbar />
      <h1>Diet Plans</h1>
      <DietPlan></DietPlan>
    </UserAuth>
  );
};

export default Recipes;
