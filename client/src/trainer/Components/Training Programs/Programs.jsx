import React, { useState, useEffect } from "react";
import Axios from "axios";
import SideNav from "../SideNav/SideNav";
import GetPrograms from "./GetPrograms";
import Pagination from "../Pagination/ProgramPagination";
import { MDBCol, MDBContainer, MDBInput } from "mdbreact";
import TrainerAuth from "../../../auth/TrainerAuth";

const Program = () => {
  const [program, setProgram] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [programPerpage] = useState(2);
  const [q, setQ] = useState("");

  const fetchPrograms = async () => {
    const res = await Axios.get("http://localhost:5000/training/get");
    setProgram(res.data);
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const indexOfLastProgram = currentPage * programPerpage;
  const indexOfFirstProgram = indexOfLastProgram - programPerpage;
  const currentprograms = program.slice(
    indexOfFirstProgram,
    indexOfLastProgram
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const search = (rows) => {
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  };

  return (
    <TrainerAuth>
      <>
        <SideNav />
        <br />
        <MDBContainer>
          <p className="h1 text-center mb-4">Program List</p>
          <MDBCol md="3">
            <MDBInput
              type="text"
              label="Search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </MDBCol>
          <br />
          <GetPrograms program={search(currentprograms)} />
          <Pagination
            programPerPage={programPerpage}
            totalPrograms={program.length}
            paginate={paginate}
          />
        </MDBContainer>
      </>
    </TrainerAuth>
  );
};

export default Program;
