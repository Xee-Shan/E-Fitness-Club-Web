import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBBtn,
  MDBIcon,
  MDBView,
} from "mdbreact";
import Navbar from "../../components/navbar/Navbar";
import { useHistory } from "react-router-dom";

export default function Product() {
  const [product, setProduct] = useState();

  const history = useHistory();

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
      <MDBRow>
        {product?.length === 0 ? (
          <h2 style={{ paddingLeft: "0.5em" }}>NOTHING TO DISPLAY YET...</h2>
        ) : (
          product?.map((product, i) => (
            <MDBCol lg="4" md="12" className="mb-lg-0 mb-4" key={i}>
              <MDBView className="overlay rounded z-depth-1" waves>
                <div>
                  <img
                    src={"http://localhost:5000/" + product.imageName}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </MDBView>
              <MDBCardBody className="pb-0">
                <h4 className="font-weight-bold my-3">{product.name}</h4>
                <p className="grey-text">{product.brand}</p>
                <b>${product.price}</b>
                <br />
                <MDBBtn
                  onClick={() => btnClicked(product._id)}
                  /*href={"/user/productDetail/"+product._id}*/ color="indigo"
                  size="sm"
                >
                  <MDBIcon far icon="clone" className="left" />
                  Details
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          ))
        )}
      </MDBRow>
    </>
  );
}
