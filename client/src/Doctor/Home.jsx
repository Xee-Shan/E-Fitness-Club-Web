import React from 'react'
import DoctorAuth from "../auth/DoctorAuth";
import SideNav from "./SideNav/SideNav";
export default function Home() {
    return (
        <DoctorAuth>
            <SideNav/>
           <h1>Welcome to Doctors/Physiatrist Portal</h1>
        </DoctorAuth>
    )
}
