import React,{useState,useEffect} from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol,MDBContainer } from 'mdbreact';
import SideNav from "./SideNav//SideNav";
import axios from "axios";

export default function AdminHome() {
    const [count,setCount]=useState({});
    const [product,setProduct]=useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await axios.get(
            "http://localhost:5000/users/get/countOfUser",
            {
              headers: { "x-auth-token": localStorage.getItem("auth-token") },
            }
          );
          console.log(response.data);
          setCount(response.data);
        }
        fetchData();
      }, []);
      useEffect(() => {
        async function fetchData() {
          const response = await axios.get("http://localhost:5000/products/get", {
            headers: { "x-auth-token": localStorage.getItem("auth-token") },
          });
          setProduct(response.data);
        }
        fetchData();
      }, [product]);
    
    return (
        <div>
            <SideNav/>
        <MDBContainer>
            <br/>
            <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>No. of Trainer</MDBCardTitle>
          <MDBCardText>
            {count.trainerCount}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>No. of Products</MDBCardTitle>
          <MDBCardText>
            {product.length}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>No. of Physiatrist</MDBCardTitle>
          <MDBCardText>
            {count.physiatristCount}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>No. of Nutritionist</MDBCardTitle>
          <MDBCardText>
          {count.nutritionistCount}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>No. of User</MDBCardTitle>
          <MDBCardText>
          {count.userCount}
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
        </MDBContainer>
        </div>
    )
}
