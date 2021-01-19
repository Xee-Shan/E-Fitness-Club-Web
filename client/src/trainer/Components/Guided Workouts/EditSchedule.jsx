import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MDBBtn, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import TrainerAuth from "../../../auth/TrainerAuth";
import SideNav from "../SideNav/SideNav";
import { useParams } from "react-router-dom";

export default function EditSchedule() {
  const [day, setDay] = useState();
  const [area, setArea] = useState();

  const { id, index } = useParams();

  const fetchProgramDetail = async () => {
    await Axios.get("http://localhost:5000/training/getVideos/" + id, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      setDay(res.data.exercise[index].day);
      setArea(res.data.exercise[index].area);
    });
  };

  const edit = () => {
    const data = {
      day: day,
      area: area,
    };
    Axios.put(
      "http://localhost:5000/training/edit/guided/schedule/" + id + "/" + index,
      data,
      { headers: { "x-auth-token": localStorage.getItem("auth-token") } }
    );
  };

  useEffect(() => {
    fetchProgramDetail();
  }, []);

  return (
    <TrainerAuth>
      <SideNav />
      <br />
      <br />
      <br />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Update</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Day
              </label>
              <input
                type="text"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                id="defaultFormLoginEmailEx"
                className="form-control"
                required
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Area
              </label>
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                id="defaultFormLoginPasswordEx"
                className="form-control"
                required
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit" onClick={edit}>
                  Update
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="3"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </TrainerAuth>
  );
}
