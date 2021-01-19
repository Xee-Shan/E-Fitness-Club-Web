import React, { useState, useEffect } from "react";
import { MDBBtn, MDBInput, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SideNav from "../SideNav/SideNav";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import ErrorNotice from "../../../components/error/ErrorNotice";

const EditProgram = () => {
  const { id } = useParams();
  const history = useHistory();
  const [programId, setProgramId] = useState("");
  const [title, setTitle] = useState("");
  const [targetArea, setTargetArea] = useState("");
  const [equipment, setEquipment] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [previewImage, setPreviewImage] = useState("");
  const [cloudinaryId, setCloudinaryId] = useState("");
  const [err, setErr] = useState();

  const getPrograms = async () => {
    await Axios.get("http://localhost:5000/training/get/" + id, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      if (res) {
        setProgramId(res.data.programId);
        setTitle(res.data.title);
        setTargetArea(res.data.targetArea);
        setEquipment(res.data.equipment);
        setDescription(res.data.description);
        setPreviewImage(res.data.imageURL);
        setCloudinaryId(res.data.cloudinary_id);
      }
    });
  };

  const validate = () => {
    if (!programId || !title || !targetArea || !equipment || !description)
      setErr("Please Enter All Fields");
  };

  const submit = async (e) => {
    e.preventDefault();
    validate();

    if (err === undefined) {
      const formData = new FormData();
      formData.append("programId", programId);
      formData.append("title", title);
      formData.append("targetArea", targetArea);
      formData.append("equipment", equipment);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("cloudinary_id", cloudinaryId);

      await Axios.put("http://localhost:5000/training/update/" + id, formData, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      }).then((res) => {
        if (res) history.push("/trainer/program");
      });
    }
  };

  useEffect(() => {
    getPrograms();
  }, []);

  return (
    <>
      <SideNav />
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <form>
              <p className="h1 text-center mb-4">Edit Details</p>
              {err && (
                <ErrorNotice
                  message={err}
                  clearError={() => setErr(undefined)}
                />
              )}
              <div className="grey-text">
                <MDBInput
                  label="Program Id"
                  icon="hashtag"
                  type="text"
                  value={programId}
                  onChange={(e) => setProgramId(e.target.value)}
                />
                <MDBInput
                  label="Title"
                  icon="heading"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <MDBInput
                  label="Target Area"
                  icon="bullseye"
                  type="text"
                  value={targetArea}
                  onChange={(e) => setTargetArea(e.target.value)}
                />
                <MDBInput
                  label="Equipment"
                  icon="dumbbell"
                  type="text"
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                />
                <MDBInput
                  label="Description"
                  icon="info-circle"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <img
                  src={previewImage}
                  alt="program"
                  style={{ width: "100%" }}
                />
                <input
                  type="file"
                  accept=".jpeg, .jpg, .png"
                  name="file"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                    setPreviewImage(URL.createObjectURL(e.target.files[0]));
                    setCloudinaryId("");
                  }}
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  style={{ borderStyle: "none" }}
                  required
                />
              </div>
              <div className="text-center">
                <MDBBtn outline color="secondary" onClick={submit}>
                  Edit
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default EditProgram;
