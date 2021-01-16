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
        <div>
            <Admin>
      <SideNav />
      <br/>
      <MDBContainer>  
         
      </MDBContainer>
    </Admin>
        </div>
    )
}
