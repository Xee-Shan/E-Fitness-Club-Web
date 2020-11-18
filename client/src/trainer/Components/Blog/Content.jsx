import React, { useState } from "react";
import SideNav from "../SideNav/SideNav";
import QuillEditor from "../Blog/quilleditor";
import { MDBBtn } from "mdbreact";
import Axios from "axios";
const Content = (props) => {
  const [content, setContent] = useState("");
  const [file, setFile] = useState([]);

  const onEditorChange = (value) => {
    setContent(value);
    console.log(value);
  };

  const onFilesChange = (files) => {
    setFile(files);
  };

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      content: content,
    };
    await Axios.post("http://localhost:5000/blog/create/content", data).then(
      (response) => {
        console.log(response);
      }
    );
  };
  return (
    <>
      <SideNav />
      <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
        <div style={{ textAlign: "center" }}>
          <h1> Editor</h1>
        </div>
        <br />
        <QuillEditor
          placeholder={"Start Posting Something"}
          onEditorChange={onEditorChange}
          onFilesChange={onFilesChange}
        />
        <form onSubmit={submit}>
          <div style={{ textAlign: "center", margin: "2rem" }}>
            <MDBBtn size="sm" onClick={submit}>
              Submit
            </MDBBtn>
          </div>
        </form>
      </div>
    </>
  );
};

export default Content;
