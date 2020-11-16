import React from "react";
import UserAuth from "../../auth/UserAuth";
import Navbar from "../navbar/Navbar";

const Recipes = () => {
  return (
    <UserAuth>
      <Navbar />
      <h1>Recipes</h1>
    </UserAuth>
  );
};

export default Recipes;
