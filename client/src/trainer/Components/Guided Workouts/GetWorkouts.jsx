import React, { useState, useEffect } from "react";
import SideNav from "../SideNav/SideNav";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBBtn,
  MDBTableBody,
} from "mdbreact";
import TrainerAuth from "../../../auth/TrainerAuth";
const GuidedWorkout = () => {
  const [workout, setWorkout] = useState();
  const history = useHistory();

  const deleteProgram = async (id) => {
    await Axios.delete("http://localhost:5000/training/delete/guided/" + id, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      if (res) {
        window.location.reload();
      }
    });
  };

  const editProgram = async (id) => {
    history.push("/trainer/edit/guidedworkout/" + id);
  };

  const fetchWorkouts = async () => {
    const res = await Axios.get(
      "http://localhost:5000/training/specific/getVideos",
      {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      }
    );
    console.log(res.data);
    setWorkout(res.data);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <div>
      <TrainerAuth>
        <SideNav />
        <MDBContainer>
          <br />
          <p className="h1 text-center">Guided Workouts List</p>
          <br />
          <MDBTable bordered striped small>
            <MDBTableHead color="black" textWhite>
              <tr>
                <th className="text-center">Title</th>
                <th className="text-center">Target Area</th>
                <th className="text-center">Equipment</th>
                <th className="text-center">Actions</th>
                <th className="text-center">Details</th>
              </tr>
            </MDBTableHead>

            {workout?.map((program) => (
              <MDBTableBody key={program._id}>
                <tr>
                  <td className="text-center">{program.title}</td>
                  <td className="text-center">{program.targetArea}</td>
                  <td className="text-center">{program.equipment}</td>
                  <td className="text-center">
                    <MDBBtn
                      color="warning"
                      size="sm"
                      onClick={() => editProgram(program._id)}
                    >
                      Edit
                    </MDBBtn>
                    <MDBBtn
                      color="danger"
                      size="sm"
                      onClick={() => deleteProgram(program._id)}
                    >
                      Delete
                    </MDBBtn>
                  </td>
                  <td>
                    <MDBBtn
                      color="cyan"
                      size="sm"
                      href={"/trainer/guided/schedule/" + program._id}
                    >
                      Schedule
                    </MDBBtn>
                    <MDBBtn
                      color="black"
                      size="sm"
                      href={"/trainer/guidedworkout/list/" + program._id}
                    >
                      Workout
                    </MDBBtn>
                    <MDBBtn
                      color="secondary"
                      size="sm"
                      href={"/trainer/guidedworkout/view/" + program._id}
                    >
                      View
                    </MDBBtn>
                  </td>
                </tr>
              </MDBTableBody>
            ))}
          </MDBTable>
        </MDBContainer>
      </TrainerAuth>
    </div>
  );
};

export default GuidedWorkout;
