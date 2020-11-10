import React, { useState, useEffect } from "react";
import Axios from "axios";
import SideNav from "../SideNav/SideNav";
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from "mdbreact";

const View = () => {
  const [data, setData] = useState([]);
  const fetchProgramDetail = async () => {
    const res = await Axios.get("http://localhost:5000/training/get");
    setData(res.data);
  };

  useEffect(() => {
    fetchProgramDetail();
  }, []);
  console.log(data);
  return (
    <>
      <SideNav />
      <MDBContainer>
        <MDBTable bordered>
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              <th>Day</th>
              <th>Area</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {data.map((data) =>
              data.exercise.map((arr, i) => {
                return (
                  <tr key={i}>
                    <td>{arr.day}</td>
                    <td>{arr.area}</td>
                  </tr>
                );
              })
            )}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </>
  );
};

export default View;
