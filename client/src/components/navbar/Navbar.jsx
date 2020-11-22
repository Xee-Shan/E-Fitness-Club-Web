import React from "react";
import { useHistory } from "react-router-dom";
//import UserContext from "../../context/userContext";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBBtn,
} from "mdbreact";

const Navbar = () => {
  // const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();
  const register = () => history.push("/register");
  const login = () => history.push("/login");
  /*const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.removeItem("auth-token");
    localStorage.removeItem("item-id");
    localStorage.removeItem("item-count");
    history.push("/");
  };*/

  /*useEffect(() => {
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
  }, []);*/
  return (
    <MDBNavbar color="pink accent-2" dark expand="md">
      <MDBNavbarBrand>
        <MDBNavLink to="/">
          <strong className="white-text">E-Fitness Club</strong>
        </MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarNav left>
        <MDBNavItem>
          <MDBNavLink to="/about">ABOUT</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/contact">CONTACT</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to="/bmi">BMI</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right>
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
      </MDBNavbarNav>
    </MDBNavbar>
  );
};

export default Navbar;
