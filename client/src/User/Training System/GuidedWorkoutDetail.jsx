import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../Navbar/Navbar";
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import UserAuth from "../../auth/UserAuth";

const ProgramDetail = (props) => {
  const [program, setProgram] = useState({});

  const fetchData = async () => {
    const res = await Axios.get(
      "http://localhost:5000/training/getVideos/" + props.match.params.id,
      { headers: { "x-auth-token": localStorage.getItem("auth-token") } }
    );
    console.log(res.data);
    setProgram(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserAuth>
      <>
        <Navbar />
        <MDBContainer>
          <br />
          <h1 className="h1 text-center mb-4">{program.title}</h1>
          <p>{program.description}</p>
        </MDBContainer>
        <br />
        <MDBContainer>
          <video src={program.videoURL} width="100%" controls />
        </MDBContainer>
      </>
    </UserAuth>
  );
};
export default ProgramDetail;
