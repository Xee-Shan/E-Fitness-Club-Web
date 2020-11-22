import React from "react";
import About from "./Images/About-us.jpg"
const Intro = () => {
  return (
    <div style={{ backgroundImage: `url(${About})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" , minHeight: "400px" }}>
      <h1
        className="h1-responsive font-weight-bold"
        style={{
          textAlign: "center",
          color: "white",
          paddingTop: "200px"
        }}
      >
        About Us
      </h1>
    </div>
  );
};

export default Intro;
