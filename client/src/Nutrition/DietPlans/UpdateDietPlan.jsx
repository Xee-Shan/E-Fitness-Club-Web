import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React, { useState, useEffect } from "react";
import { MDBBtn, MDBInput, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import SideNav from "../SideNav/SideNav";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import NutritionistAuth from "../../auth/NutritionAuth" 

const EditDietPlan = () => {
  const { id } = useParams();
  const history = useHistory();
  const [day, setDay] = useState("");
  const [usertype, setUsertype] = useState("");
  const [diettype, setDiettype] = useState("");
  const [diet, setDiet] = useState("");

  const getDietPlan = async () => {
  await Axios.get("http://localhost:5000/dietplans/get/" + id)
    .then((res) => {
   if (res) {
        setDay(res.data.day);
        setUsertype(res.data.userType);
        setDiettype(res.data.dietType);
        setDiet(res.data.diet);
      }
   });
};

const onChangeEditor = (e, editor) => {
  const data = editor.getData();
  setDiet(data);
};

  const submit = async (e) => {
    e.preventDefault();
    const data = {
      day: day,
      userType: usertype,
      dietType: diettype,
      diet: diet,
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
                label="Day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
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
              <select
                className="browser-default custom-select"
                onChange={(e) => setDiettype(e.target.value)}
                value={diettype}
              >
                <option>Diet Type</option>
                <option value="Break Fast">Break Fast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select>
              <br />
  
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Diet
              </label>
              <div>
                <CKEditor
                  editor={ClassicEditor}
                  data={diet}
                  onChange={onChangeEditor}
                />
              </div>
              <br />
              <br />
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
