import React, { useEffect, useState } from "react";
import Axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import NutritionAuth from "../../auth/NutritionAuth";
import { useParams, useHistory } from "react-router-dom";
import SideNav from "../SideNav//SideNav";

export default function EditSchedule() {
  const [day, setDay] = useState();
  const [dietType, setDietType] = useState();
  const [diet, setDiet] = useState();
  const history = useHistory();
  const { id, index } = useParams();

  const DietPlanDetail = async () => {
    await Axios.get("http://localhost:5000/dietplans/get/" + id)
    .then((res) => {
      setDay(res.data.dietList[index].day);
      setDietType(res.data.dietList[index].dietType);
      setDiet(res.data.dietList[index].diet);
   });
};

  useEffect(() => {
    DietPlanDetail();
  }, []);

  const edit = () => {
    const data = {
      day: day,
      dietType: dietType,
      diet: diet,
    };
    Axios.put(
      "http://localhost:5000/dietplans/update/dietPlan/" + id + "/" + index ,data);
      history.push("/nutritionist/dietPlan");
  };

  return (
    <NutritionAuth>
      <SideNav />
      <br />
      <br />
      <br />
      <br />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="3"></MDBCol>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Update</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Day
              </label>
              <input
                type="text"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                id="defaultFormLoginEmailEx"
                className="form-control"
                required
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Diet Type
              </label>
              <input
                type="text"
                value={dietType}
                onChange={(e) => setDietType(e.target.value)}
                id="defaultFormLoginPasswordEx"
                className="form-control"
                required
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Diet
              </label>
              <input
                type="text"
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                id="defaultFormLoginPasswordEx"
                className="form-control"
                required
              />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit" onClick={edit}>
                  Update
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="3"></MDBCol>
        </MDBRow>
      </MDBContainer>
    </NutritionAuth>
  );
}
