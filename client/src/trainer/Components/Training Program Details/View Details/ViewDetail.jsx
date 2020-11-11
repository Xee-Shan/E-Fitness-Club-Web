import React, { useState, useEffect } from "react";
import Axios from "axios";
import SideNav from "../../SideNav/SideNav";
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from "mdbreact";

const View = (props) => {
  const [data, setData] = useState([]);
  const fetchProgramDetail = async () => {
    const res = await Axios.get(
      "http://localhost:5000/training/get/" + props.match.params.id
    );
    setData(res.data);
  };

  useEffect(() => {
    fetchProgramDetail();
  }, []);
  console.log(data);
  return (
    <>
      <SideNav />
      <MDBContainer>
        <br />
        <p className="h3 text-center mb-4">Complete Program Schedule</p>
        <MDBTable>
          <MDBTableHead color="black" textWhite>
            <tr>
              <th>Day</th>
              <th>Area</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data?.exercise?.map((data, i) => {
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
        <MDBTable>
          <MDBTableHead color="black" textWhite>
            <tr>
              <th>Exercise Name</th>
              <th>Sets</th>
              <th>Reps</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data?.workoutList?.map((data, i) => {
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

export default View;
