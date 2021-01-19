import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBContainer,
} from "mdbreact";
import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router-dom";

export default function Product() {
  const history = useHistory();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let mounted=true;
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/products/get", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      if(mounted)
      setProduct(response.data);
    }
    fetchData();
    return ()=>mounted=false;
  }, [product]);

  function btnClicked(id) {
    history.push("/user/productDetail/" + id);
  }
  return (
    <>
      <Navbar />
      <br />
      <p className="h1 text-center">All Products</p>
      <br />
      <MDBContainer className="text-center">
        <MDBRow>
          {product?.length === 0 ? (
            <h2 style={{ paddingLeft: "0.5em" }}>NOTHING TO DISPLAY YET...</h2>
          ) : (
            product?.map((data, i) => (
              <MDBCol md="4" key={i}>
                <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage
                  style={{
                    height:"250px"
                  }}
                    className="img-fluid"
                    src={data.imageURL}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{data.name}</MDBCardTitle>
                    <p>{data.brand}</p>
                    <p>{data.price} PKR</p>
                    <MDBBtn
                      onClick={() => btnClicked(data._id)}
                      className="blue-gradient"
                      outline
                      color="white"
                    >
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
}
