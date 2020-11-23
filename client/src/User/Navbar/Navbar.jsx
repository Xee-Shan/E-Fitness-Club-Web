import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBNavbarToggler,
  MDBBadge,
} from "mdbreact";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [category, setCategories] = useState([]);
  const [toggle, setToggle] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.removeItem("auth-token");
    localStorage.removeItem("item-id");
    localStorage.removeItem("item-count");
    history.push("/");
  };

  const Collapse = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:5000/products/get/category",
        {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        }
      );
      setCategories(response.data);
    }
    fetchData();
  }, []);
  return (
    <MDBNavbar className="blue-gradient" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">E-FITNESS CLUB</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={Collapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={toggle} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/user/program">WORKOUTS</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/user/dietplans">DIETPLANS</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/user/recipes">RECEPIES</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/join">HEALTH CARE</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            {category.length === 0 ? (
              <MDBNavLink to="/user/product">SHOP </MDBNavLink>
            ) : (
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <a href="/user/product" style={{ color: "white" }}>
                    SHOP
                  </a>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem header>Categories</MDBDropdownItem>
                  {category.map((data, i) => {
                    return (
                      <MDBDropdownItem key={i}>
                        <a href={"/user/productCategory/" + data}>{data}</a>
                      </MDBDropdownItem>
                    );
                  })}
                </MDBDropdownMenu>
              </MDBDropdown>
            )}
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/user/blog">BLOGS</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/user/cart">
              <MDBBadge color="danger" className="ml-2">
                {localStorage.getItem("item-count")}
              </MDBBadge>
              <FaShoppingCart color="black" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown dropleft>
              <MDBDropdownToggle nav>
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="/user/profile">Settings</MDBDropdownItem>
                <MDBDropdownItem href="/" onClick={logout}>
                  Logout
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
