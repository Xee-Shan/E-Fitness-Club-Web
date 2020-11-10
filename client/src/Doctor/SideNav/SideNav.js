import React, { useState ,useEffect} from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./SideNav.css";
import { IconContext } from "react-icons";
import {FaUserAlt} from "react-icons/fa";
import { MDBBtn } from "mdbreact";
import history from "../../history/History";
import axios from "axios";
import DoctorAuth from "../../auth/DoctorAuth";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [userName,setUserName]=useState("");
  const [room]=useState("hospital room");
  
  useEffect(()=>{
    axios.get("http://localhost:5000/users/getUser",{headers:{"x-auth-token":localStorage.getItem("auth-token")}}).then(res=>{
        setUserName(res.data.userName);
    }
    );
},[]);
  
SidebarData[1].path=`/chat?name=${userName}&room=${room}`;

  const logout = () => {
    localStorage.removeItem("auth-token");
    history.push("/login");
  };

  return (
    <DoctorAuth>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h2 style={{fontFamily:"mono space",color:"white"}}>{userName} <FaUserAlt /></h2>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"} >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle" >
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path?item.path:"#"}>
                    {item.icon}
                    <span>{item.title}</span>
                    <h4 style={{color:"white",textDecoration:"underline",fontFamily:"mono space",paddingLeft:"1em"}}>{item.heading}</h4>
                  </Link>
                </li>
              );
            })}
            <MDBBtn onClick={logout} style={{ left: "20%" }}>
              Logout
            </MDBBtn>
          </ul>
        </nav>
      </IconContext.Provider>
    </DoctorAuth>
  );
}

export default Navbar;