import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdbreact";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const GetPrograms = ({ program }) => {
  const history = useHistory();

  const deleteProgram = async (id) => {
    await Axios.delete("http://localhost:5000/training/delete/" + id, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      if (res) {
        window.location.reload();
      }
    });
  };

  const editProgram = async (id) => {
    history.push("/trainer/edit/program/" + id);
  };

  return (
    <MDBTable bordered striped small>
      <MDBTableHead color="black" textWhite>
        <tr>
          <th className="text-center">Program Id</th>
          <th className="text-center">Title</th>
          <th className="text-center">Target Area</th>
          <th className="text-center">Equipment</th>
          <th className="text-center">Actions</th>
          <th className="text-center">Details</th>
        </tr>
      </MDBTableHead>

      {program?.map((program) => (
        <MDBTableBody key={program._id}>
          <tr>
            <td className="text-center">{program.programId}</td>
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
