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
            {program?.exercise?.map((data,i)=>{
              return( <tr key={i}>
                <td><input value={data.day}type="text"/></td>
              <td><input value={data.area}type="text"/></td>
                </tr>
              )
            })}
          </MDBTableBody>
        </MDBTable>
      </MDBContainer>
    </>
  );
};
export default ProgramDetail;
