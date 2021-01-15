import React,{useEffect,useState} from 'react';
import axios from "axios";
import {MDBRow,MDBCol,MDBBtn,MDBContainer} from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import SideNav from "../SideNav/SideNav";
import Admin from "../../auth/Admin";

export default function Order() {
    const [order,setOrder]=useState([]);
    useEffect(()=>{
        async function fetchData() {
             await axios.get("http://localhost:5000/orders/get",{headers:{"x-auth-token":localStorage.getItem("auth-token")}})
             .then(res=>{
                 setOrder(res.data)
                });            
          }
          fetchData();
    },[order]);
    async function handleDelivered(id){
        axios.delete("http://localhost:5000/orders/delete/"+id,{headers:{"x-auth-token":localStorage.getItem("auth-token")}});
        window.location.reload();
    }
    return (
        <Admin>
        <SideNav/>
        <br/>
        <MDBContainer>
            {/* {
                order?.length===0?<h3>No orders yet...</h3>
                : order?.map((order,i)=>(
                    <div key={i}>
                    <MDBContainer style={{border:"1px solid black"}}>
                    <div>
                     <h3> Consumer's Name :  {order.name} | Consumer's Email : {order.email}| Order Date : {order.orderDate.slice(0,10)}| Consumer's Phone Number : {order.phoneNumber}| Consumer's Address : {order.address}</h3>
                    </div>
                   {order.orderList.map((item,j)=>{
                       return (<div key={j}>
                            <MDBRow className="mb-4">
          <MDBCol md="4">
            <img src={item.imageURL} className="img-fluid" alt="product" />
          </MDBCol>
        </MDBRow>
                                Product Name: {item.name} | Product Price : {item.price} | Product Quantity : {item.quantity}
                                 </div>   )
                   })}
                   <MDBBtn style={{ backgroundColor: "#68717C" }} onClick={()=>handleDelivered(order._id)}style={{float:"right"}}>Delivered</MDBBtn>
                   <br/> <br/> <br/>
                   
                    </MDBContainer>
                    <br/>
                    </div>
                ))
            } */}
            <MDBTable bordered>
            <MDBTableHead style={{ backgroundColor: "white" }} textWhite>
              <tr style={{color:"black"}}>
                <th>#</th>
                <th>Customer's Name</th>
                <th>Customer's Address</th>
                <th>Customer's Email</th>
                <th>Date</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </MDBTableHead>
            {order?.map((order, i) => (
              <MDBTableBody key={i}>
                <tr>
                  <td>{i+1}</td>
                  <td>{order.name}</td>
                  <td>{order.address}</td>
                  <td>{order.email}</td>
                  <td>{order.orderDate.slice(0,10)}</td>
                  <td>${order.total}</td>
                  <td>
                    <button style={{backgroundColor:"white"}}>
                    <b>✓</b>
                    </button>
                    {" "}
                    <MDBBtn
                      color="danger"
                      onClick>
                      Delete
                    </MDBBtn>
                  </td>
                </tr>
              </MDBTableBody>
            ))}
          </MDBTable>
        </MDBContainer>
        </Admin>
    )
}
