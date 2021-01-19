import React, { useEffect, useState } from "react";
import SideNav from "./Components/SideNav/SideNav";
import TrainerAuth from "../auth/TrainerAuth";
import {
  MDBCardBody,
  MDBContainer,
  MDBCardTitle,
  MDBCard,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdbreact";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Dashboard = () => {
  const [selfGuidedPrograms, setSelfGuidedPrograms] = useState();
  const [guidedPrograms, setGuidedPrograms] = useState();
  const [blog, setBlog] = useState();
  const history = useHistory();

  const fetchSelfGuidedPrograms = async () => {
    const res = await axios.get("http://localhost:5000/training/get", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    setSelfGuidedPrograms(res.data);
  };

  const fetchGuidedPrograms = async () => {
    const res = await axios.get(
      "http://localhost:5000/training/specific/getVideos",
      {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      }
    );
    setGuidedPrograms(res.data);
  };

  const fetchBlog = async () => {
    const res = await axios.get("http://localhost:5000/blog/get", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    setBlog(res.data);
  };

  useEffect(() => {
    fetchSelfGuidedPrograms();
  }, []);

  useEffect(() => {
    fetchGuidedPrograms();
  }, []);

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <TrainerAuth>
      <SideNav />
      <MDBContainer>
        <br />
        <p className="h1 text-center">Welcome To Trainer Panel</p>
        <br />
        <br />
        <br />
        <MDBRow>
          <MDBCol md="4">
            <MDBCard
              style={{ width: "100%", cursor: "pointer" }}
              onClick={() => {
                history.push("/trainer/program");
              }}
            >
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  Self Guided Workouts
                </MDBCardTitle>
                <MDBCardText style={{ textAlign: "center" }}>
                  {selfGuidedPrograms?.length}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard
              style={{ width: "100%", cursor: "pointer" }}
              onClick={() => {
                history.push("/trainer/guided/workout");
              }}
            >
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  Guided Workouts
                </MDBCardTitle>
                <MDBCardText style={{ textAlign: "center" }}>
                  {guidedPrograms?.length}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCard
              style={{ width: "100%", cursor: "pointer" }}
              onClick={() => {
                history.push("/trainer/getblog");
              }}
            >
              <MDBCardBody>
                <MDBCardTitle style={{ textAlign: "center" }}>
                  Blogs
                </MDBCardTitle>
                <MDBCardText style={{ textAlign: "center" }}>
                  {blog?.length}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </TrainerAuth>
  );
};

export default Dashboard;
