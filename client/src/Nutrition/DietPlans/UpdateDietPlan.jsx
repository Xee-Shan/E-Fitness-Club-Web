import React, { useState, useEffect } from "react";
import { MDBBtn, MDBInput, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SideNav from "../SideNav/SideNav";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import NutritionistAuth from "../../auth/NutritionAuth" 

const EditDietPlan = () => {
  const { id } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [usertype, setUsertype] = useState("");
  
  const getDietPlan = async () => {
  await Axios.get("http://localhost:5000/dietplans/get/" + id)
    .then((res) => {
   if (res) {
        setTitle(res.data.title);
        setUsertype(res.data.userType);
        }
   });
};

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      userType: usertype,
    };
    await Axios.put("http://localhost:5000/dietplans/update/" + id, data).then(
      (res) => {
        if (res) history.push("/nutritionist/dietPlan");
      }
    );
  };

  useEffect(() => {
    getDietPlan();
  }, []);

  return (
    <>
    <NutritionistAuth>
      <SideNav />
      <br/>
      <MDBContainer>
        <MDBRow>
        <MDBCol md="3" />
          <MDBCol md="6">
            <form>
              <p className="h3 text-center mb-4">Update Diet Plan</p>
              <MDBInput
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <select
                className="browser-default custom-select"
                onChange={(e) => setUsertype(e.target.value)}
                value={usertype}
              >
                <option>User Type</option>
                <option value="Under Wieght">Under Weight</option>
                <option value="Normal">Normal</option>
                <option value="Over Weight">Over Weight</option>
                <option value="Obese">Obese</option>
              </select>
              <br/>
              <br/>
              <div className="text-center mt-4">
                <MDBBtn onClick={submit} color="unique" type="submit">
                  Update
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="3" />
        </MDBRow>
      </MDBContainer>
      </NutritionistAuth>
    </>
  );
};

export default EditDietPlan;
