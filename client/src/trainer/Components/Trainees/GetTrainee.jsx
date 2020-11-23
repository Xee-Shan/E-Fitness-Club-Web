import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from "mdbreact";
import Axios from "axios";

const GetTrainee = ({ trainee }) => {
  const deleteTrainee = async (id) => {
    const value = window.confirm("Are you sure you want to delete trainee ?");
    if (value === true) {
      console.log(id);
      await Axios.delete("http://localhost:5000/users/delete/" + id, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      window.location.reload();
    }
  };

  return (
    <MDBTable>
      <MDBTableHead color="black" textWhite>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>User Name</th>
          <th>Gender</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </MDBTableHead>

      {trainee.map((trainee) => (
        <MDBTableBody key={trainee._id}>
          <tr>
            <td>{trainee.name}</td>
            <td>{trainee.email}</td>
            <td>{trainee.userName}</td>
            <td>{trainee.gender}</td>
            <td>{trainee.phoneNumber}</td>
            <td>{trainee.address}</td>

            <td>
              <MDBBtn color="warning" size="sm">
                Edit
              </MDBBtn>
              <MDBBtn
                color="danger"
                size="sm"
                onClick={() => deleteTrainee(trainee._id)}
              >
                Delete
              </MDBBtn>
            </td>
          </tr>
        </MDBTableBody>
      ))}
    </MDBTable>
  );
};

export default GetTrainee;
