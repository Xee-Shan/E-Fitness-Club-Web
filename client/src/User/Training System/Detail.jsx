import React, { useEffect, useState } from "react";
import { MDBCol } from "mdbreact";

import Axios from "axios";
const Detail = () => {
  const [detail, setDetail] = useState([]);

  const fetchDetails = async () => {
    const res = await Axios.get("http://localhost:5000/training/get");
    setDetail(res.data);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      {detail?.map((program, i) => (
        <MDBCol md="4" key={i}>
          <h1>{program.title}</h1>
        </MDBCol>
      ))}
    </>
  );
};

export default Detail;
