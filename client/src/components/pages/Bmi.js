import React from "react";
import BmiCalculator from "../BMI/BMICalculator";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import BMIBack from "../BMI/BMIBack.jpg"

const Bmi = () => {
  return (
    <div style={{backgroundImage:`url(${BMIBack})`,backgroundSize:"100% 100%"}}>
      <Navbar />
      <BmiCalculator/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Bmi;
