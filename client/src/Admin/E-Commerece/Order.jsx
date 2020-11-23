import React,{useEffect,useState} from 'react';
import axios from "axios";
import {MDBRow,MDBCol,MDBBtn,MDBContainer} from "mdbreact";
import SideNav from "../SideNav/SideNav";
import Admin from "../../auth/Admin";

export default function Order() {
    const [order,setOrder]=useState([]);
    
    useEffect(()=>{
        async function fetchData() {
             await axios.get("http://localhost:5000/orders/get",{headers:{"x-auth-token":localStorage.getItem("auth-token")}})
             .then(res=>setOrder(res.data));            
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
        <MDBContainer>
            <h2 >Orders : </h2>
            <br/>
            <br/>
            {
                order?.length===0?<h3>No orders yet...</h3>
                : order?.map((order,i)=>(
                    <div key={i}>
                    <MDBContainer style={{border:"1px solid black"}}>
                    <div>
                     <h3> Consumer's Name :  {order.name} | Consumer's Email : {order.email}| Consumer's Phone Number : {order.phoneNumber}| Consumer's Address : {order.address}</h3>
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
                   <MDBBtn color="secondary" onClick={()=>handleDelivered(order._id)}style={{float:"right"}}>Delivered</MDBBtn>
                   <br/> <br/> <br/>
                   
                    </MDBContainer>
                    <br/>
                    </div>
                ))
            }
        </MDBContainer>
        </Admin>
    )
}
