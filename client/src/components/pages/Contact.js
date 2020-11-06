import React from "react";
import Intro from "../contact page components/Intro";
import ContactForm from "../contact page components/ContactForm";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Contact;
