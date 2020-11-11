import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdbreact";
import Axios from "axios";

const GetPrograms = ({ program }) => {
  const deleteProgram = async (id) => {
    const value = window.confirm("Are you sure you want to delete program ?");
    if (value === true) {
      await Axios.delete("http://localhost:5000/training/delete/" + id);
      window.location.reload();
    }
  };

  return (
    <MDBTable>
      <MDBTableHead color="black" textWhite>
        <tr>
          <th>Program Id</th>
          <th>Title</th>
          <th>Target Area</th>
          <th>Equipment</th>
          <th>Actions</th>
          <th>Details</th>
        </tr>
      </MDBTableHead>

      {program?.map((program) => (
        <MDBTableBody key={program._id}>
          <tr>
            <td>{program.programId}</td>
            <td>{program.title}</td>
            <td>{program.targetArea}</td>
            <td>{program.equipment}</td>
            <td>
              <MDBBtn color="warning" size="sm">
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
                href={"/trainer/add/schedule/" + program._id}
              >
                Schedule
              </MDBBtn>
              <MDBBtn
                color="black"
                size="sm"
                href={"/trainer/add/workout/" + program._id}
              >
                Workout
              </MDBBtn>
              <MDBBtn
                color="secondary"
                size="sm"
                href={"/trainer/view/program/" + program._id}
              >
                View
              </MDBBtn>
            </td>
          </tr>
        </MDBTableBody>
      ))}
    </MDBTable>
  );
};

export default GetPrograms;
