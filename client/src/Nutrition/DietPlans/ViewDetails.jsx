import React, { useState, useEffect } from "react";
import Axios from "axios";
import SideNav from "../SideNav/SideNav";
import {
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
} from "mdbreact";
import { useParams, useHistory } from "react-router-dom";
import NutritionAuth from "../../auth/NutritionAuth";

const View = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  const DietPlanDetail = async () => {
    const res = await Axios.get("http://localhost:5000/dietplans/get/" + id)
    setData(res.data);
  };

  useEffect(() => {
    DietPlanDetail();
  }, []);

  const editSchedule = (i) => {
    history.push("/nutritionist/update/" + id + "/" + i);
  };

  return (
    <NutritionAuth>
      <>
        <SideNav />
        <MDBContainer>
          <br />
          <p className="h4 text-center mb-4">Complete Week Diet Plan</p>
          <MDBTable bordered striped small>
            <MDBTableHead color="black" textWhite>
              <tr>
                <th className="text-center">Day</th>
                <th className="text-center">Diet Type</th>
                <th className="text-center">Diet</th>
                <th className="text-center">Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {data?.dietList?.map((data, i) => {
                return (
                  <tr key={i}>
                    <td className="text-center">{data.day}</td>
                    <td className="text-center">{data.dietType}</td>
                    <td className="text-center">{data.diet}</td>
                    <td className="text-center">
                      <MDBBtn
                        size="sm"
                        color="warning"
                        onClick={() => editSchedule(i)}
                      >
                        Edit
                      </MDBBtn>
                    </td>
                  </tr>
                );
              })}
            </MDBTableBody>
          </MDBTable>
        </MDBContainer>
      </>
    </NutritionAuth>
  );
};

export default View;
