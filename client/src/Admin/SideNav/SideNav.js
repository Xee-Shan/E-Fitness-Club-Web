import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./SideNav.css";
import { IconContext } from "react-icons";
import { FaUserAlt } from "react-icons/fa";
import { MDBBtn } from "mdbreact";
import axios from "axios";
import Admin from "../../auth/Admin";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [personName, setPersonName] = useState("");

  const history = useHistory();

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    let mounted=true;
    axios
      .get("http://localhost:5000/users/getUser", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      })
      .then((res) => {
        if(mounted)
        setPersonName(res.data.userName);
      });
      return ()=>mounted=false;
  }, []);
  const logout = () => {
    //localStorage.removeItem("auth-token");
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Admin>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar" style={{ backgroundColor: "#68717C" }}>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h2 style={{ fontFamily: "mono space" }}>
            {personName} <FaUserAlt />
          </h2>
        </div>
        <nav
          className={sidebar ? "nav-menu active" : "nav-menu"}
          style={{ backgroundColor: "#68717C" }}
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li
              className="navbar-toggle"
              style={{ backgroundColor: "#68717C" }}
            >
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} style={{height:"47px"}}>
                  <Link to={item.path ? item.path : "#"}>
                    {item.icon}
                    <span>{item.title}</span>
                    <h4
                      style={{
                        color: "white",
                        textDecoration: "underline",
                        fontFamily: "mono space",
                        paddingLeft: "1em",
                      }}
                    >
                      {item.heading}
                    </h4>
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
    </Admin>
  );
}

export default Navbar;
