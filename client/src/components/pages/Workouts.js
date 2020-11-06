import React from "react";
import UserAuth from "../../auth/UserAuth";
import Navbar from "../navbar/Navbar";

const Workouts = () => {
  return (
    <UserAuth>
      <Navbar />
      <h1>Workout Page</h1>;
    </UserAuth>
  );
};

export default Workouts;
