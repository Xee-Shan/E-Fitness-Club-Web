import React, { useEffect, useState } from "react";
import { MDBBtn } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from "mdbreact";
import axios from "axios";
import { useHistory } from "react-router-dom";
import SideNav from "../SideNav/SideNav";
import NutritionistAuth from "../../auth/NutritionAuth";

export default function Recipe() {
  const [dietPlan, setDietPlan] = useState();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/dietplans/get");
      setDietPlan(response.data);
      console.log(dietPlan);
    }
    fetchData();
  }, []);

  function handleDelete(id) {
    const value = window.confirm(
      "Are you sure you want to delete this Diet Plan ?"
    );
    if (value === true) {
      axios.delete("http://localhost:5000/dietplans/delete/" + id);
      window.location.reload();
    }
  }

  const handleEdit = (id) => {
    history.push("/nutritionist/update/dietPlan/" + id);
  };
  return (
    <div>
      <NutritionistAuth>
        <SideNav />
        <br />
        <MDBContainer>
          <h2>List of Diet Plans : </h2>
          {dietPlan?.length === 0 ? (
            <h2>No Diet Plans Added yet...</h2>
          ) : (
            <MDBTable bordered>
              <MDBTableHead color="primary-color" textWhite>
                <tr>
                  <th>#</th>
                  <th>Day</th>
                  <th>User Type</th>
                  <th>Diet Type</th>
                  {/*<th>Diet</th>
                 <th>Description</th> */}
                  <th>Action</th>
                </tr>
              </MDBTableHead>
              {dietPlan?.map((dietPlan, i) => (
                <MDBTableBody key={i}>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{dietPlan.day}</td>
                    <td>{dietPlan.userType}</td>
                    <td>{dietPlan.dietType}</td>
                    {/*<td>{dietPlan.diet}</td>
                 <td>{recipe.description}</td> */}
                    <td>
                      <MDBBtn
                        color="warning"
                        onClick={() => handleEdit(dietPlan._id)}
                      >
                        Edit
                      </MDBBtn>
                      <MDBBtn
                        color="danger"
                        onClick={() => handleDelete(dietPlan._id)}
                      >
                        Delete
                      </MDBBtn>
                    </td>
                  </tr>
                </MDBTableBody>
              ))}
            </MDBTable>
          )}
        </MDBContainer>
      </NutritionistAuth>
    </div>
  );
}
