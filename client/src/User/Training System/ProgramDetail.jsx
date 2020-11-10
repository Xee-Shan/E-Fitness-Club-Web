import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

const ProgramDetail = (props) => {
  const [program, setProgram] = useState({});

  const fetchData = async () => {
    const res = await Axios.get(
      "http://localhost:5000/training/get/" + props.match.params.id
    );
    setProgram(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

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
<<<<<<< HEAD
<<<<<<< Updated upstream
            {program?.exercise?.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.day}</td>
                  <td>{data.area}</td>
=======
            {program?.exercise?.map((data,i)=>{
              return( <tr key={i}>
                <td><input value={data.day}type="text"/></td>
              <td><input value={data.area}type="text"/></td>
>>>>>>> 13390cbd0628e7a450fa9ee6a52047355b95e710
                </tr>
              );
            })}
=======
            {Object.keys(program).map((data) =>
              data.exercise.map((arr, i) => {
                return (
                  <tr key={i}>
                    <td>{arr.day}</td>
                    <td>{arr.area}</td>
                  </tr>
                );
              })
            )}
>>>>>>> Stashed changes
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </>
  );
};
export default ProgramDetail;
