import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  MDBContainer,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";

export default function GetVideos() {
  const [data, setData] = useState([]);
  const history = useHistory();

  const btnClicked = (id) => {
    history.push("/user/guided/workout/detail/" + id);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:5000/training/getVideos",
        {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        }
      );
      console.log(response.data);
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <br />
      <p className="h1 text-center">Guided Workouts</p>
      <br />
      <MDBContainer className="text-center">
        <MDBRow>
          {data?.length === 0 ? (
            <h2 style={{ paddingLeft: "0.5em" }}>NOTHING TO DISPLAY YET...</h2>
          ) : (
            data?.map((program, i) => (
              <MDBCol md="4" key={i}>
                <MDBCard>
                  <MDBCardImage
                    className="img-fluid"
                    src={program.videoURL.replace(".mp4", ".jpg")}
                    waves
                    style={{ width: "100%" }}
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{program.title}</MDBCardTitle>
                    <MDBCardText>
                      Target Areas: {program.targetArea}
                    </MDBCardText>
                    <MDBCardText>Equipments: {program.equipment}</MDBCardText>
                    <MDBCardText>Trainer: {program.uploaderName}</MDBCardText>
                    <MDBBtn
                      onClick={() => btnClicked(program._id)}
                      className="blue-gradient"
                      outline
                      color="white"
                    >
                      Details
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
                <br />
              </MDBCol>
            ))
          )}
        </MDBRow>
      </MDBContainer>
    </div>
    //{data.map((data, i) => {
    //return (
    //<div key={i}>
    //<video width="750" height="500" controls>
    //<source src={data.videoURL} />
    //</video>
    //<br />
    //{/* thumbnail of the video */}
    //<img src={data.videoURL.replace(".mp4", ".jpg")} alt="" />
    //<br />
    //<b>{data.uploaderName}</b>
    //<h2>{data.title}</h2>
    //<h4>
    // {data.targetArea}
    //<br />
    //{data.equipment}
    //</h4>
    //<p>{data.description}</p>
    //</div>
    //  );
    //})}
    //</div>
    // );
  );
}
