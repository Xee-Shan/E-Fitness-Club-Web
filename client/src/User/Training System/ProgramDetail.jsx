import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../Navbar/Navbar";
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import UserAuth from "../../auth/UserAuth";

const ProgramDetail = (props) => {
  const [program, setProgram] = useState({});

  const fetchData = async () => {
    const res = await Axios.get(
      "http://localhost:5000/training/get/" + props.match.params.id,
      { headers: { "x-auth-token": localStorage.getItem("auth-token") } }
    );
    setProgram(res.data);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <UserAuth>
      <>
        <Navbar />
        <MDBContainer>
          <br />
          <h1 className="h1 text-center mb-4">{program.title}</h1>
          <p>{program.description}</p>
        </MDBContainer>
        <MDBContainer>
          <br />
          <img
            src={program.imageURL}
            alt="programs"
            style={{ width: "100%" }}
          />
        </MDBContainer>
        <MDBContainer>
          <br />
          <p className="h4 text-center mb-4">Complete Workout Schedule</p>
          <MDBTable bordered striped small>
            <MDBTableHead color="black" textWhite>
              <tr>
                <th className="text-center">Day</th>
                <th className="text-center">Area</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {program?.exercise?.map((data, i) => {
                return (
                  <tr key={i}>
                    <td className="text-center">{data.day}</td>
                    <td className="text-center">{data.area}</td>
                  </tr>
                );
              })}
            </MDBTableBody>
          </MDBTable>
        </MDBContainer>
        <MDBContainer>
          <br />
          <p className="h4 text-center mb-4">Complete Workout List</p>
          <MDBTable bordered striped small>
            <MDBTableHead color="black" textWhite>
              <tr>
                <th className="text-center">Day</th>
                <th className="text-center">Exercise Name</th>
                <th className="text-center">Sets</th>
                <th className="text-center">reps</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {program?.workoutList?.map((data, i) => {
                return (
                  <tr key={i}>
                    <td className="text-center">{data.day}</td>
                    <td className="text-center">{data.exerciseName}</td>
                    <td className="text-center">{data.sets}</td>
                    <td className="text-center">{data.reps}</td>
                  </tr>
                );
              })}
            </MDBTableBody>
          </MDBTable>
        </MDBContainer>
      </>
    </UserAuth>
  );
};
export default ProgramDetail;
