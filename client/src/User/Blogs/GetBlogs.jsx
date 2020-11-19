import React from "react";
import { useHistory } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
} from "mdbreact";
const GetBlogs = ({ blog }) => {
  const history = useHistory();

  const btnClicked = (id) => {
    history.push("/user/blogdetail/" + id);
  };

  return (
    <>
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

                    <MDBBtn onClick={() => btnClicked(data._id)}>
                      Details
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
                <br />
              </MDBCol>
            ))
          )}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default GetBlogs;
