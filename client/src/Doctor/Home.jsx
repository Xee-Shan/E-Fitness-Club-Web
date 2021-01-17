import { MDBContainer } from 'mdbreact';
import React,{useEffect} from 'react'
import DoctorAuth from "../auth/DoctorAuth";
import SideNav from "./SideNav/SideNav";
 
 export default function Home() {
     return (
        <DoctorAuth>
        <SideNav/>
         <MDBContainer>
            <br/>
           <h1>Welcome to Physiatrist's Panel</h1>
         </MDBContainer>
         </DoctorAuth>
     )
 }
 