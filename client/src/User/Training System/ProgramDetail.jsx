import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

const ProgramDetail = (props) => {
  const [program, setProgram] = useState({});

  const fetchData = async () => {
    const res = await Axios.get(
      "http://localhost:5000/training/get/" + props.match.params.id
    );
    console.log(res.data.title);
    setProgram(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <MDBContainer>
        <br />
        <iframe
          width="1100"
          height="400"
          src="https://www.youtube.com/embed/ZzOk6yH9bT8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </MDBContainer>
      <h1>{program?.title}</h1>
      <MDBContainer>
        <br />
        <p className="h3 text-center mb-4">Complete Workout Schedule</p>
        <MDBTable bordered>
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              <th>Day</th>
              <th>Area</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {program?.exercise?.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.day}</td>
                  <td>{data.area}</td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
      <MDBContainer>
        <br />
        <p className="h3 text-center mb-4">Complete Workout List</p>
        <MDBTable bordered>
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              <th>Exercise Name</th>
              <th>Sets</th>
              <th>reps</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {program?.workoutList?.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.exerciseName}</td>
                  <td>{data.sets}</td>
                  <td>{data.reps}</td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </>
  );
};
export default ProgramDetail;
