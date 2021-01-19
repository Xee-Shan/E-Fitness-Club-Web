import React, { useState, useEffect } from "react";
import Axios from "axios";
import GetPrograms from "./GetPrograms";
import Navbar from "../Navbar/Navbar";
import UserAuth from "../../auth/UserAuth";

const Program = () => {
  const [program, setProgram] = useState([]);

  const fetchData = async () => {
    const response = await Axios.get("http://localhost:5000/training/getAll", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    console.log(response.data);
    setProgram(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserAuth>
      <Navbar />
      <br />
      <p className="h1 text-center mb-4">Self Guided Workouts</p>
      <br />
      <GetPrograms program={program} />
      <br />
    </UserAuth>
  );
};

export default Program;
