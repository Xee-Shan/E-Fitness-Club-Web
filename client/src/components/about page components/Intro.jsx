import React from "react";
import Background from "./Images/about.png";

const Intro = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        minHeight: "",
      }}
    >
      <p className="h1 text-center">About</p>
    </div>
  );
};

export default Intro;
