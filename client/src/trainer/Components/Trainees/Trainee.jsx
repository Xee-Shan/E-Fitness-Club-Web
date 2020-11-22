import React, { useState, useEffect } from "react";
import Axios from "axios";
import SideNav from "../SideNav/SideNav";
import GetTrainee from "./GetTrainee";
import Pagination from "../Pagination/traineePagnation";
import { MDBCol, MDBContainer, MDBInput } from "mdbreact";
import TrainerAuth from "../../../auth/TrainerAuth";

const Program = () => {
  const [trainee, setTrainee] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [traineePerPage] = useState(1);
  const [q, setQ] = useState("");

  const fetchPrograms = async () => {
    const res = await Axios.get("http://localhost:5000/users/get", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    setTrainee(res.data);
  };

  useEffect(() => {
    fetchPrograms();
  }, [trainee]);

  const indexOfLastTrainee = currentPage * traineePerPage;
  const indexOfFirstTrainee = indexOfLastTrainee - traineePerPage;
  const currentTrainee = trainee.slice(indexOfFirstTrainee, indexOfLastTrainee);

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
          <p className="h1 text-center mb-4">Trainee List</p>
          <MDBCol md="3">
            <MDBInput
              type="text"
              label="Search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </MDBCol>

          <br />
          <GetTrainee trainee={search(currentTrainee)} />
          <Pagination
            traineePerPage={traineePerPage}
            totalTrainee={trainee.length}
            paginate={paginate}
          />
        </MDBContainer>
      </>
    </TrainerAuth>
  );
};

export default Program;
