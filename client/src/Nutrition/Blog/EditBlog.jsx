import React, { useState, useEffect } from "react";
import SideNav from "../SideNav/SideNav";
import { useParams, useHistory } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import Axios from "axios";
import ErrorNotice from "../../components/error/ErrorNotice";

const EditBlog = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState("");
  const [image, setImage] = useState();
  const [previewImage, setPreviewImage] = useState("");
  const [cloudinaryId, setCloudinaryId] = useState("");
  const [err, setErr] = useState();

  const history = useHistory();
  const { id } = useParams();

  const validate = () => {
    if (!title || !content) {
      setErr("Please Enter All Fields");
    }
  };

  const fetchBlog = async () => {
    await Axios.get("http://localhost:5000/blog/get/" + id, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      if (res) {
        setTitle(res.data.title);
        setContent(res.data.content);
        setPreviewImage(res.data.imageURL);
        setCloudinaryId(res.data.cloudinary_id);
      }
    });
  };

  const onChangeEditor = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const submit = async (e) => {
    e.preventDefault();
    validate();
    if (err === undefined) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", image);
      formData.append("content", content);
      formData.append("cloudinary_id", cloudinaryId);

      await Axios.put("http://localhost:5000/blog/update/" + id, formData, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      }).then((res) => {
        if (res) {
          history.push("/nutritionist/getblog");
        }
      });
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div>
      <SideNav />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <form>
              <p className="h1 text-center mb-4">Edit Blog</p>
              {err && (
                <ErrorNotice
                  message={err}
                  clearError={() => setErr(undefined)}
                />
              )}
              <div className="grey-text">
                <MDBInput
                  label="Title"
                  icon="heading"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <img src={previewImage} alt="" />
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
              <br />
              <div>
                <CKEditor
                  editor={ClassicEditor}
                  data={content}
                  onChange={onChangeEditor}
                />
              </div>
              <br />
              <div className="text-center">
                <MDBBtn outline color="secondary" onClick={submit}>
                  Edit
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default EditBlog;
