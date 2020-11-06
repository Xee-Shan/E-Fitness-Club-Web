import React,{useEffect,useState} from 'react';
import axios from "axios";
import {MDBBtn,MDBContainer} from "mdbreact";
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
                    <div>
                     <b> Consumer's Name :  {order.name} | Consumer's Email : {order.email}</b>
                    </div>
                   {order.orderList.map((item,j)=>{
                       return (<div key={j}>
                                Product Name: {item.name} | Product Price : {item.price} | Product Quantity : {item.quantity}
                                 </div>   )
                   })}
                   <MDBBtn color="secondary" onClick={()=>handleDelivered(order._id)}style={{float:"right"}}>Delivered</MDBBtn>
                   <br/> <br/>
                   <hr style={{border:"0.1px solid black"}}/>
                   
                    </div>
                ))
            }
        </MDBContainer>
        </Admin>
    )
}
