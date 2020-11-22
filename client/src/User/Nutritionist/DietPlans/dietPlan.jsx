// import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdbreact";
// import React, { Fragment } from "react";
// import underweight from "../Images/WhatsApp Image 2020-10-14 at 4.29.44 PM.jpeg";
// import overweight from "../Images/WhatsApp Image 2020-10-14 at 4.29.45 PM.jpeg";
// import normal from "../Images/WhatsApp Image 2020-10-14 at 4.29.46 PM (1).jpeg";
// import obese from "../Images/WhatsApp Image 2020-10-14 at 4.29.46 PM.jpeg";
// import history from "../../../history/History";
// import Navbar from "../../Navbar/Navbar";
// import UserAuth from "../../../auth/UserAuth";
// const DietPlan = () => {
//   function btnClicked() {
//     history.push("/dietplans/underWeight");
//   }

  // const ProgramDetail = () => {
  //   const [dietplans, setDietplan] = useState({});

  //   const fetchData = async () => {
  //     const res = await Axios.get("http://localhost:5000/dietplans/get");
  //     setDietplan(res.data);
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  //   return (
  //     <UserAuth>
  //         <Navbar />
  //         <MDBContainer>
  //           <br />
  //           <p className="h2 text-center mb-4">Diet Plan Schedule</p>
  //           <MDBTable bordered striped small>
  //             <MDBTableHead color="black" textWhite>
  //               <tr>
  //                 <th className="text-center">Day</th>
  //                 <th className="text-center">Weight Type</th>
  //                 <th className="text-center">Meal Type</th>
  //                 <th className="text-center">Diet</th>
  //               </tr>
  //             </MDBTableHead>
  //             <MDBTableBody>
  //               {dietplans?.map((i) => {
  //                 return (
  //                   <tr key={i}>
  //                     <td className="text-center">{dietplans.day}</td>
  //                     <td className="text-center">{dietplans.userType}</td>
  //                     <td className="text-center">{dietplans.dietType}</td>
  //                     <td className="text-center">{dietplans.diet}</td>
  //                   </tr>
  //                 );
  //               })}
  //             </MDBTableBody>
  //           </MDBTable>
  //         </MDBContainer>
  //     </UserAuth>
  //   );
  // };
};
//export default DietPlan;
