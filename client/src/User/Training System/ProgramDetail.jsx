import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../../components/navbar/Navbar";

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

  return (
    <>
      <Navbar />
      {program.length === 0 ? null : (
        <>
          <p>{program?.title} </p>
          <p>{program?.targetArea}</p>
        </>
      )}
    </>
  );
};
export default ProgramDetail;
