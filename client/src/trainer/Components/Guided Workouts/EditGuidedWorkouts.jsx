import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Axios from "axios";
import SideNav from "../SideNav/SideNav";

export default function UploadVideo() {
  const [title, setTitle] = useState("");
  const [targetArea, setTargetArea] = useState("");
  const [equipment, setEquipment] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const history = useHistory();

  const getPrograms = async () => {
    await Axios.get("http://localhost:5000/training/getVideos/" + id, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      if (res) {
        console.log(res.data);
        setTitle(res.data.title);
        setTargetArea(res.data.targetArea);
        setEquipment(res.data.equipment);
        setDescription(res.data.description);
      }
    });
  };

  const edit = async (e) => {
    e.preventDefault();
    const Data = {
      title: title,
      targetArea: targetArea,
      equipment: equipment,
      description: description,
    };

    await Axios.put(
      "http://localhost:5000/training/update/guidedworkout/" + id,
      Data,
      {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      }
    ).then((res) => {
      if (res) history.push("/trainer/guided/workout");
    });
  };

  useEffect(() => {
    getPrograms();
  }, []);
  return (
    <div>
      <SideNav />
      <MDBContainer>
        <br />
        <MDBRow>
          <MDBCol md="3" />
          <MDBCol md="6">
            <form>
              <p className="h1 text-center mb-4">Edit Guided Workout</p>
              {/* {error && (
                    <ErrorNotice
                      message={error}
                      clearError={() => setError(undefined)}
                    />
                  )} */}

              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Title
              </label>
              <input
                type="text"
                value={title}
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
                value={targetArea}
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
                value={equipment}
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
                  value={description}
                  rows="5"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="text-center mt-4">
                <MDBBtn color="unique" type="submit" onClick={edit}>
                  Edit
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
