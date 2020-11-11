import React, { useState, useEffect } from "react";
import Axios from "axios";
import SideNav from "../../SideNav/SideNav";
import {MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from "mdbreact";
import history from "../../../../history/History";

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
 function editSchedule(i){
  history.push("/trainer/editSchedule/"+props.match.params.id+"/"+i);
  }
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
              <th>Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data?.exercise?.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.day}</td>
                  <td>{data.area}</td>
                  <td><MDBBtn color="warning" onClick={()=>editSchedule(i)} >
                      Edit
                    </MDBBtn></td>
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
