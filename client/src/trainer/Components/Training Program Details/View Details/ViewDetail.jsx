import React, { useState, useEffect } from "react";
import Axios from "axios";
import SideNav from "../../SideNav/SideNav";
import {
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
} from "mdbreact";
import { useHistory } from "react-router-dom";

const View = (props) => {
  const [data, setData] = useState([]);

  const history = useHistory();

  const fetchProgramDetail = async () => {
    const res = await Axios.get(
      "http://localhost:5000/training/get/" + props.match.params.id
    );
    setData(res.data);
  };

  useEffect(() => {
    fetchProgramDetail();
  }, []);

  const editSchedule = (i) => {
    history.push("/trainer/editSchedule/" + props.match.params.id + "/" + i);
  };

  const editWorkout = (i) => {
    history.push("/trainer/editWorkout/" + props.match.params.id + "/" + i);
  };
  return (
    <>
      <SideNav />
      <MDBContainer>
        <br />
        <p className="h4 text-center mb-4">Complete Program Schedule</p>
        <MDBTable bordered striped small>
          <MDBTableHead color="black" textWhite>
            <tr>
              <th className="text-center">Day</th>
              <th className="text-center">Area</th>
              <th className="text-center">Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data?.exercise?.map((data, i) => {
              return (
                <tr key={i}>
                  <td className="text-center">{data.day}</td>
                  <td className="text-center">{data.area}</td>
                  <td className="text-center">
                    <MDBBtn
                      size="sm"
                      color="warning"
                      onClick={() => editSchedule(i)}
                    >
                      Edit
                    </MDBBtn>
                  </td>
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
              <th className="text-center">Exercise Name</th>
              <th className="text-center">Sets</th>
              <th className="text-center">Reps</th>
              <th className="text-center">Action</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data?.workoutList?.map((data, i) => {
              return (
                <tr key={i}>
                  <td className="text-center">{data.exerciseName}</td>
                  <td className="text-center">{data.sets}</td>
                  <td className="text-center">{data.reps}</td>
                  <td className="text-center">
                    <MDBBtn
                      size="sm"
                      color="warning"
                      onClick={() => editWorkout(i)}
                    >
                      Edit
                    </MDBBtn>
                  </td>
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
