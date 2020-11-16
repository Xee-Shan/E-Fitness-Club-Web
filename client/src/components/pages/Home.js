import React from "react";
import Intro from "../home page components/Intro";
import Features from "../home page components/Features";
import Blog from "../home page components/Blog";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Features />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
