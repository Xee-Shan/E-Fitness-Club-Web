import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBBtn,
  MDBCardImage,
  MDBCard,
  MDBCardTitle,
  MDBContainer,
} from "mdbreact";
import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router-dom";

export default function ProductCategory(props) {
  const [product, setProduct] = useState();

  const history = useHistory();

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:5000/products/get/productBy/" +
          props.match.params.category,
        {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        }
      );
      if (mounted) setProduct(response.data);
    }
    fetchData();
    return () => (mounted = false);
  }, [product]);

  function btnClicked(id) {
    history.push("/user/productDetail/" + id);
  }
  return (
    <>
      <Navbar />
      <MDBContainer>
        <br />
        <h1 style={{ textAlign: "center" }}>{props.match.params.category}</h1>
        <br />
        <MDBRow>
          {product?.length === 0 ? (
            <h2 style={{ paddingLeft: "0.5em" }}>NOTHING TO DISPLAY YET...</h2>
          ) : (
            product?.map((product, i) => (
              <MDBCol lg="4" md="12" className="mb-lg-0 mb-4" key={i}>
                  <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage
                  style={{
                    height:"250px"
                  }}
                    className="img-fluid"
                    src={product.imageURL}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{product.name}</MDBCardTitle>
                    <p>{product.brand}</p>
                    <p>{product.price} PKR</p>
                    <MDBBtn
                      onClick={() => btnClicked(product._id)}
                      className="blue-gradient"
                      outline
                      color="white"
                    >
                      Details
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
                <br/>
              </MDBCol>
            ))
          )}
        </MDBRow>
      </MDBContainer>
    </>
  );
}
