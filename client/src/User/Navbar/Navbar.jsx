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
  MDBBadge,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";

const Navbar = () => {
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

  const [category, setCategories] = useState([]);

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
    <MDBNavbar color="pink accent-2" dark expand="md">
      <MDBNavbarBrand>
        <MDBNavLink to="/">
          <strong className="white-text">E-Fitness Club</strong>
        </MDBNavLink>
      </MDBNavbarBrand>

      <MDBNavbarNav left>
        <MDBNavItem>
          <MDBNavLink to="/user/program">WORKOUTS</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/user/dietplans">DIET PLANS</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/user/recipes">RECIPIES </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          {category.length === 0 ? (
            <MDBNavLink to="/user/product">SHOP </MDBNavLink>
          ) : (
            <MDBDropdown>
              <MDBDropdownToggle caret color="primary">
                <a href="/user/product">SHOP</a>
              </MDBDropdownToggle>
              <MDBDropdownMenu basic>
                <MDBDropdownItem header>Categories</MDBDropdownItem>
                {category.map((data, i) => {
                  return (
                    <MDBDropdownItem key={i}>
                      <a href={"/user/productCategory/" + data}>
                        {data}
                      </a>
                    </MDBDropdownItem>
                  );
                })}
              </MDBDropdownMenu>
            </MDBDropdown>
          )}
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/join">HEALTH CARE</MDBNavLink>
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
        <MDBDropdown>
          <MDBDropdownToggle color="pink">
            <FaUserAlt />
          </MDBDropdownToggle>
          <MDBDropdownMenu basic>
            <MDBDropdownItem>
              <MDBNavLink to="/user/profile" style={{ color: "black" }}>
                Profile
              </MDBNavLink>
            </MDBDropdownItem>
            <MDBDropdownItem divider />
            <div onClick={logout}>
              <MDBDropdownItem>
                <a
                  size="sm"
                  href="/"
                  style={{
                    color: "white",
                    backgroundColor: "#B41249",
                  }}
                >
                  Logout
                </a>
              </MDBDropdownItem>
            </div>
          </MDBDropdownMenu>
        </MDBDropdown>
      </MDBNavbarNav>
    </MDBNavbar>
  );
};

export default Navbar;
