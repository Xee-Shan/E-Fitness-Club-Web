import React, { useState, useEffect } from "react";
import Axios from "axios";
import SideNav from "../SideNav/SideNav";
import { MDBTable, MDBTableHead, MDBTableBody, MDBContainer } from "mdbreact";

const View = () => {
  const [data, setData] = useState([]);
  const fetchProgramDetail = async () => {
    const res = await Axios.get("http://localhost:5000/exercise/get");
    setData(res.data);
  };

  useEffect(() => {
    fetchProgramDetail();
  }, []);

  return (
    <>
      <SideNav />
      <br />
      <br />
      
          {
            data.map(data=>(
              data.exercise.map((arr,i)=>{
                return( <div key={i}>
                  <h1>{arr.day}</h1>
                  <h1>{arr.area}</h1>
                  </div>
                  )
              })
            ))
          }
    </>
  );
};

export default View;
