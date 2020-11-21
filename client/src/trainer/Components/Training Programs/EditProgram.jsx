import React, { useState, useEffect } from "react";
import { MDBBtn, MDBInput, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SideNav from "../SideNav/SideNav";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";

const EditProgram = () => {
  const { id } = useParams();
  const history = useHistory();
  const [programId, setProgramId] = useState("");
  const [title, setTitle] = useState("");
  const [targetArea, setTargetArea] = useState("");
  const [equipment, setEquipment] = useState("");
  const [description, setDescription] = useState("");

  const getPrograms = async () => {
    await Axios.get("http://localhost:5000/training/get/" + id).then((res) => {
      if (res) {
        setProgramId(res.data.programId);
        setTitle(res.data.title);
        setTargetArea(res.data.targetArea);
        setEquipment(res.data.equipment);
        setDescription(res.data.description);
      }
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      programId: programId,
      title: title,
      targetArea: targetArea,
      equipment: equipment,
      description: description,
    };
    await Axios.put("http://localhost:5000/training/update/" + id, data).then(
      (res) => {
        if (res) history.push("/trainer/program");
      }
    );
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
