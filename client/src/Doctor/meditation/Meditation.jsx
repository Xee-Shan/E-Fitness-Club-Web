import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBContainer } from "mdbreact";
import axios from "axios";
import SideNav from "../SideNav/SideNav";
import { useHistory } from "react-router-dom";

export default function Meditation() {
  const history = useHistory();
  const [meditation, setMeditation] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/meditation/get", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      setMeditation(response.data);
      meditation.map(data => {
        console.log(data);
      })
    }
    fetchData();
  }, [meditation]);
  const handleEdit=(id)=>{
    history.push("/doctor/update/"+id);
  }
  return (
    <div>
      <SideNav />
      <MDBContainer>
        <h2>List of Meditation : </h2>
        {meditation.length === 0 ? (
          <h2>Nothing added yet...</h2>
        ) : (
            <MDBTable >
              <MDBTableHead style={{ backgroundColor: "#68717C" }} textWhite>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Audio</th>
                  <th>Action</th>
                </tr>
              </MDBTableHead>
              {meditation?.map((meditation, i) => (
                <MDBTableBody key={i}>
                  <tr>
                    <td>{i + 1}</td>
                    <td><img style={{ height: "100px" }} src={meditation.imageURL} class="img-fluid rounded"
                      alt="..." /></td>
                    <td>{meditation.title}</td>
                    <td>{meditation.description}</td>
                    <td><audio controls><source src={meditation.audioURL} type="audio/mp3" /></audio></td>
                    <td>
                      <MDBBtn color="warning"
                      onClick={() => handleEdit(meditation._id)}
                      >
                        Edit
                    </MDBBtn>
                      <MDBBtn
                        color="danger"
                      // onClick={() => handleDelete(product._id)}
                      >
                        Delete
                    </MDBBtn>
                    </td>
                  </tr>
                </MDBTableBody>
              ))}
            </MDBTable>
          )}
      </MDBContainer>

    </div>
  )
}
