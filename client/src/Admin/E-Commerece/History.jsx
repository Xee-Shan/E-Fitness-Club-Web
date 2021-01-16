import Admin from "../../auth/Admin";
import SideNav from "../SideNav/SideNav";
import React, { useEffect, useState } from "react";
import { MDBBtn } from "mdbreact";
import { MDBTable, MDBTableBody,MDBRow,MDBCol, MDBTableHead, MDBContainer } from "mdbreact";
import Axios from 'axios';

export default function History() {
    const [history,setHistory]=useState({});
    useEffect(() => {
        async function fetchData() {
          const response = await Axios.get("http://localhost:5000/history/get", {
            headers: { "x-auth-token": localStorage.getItem("auth-token") },
          });
          setHistory(response.data);
        }
        fetchData();
      }, [history]);
    return (
        <div>
            <Admin>
      <SideNav />
      <MDBContainer>
        <h2>List of Products : </h2>
        {History.length === 0 ? (
          <h2>Nothing to diplay</h2>
        ) : (
          <MDBRow>
                        <MDBCol sm="6">
                          <div>
                            <b>Name :</b> {oneOrder.name}
                          </div>
                        </MDBCol>
                        <MDBCol sm="6">
                          <div>
                            <b>Phone No :</b> {oneOrder.phoneNumber}
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol sm="6">
                          <div>
                            <b>Delivery Address :</b> {oneOrder.address}
                          </div>
                        </MDBCol>
                        <MDBCol sm="6">
                          <div>
                            <b>Order Date :</b> {oneOrder.orderDate}
                          </div>
                        </MDBCol>
                      </MDBRow>
      </MDBContainer>
    </Admin>
        </div>
    )
}
