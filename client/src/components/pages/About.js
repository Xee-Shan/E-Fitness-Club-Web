import React from "react";
import Intro from "../about page components/Intro";
import Team from "../about page components/Team";
import Testimonials from "../about page components/Testimonials";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Team />
      <Testimonials />
      <Footer />
    </>
  );
};

export default About;
