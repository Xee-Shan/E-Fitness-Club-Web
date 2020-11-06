import React from "react";
import UserAuth from "../../auth/UserAuth";
import Navbar from "../navbar/Navbar";

const Shop = () => {
  return (
    <UserAuth>
      <Navbar />
      <h1>Shop Page</h1>;
    </UserAuth>
  );
};

export default Shop;
