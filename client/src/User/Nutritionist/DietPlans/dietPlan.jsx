import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
} from "mdbreact";
import Navbar from "../../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import UserAuth from "../../../auth/UserAuth";

const DietPlan = () => {
  const [dietPlan, setDietplan] = useState([]);
  const history = useHistory();
  const fetchData = async () => {
    const response = await Axios.get("http://localhost:5000/dietplans/get");
    setDietplan(response.data);
  };

  const btnClicked = (id) => {
    history.push("/user/dietPlanDetails/" + id);

  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserAuth>
      <>
        <Navbar />
        <br />
        <p className="h1 text-center mb-4">Diet Plans</p>
        <br />
        <MDBContainer className="text-center">
          <MDBRow>
            {dietPlan?.length === 0 ? (
              <h2 style={{ paddingLeft: "0.5em" }}>
                NOTHING TO DISPLAY YET...
              </h2>
            ) : (
              dietPlan?.map((dietPlan, i) => (
                <MDBCol md="4" key={i} style={{marginBottom:"20px"}}>
                  <MDBCard style={{ width: "22rem" }}>
                  <MDBCardImage
                      className="img-fluid"
                      src={dietPlan.imageURL}
                      waves
                      style={{height:"250px"}}
                    />
                    <MDBCardBody>
                      <MDBCardTitle>{dietPlan.day}</MDBCardTitle>
                      <MDBCardText>User Type: {dietPlan.userType}</MDBCardText>
                      <MDBBtn onClick={() => btnClicked(dietPlan._id)}>
                        Details
                      </MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))
            )}
          </MDBRow>
        </MDBContainer>
      </>
    </UserAuth>
  );
};

export default DietPlan;
