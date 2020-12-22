import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBBtn,
  MDBView,
  MDBContainer,
} from "mdbreact";
import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router-dom";

export default function Product() {
  const history = useHistory();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/products/get", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      setProduct(response.data);
    }
    fetchData();
  }, [product]);

  function btnClicked(id) {
    history.push("/user/productDetail/" + id);
  }
  return (
    <>
      <Navbar />
      <MDBContainer>
        <br/>
      <MDBRow>
        {product?.length === 0 ? (
          <h2 style={{ paddingLeft: "0.5em" }}>NOTHING TO DISPLAY YET...</h2>
        ) : (
          product?.map((product, i) => (
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4" key={i}>
              <MDBView className="overlay rounded z-depth-1">
                <div>
                  <img
                    src={product.imageURL}
                    alt=""
                    className="img-fluid"
                    style={{
                      maxHeight: "25vw",
                      minHeight: "25vw",
                      maxWidth: "25vw",
                      minWidth: "25vw",
                    }}
                  />
                </div>
              </MDBView>
              <MDBCardBody
                className="pb-0"
                style={{
                  boxSizing: "border-box",
                }}
              >
                <h4 className="font-weight-bold my-3">{product.name}</h4>
                <p className="grey-text">{product.brand}</p>
                <b>${product.price}</b>
                <br />
                <MDBBtn
                  className="blue-gradient"
                  onClick={() => btnClicked(product._id)}
                  /*href={"/user/productDetail/"+product._id}*/
                >
                  Details
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          ))
        )}
      </MDBRow>
      </MDBContainer>
    </>
  );
}
