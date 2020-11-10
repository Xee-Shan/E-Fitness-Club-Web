import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

const ProgramDetail = (props) => {
  const [program, setProgram] = useState([]);

  const fetchData = async () => {
    const res = await Axios.get(
      "http://localhost:5000/training/get/" + props.match.params.id
    );
    setProgram(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(program);
  return (
    <>
      <Navbar />
      <MDBContainer>
        <MDBTable bordered>
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              <th>Day</th>
              <th>Area</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {program.map((data) =>
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
export default ProgramDetail;
