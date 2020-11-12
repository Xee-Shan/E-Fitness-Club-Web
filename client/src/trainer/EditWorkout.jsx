import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MDBBtn } from "mdbreact";

export default function EditSchedule(props) {
  const [exercise, setExercise] = useState();
  const [sets, setSets] = useState();
  const [reps, setReps] = useState();
  const [data, setData] = useState();

  const fetchProgramDetail = async () => {
    await Axios.get(
      "http://localhost:5000/training/get/" + props.match.params.id
    ).then((res) => {
      setData(res.data);
      setExercise(res.data.workoutList[props.match.params.index].exerciseName);
      setSets(res.data.workoutList[props.match.params.index].sets);
      setReps(res.data.workoutList[props.match.params.index].reps);
    });
  };

  useEffect(() => {
    fetchProgramDetail();
  }, [props]);

  const edit = () => {
    const data = {
      exerciseName: exercise,
      sets: sets,
      reps: reps,
    };
    Axios.put(
      "http://localhost:5000/training/edit/workout/" +
        props.match.params.id +
        "/" +
        props.match.params.index,
      data
    );
  };
  return (
    <div>
      <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
        Exercise
      </label>
      <input
        type="text"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        id="defaultFormRegisterNameEx"
        className="form-control"
        required
      />
      <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
        Sets
      </label>
      <input
        type="text"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        id="defaultFormRegisterNameEx"
        className="form-control"
        required
      />
      <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
        Reps
      </label>
      <input
        type="text"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        id="defaultFormRegisterNameEx"
        className="form-control"
        required
      />
      <MDBBtn onClick={edit} color="unique" type="submit">
        Edit
      </MDBBtn>
    </div>
  );
}
