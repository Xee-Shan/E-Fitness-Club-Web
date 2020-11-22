import React from "react";
import Particles from "particles-bg";

const Intro = () => {
  return (
    <>
      <div style={{ backgroundColor: "#1B4986", height: "400px" }}>
        <Particles
          color="#d8d8d8"
          num={100}
          type="cobweb"
          bg={false}
        ></Particles>
      </div>
      <br />
      <h1
        className="h1-responsive font-weight-bold"
        style={{
          textAlign: "center",
          color: "black",
        }}
      >
        Contact Us
      </h1>
    </>
  );
};

export default Intro;
