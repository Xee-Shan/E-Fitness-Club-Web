import React from "react";
import { useState, useEffect } from "react";
import Admin from "../../auth/Admin";
import { MDBBtn } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from "mdbreact";
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import axios from "axios";
import SideNav from "../SideNav/SideNav";

export default function Employee() {
  const [employee, setEmployee] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:5000/users/get/employee",
        {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        }
      );
      setEmployee(response.data);
    }
    fetchData();
  }, []);

  async function handleDelete(id) {
    axios.delete("http://localhost:5000/users/delete/employee/" + id, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    setModal(true);
    window.location.reload();
  }
  return (
    <Admin>
      <SideNav />
      <MDBContainer>
        <h2>List of Employees : </h2>
        {employee?.length === 0 ? (
          <h2>No Employees added yet...</h2>
        ) : (
          <MDBTable bordered>
            <MDBTableHead style={{ backgroundColor: "#68717C" }} textWhite>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Job Title</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </MDBTableHead>
            {employee?.map((employee, i) => (
              <MDBTableBody key={i}>
                <tr>
                  <td>{i + 1}</td>
                  <td>{employee.name}</td>
                  <td>{employee.role}</td>
                  <td>{employee.email}</td>
                  <td>{employee.phoneNumber}</td>
                  <td>{employee.address}</td>
                  <td>
                    <MDBContainer>
                      <MDBBtn color="danger" onClick={toggle}>
                        Delete Account
                      </MDBBtn>
                      <MDBModal isOpen={modal} toggle={toggle}>
                        <MDBModalHeader toggle={toggle}>
                          Confirmation
                        </MDBModalHeader>
                        <MDBModalBody>
                          Are you sure you want to permenantly delete this
                          account?
                        </MDBModalBody>
                        <MDBModalFooter>
                          <MDBBtn color="secondary" onClick={toggle}>
                            Close
                          </MDBBtn>
                          <MDBBtn
                            color="primary"
                            onClick={() => handleDelete(employee._id)}
                          >
                            Yes
                          </MDBBtn>
                        </MDBModalFooter>
                      </MDBModal>
                    </MDBContainer>
                  </td>
                </tr>
              </MDBTableBody>
            ))}
          </MDBTable>
        )}
      </MDBContainer>
    </Admin>
  );
}
