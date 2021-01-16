import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import { MDBBtn } from "mdbreact";
import { FaUserAlt } from "react-icons/fa";
import "./SideNav.css";
import axios from "axios";
import NutritionAuth from "../../auth/NutritionAuth"

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [personName, setPersonName] = useState("");

  const history = useHistory();

  const showSidebar = () => setSidebar(!sidebar);
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/getUser", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      })
      .then((res) => {
        setPersonName(res.data.userName);
      });
  }, []);

  const logout = () => {
    localStorage.setItem("auth-token", "");
    history.push("/");
  };

  return (
    <NutritionAuth>
      <IconContext.Provider value={{ color:"blue-gradient" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h2 style={{ fontFamily: "mono space" ,color:"white"}}>
            {personName} <FaUserAlt />
          </h2>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
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
    </NutritionAuth>
  );
}

export default Navbar;
