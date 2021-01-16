import Admin from "../../auth/Admin";
import SideNav from "../SideNav/SideNav";
import React, { useEffect, useState } from "react";
import { MDBBtn } from "mdbreact";
import { MDBTable, MDBTableBody,MDBRow,MDBCol, MDBTableHead, MDBContainer } from "mdbreact";
import Axios from 'axios';


export default function History() {
    const [history,setHistory]=useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await Axios.get("http://localhost:5000/history/get", {
            headers: { "x-auth-token": localStorage.getItem("auth-token") },
          });
          setHistory(response.data);
          console.log(response.data);
        }
        fetchData();
      }, [history]);
    return (
      <>
      <SideNav/>
      <br/> <br/>
        <MDBContainer>
        <h1 style={{marginLeft:"35%"}}>Order History</h1>
        <br/>
          {history.map((history,i)=>{
           return <>
          <hr style={{border:"1.5px solid black "}}/>
           <MDBRow>
                        <MDBCol sm="6">
                          <div>
                            <b>Name :</b> {history.data.name}
                          </div>
                        </MDBCol>
                        <MDBCol sm="6">
                          <div>
                            <b>Phone No :</b> {history.data.phoneNumber}
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol sm="6">
                          <div>
                            <b>Delivery Address :</b> {history.data.address}
                          </div>
                        </MDBCol>
                        <MDBCol sm="6">
                          <div>
                            <b>Order Date :</b> {history.data.orderDate}
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBTable>
                        <MDBTableHead>
                          <tr>
                            <th>#</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Product Brand</th>
                            <th>Product Quantity</th>
                            <th>Product Price(PKR)</th>
                            <th>Delivery Charges(PKR)</th>
                          </tr>
                        </MDBTableHead>
                        {history.data?.orderList?.map((orderList, i) => (
                          <tr>
                            <td>{i + 1}</td>
                            <td>
                              <MDBRow>
                                <MDBCol>
                                  <img src={orderList.imageURL} alt="thumbnail" className="img-thumbnail" />
                                </MDBCol>
                              </MDBRow>
                            </td>
                            <td>{orderList.name}</td>
                            <td>{orderList.brand}</td>
                            <td>{orderList.quantity}</td>
                            <td>{orderList.price}</td>
                            <td>{orderList.deliveryCharges}</td>
                          </tr>

                        ))}
                      </MDBTable>
                      <h4>Total : {history?.data?.total} PKR</h4>
                      <hr style={{border:"1.5px solid black "}}/>
                      </>
})}
        </MDBContainer>
        </>
    )
}
