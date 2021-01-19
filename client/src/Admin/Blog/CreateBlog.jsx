import React, { useState } from "react";
import Axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import SideNav from "../SideNav/SideNav";
import { useHistory } from "react-router-dom";
import Admin from "../../auth/Admin";

const CreateBlog = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [content, setContent] = useState("");
  const history = useHistory();

  const onChangeEditor = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("content", content);
    Axios.post("http://localhost:5000/blog/create", formData,{
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      if (res) {
        history.push("/admin/getBlog");
      } else alert("Error occured");
    });
  };

  return (
    <Admin>
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
                  <img src={previewImage} alt="" />
                  <input
                    type="file"
                    accept=".jpeg, .jpg, .png"
                    name="file"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                      setPreviewImage(URL.createObjectURL(e.target.files[0]));
                    }}
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    style={{ borderStyle: "none" }}
                    required
                  />
                </div>
                <div>
                  <br />
                  <CKEditor
                    editor={ClassicEditor}
                    data={content}
                    onChange={onChangeEditor}
                  />
                </div>
                <br />
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
    </Admin>
  );
};

export default CreateBlog;
