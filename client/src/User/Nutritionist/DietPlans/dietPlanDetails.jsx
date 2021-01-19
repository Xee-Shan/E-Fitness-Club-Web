import Navbar from "../../Navbar/Navbar";
import UserAuth from "../../../auth/UserAuth";
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import Axios from "axios";
import React, { useState, useEffect } from "react";

const DietPlanDetails = (props) => {
  const [dietplans, setDietplan] = useState([]);

  const fetchData = async () => {
    const res = await Axios.get(
      "http://localhost:5000/dietplans/get/" + props.match.params.id
    );
    setDietplan(res.data); 
    console.log(res.data);
  };

  useEffect(() => {
    fetchData();
  },[]);
 
  return (
    <UserAuth>
      <Navbar />
      <MDBContainer>
          <br />
          <h1 className="h1 text-center mb-4">{dietplans.title}</h1>
          <img style={{width:"100%"}} src={dietplans.imageURL}/>
          <br/>
          <br/>
          <p className="h4 text-center mb-4">Complete Workout Schedule</p>
          <MDBTable bordered striped small>
            <MDBTableHead color="black" textWhite>
              <tr>
                <th className="text-center">Day</th>
                <th className="text-center">User Type</th>
                <th className="text-center">Diet Type</th>
                <th className="text-center">Diet</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {dietplans?.dietList?.map((data, i) => {
                return (
                  <tr key={i}>
                    <td className="text-center">{data.day}</td>
                    <td className="text-center">{dietplans.userType}</td>
                    <td className="text-center">{data.dietType}</td>
                    <td className="text-center">{data.diet}</td>
                  </tr>
                );
              })}
            </MDBTableBody>
          </MDBTable>
        </MDBContainer>
    </UserAuth>
  );
};

export default DietPlanDetails;
