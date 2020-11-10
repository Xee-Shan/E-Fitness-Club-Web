import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBBadge,
  MDBBtn,
} from "mdbreact";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
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
  return (
    <MDBNavbar color="pink accent-2" dark expand="md">
      <MDBNavbarBrand>
        <MDBNavLink to="/">
          <strong className="white-text">E-Fitness Club</strong>
        </MDBNavLink>
      </MDBNavbarBrand>

      <MDBNavbarNav left>
        {userData.user ? (
          <>
            <MDBNavItem>
              <MDBNavLink to="/user/program">WORKOUTS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/dietplans">DIET PLANS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/user/product">SHOP</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/join">HEALTH CARE</MDBNavLink>
            </MDBNavItem>
          </>
        ) : (
          <>
            <MDBNavItem>
              <MDBNavLink to="/">HOME</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/about">ABOUT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">CONTACT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/bmi">BMI</MDBNavLink>
            </MDBNavItem>
          </>
        )}
      </MDBNavbarNav>
      <MDBNavbarNav right>
        {userData.user ? (
          <>
            <MDBNavItem>
              <MDBNavLink to="/user/cart">
                {" "}
                <MDBBadge color="danger" className="ml-2">
                  {localStorage.getItem("item-count")}
                </MDBBadge>
                <FaShoppingCart color="black" style={{ width: "150%" }} />
              </MDBNavLink>
            </MDBNavItem>
            &nbsp;&nbsp;
            <MDBNavItem>
              <MDBBtn onClick={logout} className="pink lighten-2">
                Log out
              </MDBBtn>
            </MDBNavItem>
          </>
        ) : (
          <>
            <MDBNavItem>
              <MDBBtn onClick={login} className="pink lighten-2">
                Log in
              </MDBBtn>
            </MDBNavItem>
            <MDBNavItem>
              <MDBBtn onClick={register} className="pink lighten-2">
                Register
              </MDBBtn>
            </MDBNavItem>
          </>
        )}
      </MDBNavbarNav>
    </MDBNavbar>
  );
};

export default Navbar;