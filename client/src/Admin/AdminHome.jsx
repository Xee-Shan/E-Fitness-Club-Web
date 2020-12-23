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
      <MDBCard style={{ width: "22rem"}}>
        <MDBCardBody>
          <MDBCardTitle>Products</MDBCardTitle>
          <MDBCardText>
            <h3>{product.length}</h3>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <br/>
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>Physiatrist</MDBCardTitle>
          <MDBCardText>
            <h3>{count.physiatristCount}</h3>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>Nutritionist</MDBCardTitle>
          <MDBCardText>
          <h3>{count.nutritionistCount}</h3>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>User</MDBCardTitle>
          <MDBCardText>
          <h3>{count.userCount}</h3>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardBody>
          <MDBCardTitle>Trainer</MDBCardTitle>
          <MDBCardText>
            <h3>{count.trainerCount}</h3>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
        </MDBContainer>
        </div>
    )
}
