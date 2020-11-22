import React from "react";
import About from "./Images/About-us.jpg"
const Intro = () => {
  return (
    <div style={{ backgroundImage: `url(${About})`, backgroundRepeat:"no-repeat", backgroundSize:"100% 100%" , minHeight: "500px" }}>
      <h1
        className="h1-responsive font-weight-bold"
        style={{
          textAlign: "center",
          color: "white",
          paddingLeft:"80px",
          paddingTop:"430px",
          fontSize:"60px"
        }}
      >
        About Us
      </h1>
    </div>
  );
};

export default Intro;
