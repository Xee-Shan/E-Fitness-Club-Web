import React,{useState,useEffect} from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol,MDBContainer } from 'mdbreact';
import SideNav from "./SideNav//SideNav";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

export default function AdminHome() {
    const [count,setCount]=useState({});
    const [product,setProduct]=useState([]);
    const data = [
      {
        name: 'Physiatrist', count: count.physiatristCount,
      },
      {
        name: 'Trainer', count: count.trainerCount,
      },
      {
        name: 'User', count: count.userCount,
      },
      {
        name: 'Nutritionist', count: count.nutritionistCount,
      }
    ];
    const productData=[];
    product.map(product=>{
      productData.push({
        name:product.name,
        quantity:product.quantity
      });
    });
  

    useEffect(() => {
        async function fetchData() {
          const response = await axios.get(
            "http://localhost:5000/users/get/countOfUser",
            {
              headers: { "x-auth-token": localStorage.getItem("auth-token") },
            }
          );
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
      <MDBCard style={{ width: "15rem"}}>
        <MDBCardBody>
          <MDBCardTitle>Total Products</MDBCardTitle>
          <MDBCardText style={{textAlign:"center"}}>
            <b style={{fontSize:"3em"}}>{product.length}</b>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <br/>
            <div style={{marginLeft:"15%"}}>
      <BarChart
        width={600}
        height={400}
        data={data}
        margin={{
          top: 8, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 11 }} />
        <YAxis interval={1} allowDecimals="false"/> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="count" fill="purple" background={{ fill: '#eee' }} />
      </BarChart>
      <br/> <br/>
      <BarChart
        width={600}
        height={400}
        data={productData}
        margin={{
          top: 8, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 30, right: 11 }} />
        <YAxis interval={1} allowDecimals="false"/> 
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="quantity" fill="teal" background={{ fill: '#eee' }} />
      </BarChart>
      </div>
      <br/>
            
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
