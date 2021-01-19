import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../User/Navbar/Navbar";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

export default function MeditationDetail(props) {
  const [meditation, setMeditation] = useState({});
  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:5000/meditation/get/" + props.match.params.id,
        {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        }
      );
      if (mounted) setMeditation(response.data);
    }
    fetchData();
    return () => (mounted = false);
  });
  return (
    <>
      <Navbar />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="mb-3">
            <img
              src={meditation.imageURL}
              className="img-fluid z-depth-1"
              alt="Meditations"
            />
          </MDBCol>
        </MDBRow>
        {meditation.audioURL ? (
          <MDBRow>
            <MDBCol md="12" className="mb-3">
              <audio controls style={{ width: "1100px" }}>
                <source src={meditation.audioURL} type="audio/mp3" />
              </audio>
            </MDBCol>
          </MDBRow>
        ) : null}
        <br />
        <p className="h3 text-center">{meditation.title}</p>
        <p className="h5 text-center">{meditation.uploaderName}</p>
        <p style={{ textAlign: "center" }}>{meditation.description}</p>
        <br />
      </MDBContainer>
    </>
  );
}
