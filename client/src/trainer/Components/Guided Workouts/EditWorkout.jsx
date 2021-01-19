import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import TrainerAuth from "../../../auth/TrainerAuth";
import { useParams } from "react-router-dom";
import SideNav from "../SideNav/SideNav";

export default function EditSchedule() {
  const [day, setDay] = useState();
  const [exercise, setExercise] = useState();
  const [sets, setSets] = useState();
  const [reps, setReps] = useState();

  const { id, index } = useParams();

  const fetchProgramDetail = async () => {
    await Axios.get("http://localhost:5000/training/getVideos/" + id, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      setDay(res.data.workoutList[index].day);
      setExercise(res.data.workoutList[index].exerciseName);
      setSets(res.data.workoutList[index].sets);
      setReps(res.data.workoutList[index].reps);
    });
  };

  useEffect(() => {
    fetchProgramDetail();
  }, []);

  const edit = () => {
    const data = {
      day: day,
      exerciseName: exercise,
      sets: sets,
      reps: reps,
    };
    Axios.put(
      "http://localhost:5000/training/edit/guided/workout/" + id + "/" + index,
      data,
      { headers: { "x-auth-token": localStorage.getItem("auth-token") } }
    );
  };
  return (
    <TrainerAuth>
      <SideNav />
      <br />
      <br />
      <br />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Update</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Day
              </label>
              <input
                type="text"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                id="defaultFormLoginEmailEx"
                className="form-control"
                required
              />
              <br />
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Exercise
              </label>
              <input
                type="text"
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
                id="defaultFormLoginEmailEx"
                className="form-control"
                required
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Sets
              </label>
              <input
                type="text"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                id="defaultFormLoginPasswordEx"
                className="form-control"
                required
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Reps
              </label>
              <input
                type="text"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                id="defaultFormLoginPasswordEx"
                className="form-control"
                required
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit" onClick={edit}>
                  Update
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="3"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </TrainerAuth>
  );
}
