import React,{useState,useEffect} from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol,MDBContainer } from 'mdbreact';
import SideNav from "./SideNav//SideNav";
import axios from "axios";
import { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default function AdminHome() {
    const [count,setCount]=useState({});
    const [product,setProduct]=useState([]);
    const data = [
      {
        name: 'Physiatrist', value: count.physiatristCount,
      },
      {
        name: 'Trainer', value: count.trainerCount,
      },
      {
        name: 'User', value: count.userCount,
      },
      {
        name: 'Nutritionist', value: count.nutritionistCount,
      }
    ];

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
      <BarChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 11 }} />
        <YAxis interval={1} allowDecimals="false"/> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="purple" background={{ fill: '#eee' }} />
      </BarChart>
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
