import React from "react";
import Intro from "../contact page components/Intro";
import ContactForm from "../contact page components/ContactForm";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Details from "../contact page components/Details";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <p className="h1 text-center">Contact us</p>
      <br />
      <ContactForm />
      <br />
      <br />
      <Details />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Contact;
