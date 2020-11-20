import React, { useState } from "react";
import Axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import SideNav from "../SideNav/SideNav";
import TrainerAuth from "../../../auth/TrainerAuth";

const CreatePrograms = () => {
  const [programId, setProgramId] = useState("");
  const [title, setTitle] = useState("");
  const [targetArea, setTargetArea] = useState("");
  const [equipment, setEquipment] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("programId", programId);
    formData.append("title", title);
    formData.append("targetArea", targetArea);
    formData.append("equipment", equipment);
    formData.append("description", description);
    formData.append("image", image);

    Axios.post("http://localhost:5000/training/create", formData).then(
      (res) => {
        if (res.data.success) {
          window.alert("Program Added");
          window.location.reload();
        } else alert("Error occured");
      }
    );
  };
  return (
    <TrainerAuth>
      <>
        <SideNav />
        <br />
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <form>
                <p className="h1 text-center mb-4">Add Details</p>
                <div className="grey-text">
                  <MDBInput
                    label="Program Id"
                    icon="hashtag"
                    type="text"
                    onChange={(e) => setProgramId(e.target.value)}
                  />
                  <MDBInput
                    label="Title"
                    icon="heading"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <MDBInput
                    label="Target Area"
                    icon="bullseye"
                    type="text"
                    onChange={(e) => setTargetArea(e.target.value)}
                  />
                  <MDBInput
                    label="Equipment"
                    icon="dumbbell"
                    type="text"
                    onChange={(e) => setEquipment(e.target.value)}
                  />
                  <MDBInput
                    label="Description"
                    icon="info-circle"
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Uplaod Image
                  </label>
                  <input
                    type="file"
                    accept=".jpeg, .jpg, .png"
                    name="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    style={{ borderStyle: "none" }}
                    required
                  />
                </div>
                <div className="text-center">
                  <MDBBtn outline color="secondary" onClick={submit}>
                    Create
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    </TrainerAuth>
  );
};

export default CreatePrograms;
