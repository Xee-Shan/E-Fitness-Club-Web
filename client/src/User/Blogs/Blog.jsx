import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdbreact";
import Navbar from "../../components/navbar/Navbar";
import { useHistory } from "react-router-dom";

const Program = () => {
  const [blog, setBlog] = useState([]);

  const history = useHistory();

  const fetchData = async () => {
    const response = await Axios.get("http://localhost:5000/blog/get");
    setBlog(response.data);
  };

  const btnClicked = (id) => {
    history.push("/user/programdetail/" + id);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <br />
      <p className="h1 text-center mb-4">All Blogs </p>
      <br />
      <MDBContainer className="text-center">
        <MDBRow>
          {blog?.length === 0 ? (
            <h2 style={{ paddingLeft: "0.5em" }}>NOTHING TO DISPLAY YET...</h2>
          ) : (
            blog?.map((data, i) => (
              <MDBCol md="4" key={i}>
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage
                    className="img-fluid"
                    src={"http://localhost:5000/" + data.imageName}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{data.title}</MDBCardTitle>

                    <MDBBtn onClick={() => btnClicked()}>Details</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))
          )}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Program;
