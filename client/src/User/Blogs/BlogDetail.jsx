import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const BlogDetail = (props) => {
  const [blog, setBlog] = useState();

  const fetchData = async () => {
    const res = await Axios.get(
      "http://localhost:5000/blog/get/" + props.match.params.id
    );
    console.log(res.data);
    setBlog(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <MDBContainer>
        <br />
        <p className="h1 text-center">{blog?.title}</p>
        <br />
        <MDBRow>
          <MDBCol md="12" className="mb-3">
            <img
              src={"http://localhost:5000/" + blog?.imageName}
              className="img-fluid z-depth-1"
            />
          </MDBCol>
        </MDBRow>
        <br />
        <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
      </MDBContainer>
    </>
  );
};

export default BlogDetail;
