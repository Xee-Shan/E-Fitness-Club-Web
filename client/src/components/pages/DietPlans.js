import React from "react";
import UserAuth from "../../auth/UserAuth";
import DietPlan from "../../User/Nutritionist/DietPlans/dietPlan";
import Navbar from "../navbar/Navbar";

const DietPlans = () => {
  return (
    <UserAuth>
      <Navbar />
      <h1>Diet Plans</h1>
      <DietPlan></DietPlan>
    </UserAuth>
  );
};

export default DietPlans;
