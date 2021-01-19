import { MDBContainer } from "mdbreact";
import React, { useEffect, useState } from "react";
import DoctorAuth from "../auth/DoctorAuth";
import SideNav from "./SideNav/SideNav";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
} from "mdbreact";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [blog, setBlog] = useState([]);
  const history = useHistory();
  const [meditation, setMeditation] = useState([]);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/meditation/get", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      if (mounted) setMeditation(response.data);
    }
    fetchData();
    return () => (mounted = false);
  }, [meditation]);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/blog/get", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      if (mounted) setBlog(response.data);
    }
    fetchData();
    return () => (mounted = false);
  }, [blog]);

  return (
    <DoctorAuth>
      <SideNav />
      <MDBContainer>
        <br />
        <h1>Welcome to Physiatrist's Panel</h1>
        <br />
        <MDBRow>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="3">
            <MDBCard
              style={{ width: "15rem", cursor: "pointer" }}
              onClick={() => {
                history.push("/doctor/getBlog");
              }}
            >
              <MDBCardBody>
                <MDBCardTitle>Total Blogs</MDBCardTitle>
                <MDBCardText style={{ textAlign: "center" }}>
                  <b style={{ fontSize: "3em" }}>{blog.length}</b>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol></MDBCol>
          <MDBCol>
            <MDBCard
              style={{ width: "15rem", cursor: "pointer" }}
              onClick={() => {
                history.push("/doctor/meditation");
              }}
            >
              <MDBCardBody>
                <MDBCardTitle>Meditations</MDBCardTitle>
                <MDBCardText style={{ textAlign: "center" }}>
                  <b style={{ fontSize: "3em" }}>{meditation.length}</b>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol></MDBCol>
        </MDBRow>
      </MDBContainer>
    </DoctorAuth>
  );
}
