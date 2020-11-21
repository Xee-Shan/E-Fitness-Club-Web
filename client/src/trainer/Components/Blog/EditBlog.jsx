import React, { useState, useEffect } from "react";
import SideNav from "../SideNav/SideNav";
import { useParams, useHistory } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import Axios from "axios";

const EditBlog = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [content, setContent] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const fetchBlog = async () => {
    Axios.get("http://localhost:5000/blog/get/" + id).then((res) => {
      if (res) {
        setTitle(res.data.title);
        setContent(res.data.content);
      }
    });
  };

  const onChangeEditor = (event, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      content: content,
    };
    await Axios.put("http://localhost:5000/blog/update/" + id, data).then(
      (res) => {
        if (res) {
          history.push("/trainer/getblog");
        }
      }
    );
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
              <div className="grey-text">
                <MDBInput
                  label="Title"
                  icon="heading"
                  type="text"
                  value={title}
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
