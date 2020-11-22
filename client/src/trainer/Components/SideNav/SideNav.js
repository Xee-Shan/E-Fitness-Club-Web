import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./SideNav.css";
import { IconContext } from "react-icons";
import { MDBBtn } from "mdbreact";
import { useHistory } from "react-router-dom";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const history = useHistory();

  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => {
    localStorage.removeItem("auth-token");
    history.push("/login");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <FaIcons.FaTimes />
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
    </>
  );
}

export default Navbar;
