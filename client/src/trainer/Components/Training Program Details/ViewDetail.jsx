import React, { useState, useEffect } from "react";
import Axios from "axios";
import SideNav from "../SideNav/SideNav";
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from "mdbreact";

const View = () => {
  const [data, setData] = useState([]);
  const fetchProgramDetail = async () => {
    const res = await Axios.get("http://localhost:5000/exercise/get");
    setData(res.data);
    console.log(res.data._id);
  };

  useEffect(() => {
    fetchProgramDetail();
  }, []);

  return (
    <>
      <SideNav />
      <br />
      <br />
      <MDBContainer>
        <MDBTable>
          <MDBTableHead color="black" textWhite>
            <tr>
              <th>Day</th>
              <th>Area</th>
            </tr>
          </MDBTableHead>
        </MDBTable>
      </MDBContainer>
    </>
  );
};

export default View;
