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
  };

  useEffect(() => {
    fetchData();
  });
 
  return (
    <UserAuth>
      <Navbar />
      <MDBContainer>
        <br />
        <p className="h2 text-center mb-4">Diet Plan Schedule</p>
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
            <tr>
              <td className="text-center">{dietplans.day}</td>
              <td className="text-center">{dietplans.userType}</td>
              <td className="text-center">{dietplans.dietType}</td>
              <td
                className="text-center"
                dangerouslySetInnerHTML={{ __html: dietplans.diet }}
              ></td>
            </tr>
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </UserAuth>
  );
};

export default DietPlanDetails;
