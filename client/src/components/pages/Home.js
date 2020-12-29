import React from "react";
import Intro from "../home page components/Intro";
import Features from "../home page components/Features";
import Services from "../home page components/Services";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Features />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
