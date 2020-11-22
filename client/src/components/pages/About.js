import React from "react";
import Intro from "../about page components/Intro";
import Aboutus from "../about page components/about";
import Team from "../about page components/Team";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <br />
      <br />
      <Aboutus />
      <Team />
      <Footer />
    </>
  );
};

export default About;
