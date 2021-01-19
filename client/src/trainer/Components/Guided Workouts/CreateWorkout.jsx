import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import SideNav from "../SideNav/SideNav";

export default function UploadVideo() {
  const [title, setTitle] = useState("");
  const [targetArea, setTargetArea] = useState("");
  const [equipment, setEquipment] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState();

  const btnClicked = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video", video);
    formData.append("description", description);
    formData.append("equipment", equipment);
    formData.append("targetArea", targetArea);
    formData.append("title", title);
    const response = await axios.post(
      "http://localhost:5000/training/uploadVideo",
      formData,
      {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      }
    );
    console.log(response.data);
    if (response.data.success) {
      alert("Success");
    } else {
      alert("Unsuccessful");
    }
  };
  return (
    <div>
      <SideNav />
      <MDBContainer>
        <br />
        <MDBRow>
          <MDBCol md="3" />
          <MDBCol md="6">
            <form>
              <p className="h1 text-center mb-4">Add Details</p>
              {/* {error && (
                    <ErrorNotice
                      message={error}
                      clearError={() => setError(undefined)}
                    />
                  )} */}
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Uplaod Video
              </label>
              {/* <img src={previewImage} alt="" /> */}
              <input
                type="file"
                accept=".mp4, .mkv"
                name="file"
                onChange={(e) => {
                  setVideo(e.target.files[0]);
                }}
                id="defaultFormRegisterNameEx"
                className="form-control"
                style={{ borderStyle: "none" }}
                required
              />
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Title
              </label>
              <input
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Target Area
              </label>
              <input
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                onChange={(e) => setTargetArea(e.target.value)}
                required
              />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Equipment
              </label>
              <input
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                onChange={(e) => setEquipment(e.target.value)}
                required
              />
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Descrpition
              </label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon">
                    <i className="fas fa-pencil-alt prefix"></i>
                  </span>
                </div>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="text-center mt-4">
                <MDBBtn
                  onClick={(e) => btnClicked(e)}
                  color="unique"
                  type="submit"
                >
                  Upload
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="3" />
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
