import React, { useState, useEffect } from "react";
import Axios from "axios";
import GetPrograms from "./GetPrograms";
import Navbar from "../Navbar/Navbar";
import Pagination from "../Pagination/ProgramsPagination";
import { MDBContainer } from "mdbreact";
import UserAuth from "../../auth/UserAuth";

const Program = () => {
  const [program, setProgram] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [programsPerPage] = useState(3);

  const fetchData = async () => {
    const response = await Axios.get("http://localhost:5000/training/get", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    setProgram(response.data);
  };

  const indexOfLastProgram = currentPage * programsPerPage;
  const indexOfFirstProgram = indexOfLastProgram - programsPerPage;
  const currentPrograms = program.slice(
    indexOfFirstProgram,
    indexOfLastProgram
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserAuth>
      <>
        <Navbar />
        <br />
        <p className="h1 text-center mb-4">Men Workout Plans </p>
        <br />
        <GetPrograms program={currentPrograms} />
        <br />
        <MDBContainer>
          <Pagination
            programsPerPage={programsPerPage}
            totalPrograms={program.length}
            paginate={paginate}
          />
        </MDBContainer>
      </>
    </UserAuth>
  );
};

export default Program;
