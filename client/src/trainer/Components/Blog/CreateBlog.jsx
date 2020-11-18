import React, { useState } from "react";
import Axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import SideNav from "../SideNav/SideNav";

const CreatePrograms = () => {
  const [title, setTitle] = useState();

  const [image, setImage] = useState();

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    Axios.post("http://localhost:5000/blog/create", formData).then((res) => {
      if (res.data.success) {
        window.alert("Blog Added");
        window.location.reload();
      } else alert("Error occured");
    });
  };
  return (
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
                  label="Title"
                  icon="heading"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
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
  );
};

export default CreatePrograms;
