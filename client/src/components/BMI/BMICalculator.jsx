import React, { useState } from "react";
import { MDBBtn } from "mdbreact";
import styles from "./BMICalculator.module.css";
import Calculation from "./Calculation";
//23kg<=wight>=200
//2ftheight<=8ft0inch

export default function BMICalculator() {
  let [weight, setWeight] = useState("");
  let [foot, setFoot] = useState("");
  let [inch, setInch] = useState("");
  let [index, setIndex] = useState("");
  let [age, setAge] = useState("");
  let [show, setShow] = useState("false");
  let [ageErr, setAgeErr] = useState();
  let [footErr, setFootErr] = useState();
  let [inchErr, setInchErr] = useState();
  let [weightErr, setWeightErr] = useState();

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };
  const onChangeWeight = (e) => {
    setWeight(e.target.value);
  };
  const onChangeFoot = (e) => {
    setFoot(e.target.value);
  };
  const onChangeInch = (e) => {
    setInch(e.target.value);
  };

  let validate = () => {
    let error = false;
    if (weight === "" || weight < 23 || weight > 200) {
      setWeightErr("Invalid or empty weight");
      error = true;
    }
    if (inch === "" || inch < 0 || inch > 11) {
      setInchErr("Invalid or Empty input");
      error = true;
    }
    if (foot === "" || foot < 2 || foot > 8) {
      setFootErr("Invalid or empty input");
      error = true;
    }
    if (age === "" || age < 10) {
      setAgeErr("Invalid or empty age");
      error = true;
    }
    return error;
  };
  const onClick = (e) => {
    let err = validate();
    if (!err) {
      setAgeErr("");
      setFootErr("");
      setInchErr("");
      setWeightErr("");
      e.preventDefault();
      //Convert in float otherwise formula would not work
      inch = parseFloat(inch);
      foot = parseFloat(foot);
      weight = parseFloat(weight);
      index = parseFloat(index);
      foot += inch / 12;
      foot /= 3.281; // convert to meters
      let ans = 0;
      ans = weight / (foot * foot);
      ans = ans.toFixed(1);
      ans = parseFloat(ans);
      setIndex(ans);
      setShow("true");
    }
  };
  let myComponent = () => {
    if (show === "true") return <Calculation ans={index} />;
  };

  return (
    <>
      <div className={styles.div}>
        <h1 style={{ fontFamily: "Do Hyeon,sans-serif", marginTop: "25px" }}>
          Calculate <br /> Your Body Mass Index <br />
          (BMI)
        </h1>
        <p><strong>
          This BMI calculator measures your body fat by using your weight and
          height.
          <br />
          Your BMI can indicate if you are underweight, normal, overweight or
          obese,
          <br /> and it can also suggest your risk for chronic disease.
          </strong></p>
        <br />
        <form>
          <select className={styles.select}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <br />
          <label htmlFor="age" className={styles.label}>
            Age : &emsp;&emsp;&emsp;
          </label>
          <input
            type="text"
            name="age"
            className={styles.input}
            maxLength="2"
            onChange={onChangeAge}
          />
          <small className={styles.small}>{ageErr}</small>
          <br />
          <br />
          <label htmlFor="age" className={styles.label}>
            Height(feet) :{" "}
          </label>
          <input
            type="text"
            name="height"
            className={styles.input}
            onChange={onChangeFoot}
            maxLength="1"
          />
          <small className={styles.small}>{footErr}</small>
          <br />
          <br />
          <label className={styles.label}>Height(Inch) : </label>
          <input
            type="text"
            name="height"
            className={styles.input}
            onChange={onChangeInch}
            maxLength="2"
          />
          <small className={styles.small}>{inchErr}</small>
          <br />
          <br />
          <label htmlFor="weight" className={styles.label}>
            Weight(kg) :{" "}
          </label>
          <input
            type="text"
            name="weight"
            className={styles.input}
            onChange={onChangeWeight}
            maxLength="3"
          />
          <small className={styles.small}>{weightErr}</small>
          <br />
          <br />
          <MDBBtn
            className="blue-gradient"
            onClick={onClick}
            outline
            color="white"
          >
            Calculate
          </MDBBtn>
        </form>
        <br />
        <p>
          <span className={styles.span}>*</span><strong>This BMI calculator is intended
          for informational purposes only, and should not be interpreted as
          specific medical advice. A qualified health care provider should be
          consulted before making decisions about therapies and/or health
          conditions.
          </strong>
        </p>
        <div>{myComponent()}</div>
      </div>
    </>
  );
}
