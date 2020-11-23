import React from "react";
import Navbar from "../../Navbar/Navbar";
import UserAuth from "../../../auth/UserAuth";
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import Axios from "axios";
import { useState, useEffect } from "react";

const DietPlan = () => {
  const [dietplans, setDietplan] = useState({});

  const fetchData = async () => {
    const res = await Axios.get("http://localhost:5000/dietplans/get");
    setDietplan(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              <th className="text-center">Weight Type</th>
              <th className="text-center">Meal Type</th>
              <th className="text-center">Diet</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {/* {dietplans?.map((data, i) => {
              return (
                <tr key={i}>
                  <td className="text-center">{data.day}</td>
                  <td className="text-center">{data.userType}</td>
                  <td className="text-center">{data.dietType}</td>
                  <td className="text-center">{data.diet}</td>
                </tr>
              );
            })} */}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </UserAuth>
  );
};

export default DietPlan;
