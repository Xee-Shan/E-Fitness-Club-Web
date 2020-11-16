// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import Navbar from "../../components/navbar/Navbar";
// import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

// const RecipeDetail = (props) => {
//   const [recipe, setRecipe] = useState({});
//   const [imgURL,setImgURL] = useState({});

//   const fetchData = async () => {
//     const res = await Axios.get(
//       "http://localhost:5000/recipes/get/" + props.match.params.id
//     );
//     setRecipe(res.data);
//     setImgURL("http://localhost:5000/" + res.data.imageName)
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <MDBContainer>
//         <br />
//         <h1 className="h1 text-center mb-4">{recipe.name}</h1>
//         <p>{recipe.description}</p>
//       </MDBContainer>
//       <MDBContainer>
//         <br />
//         <img
//           width="1100"
//           height="400"
//           src={imgURL}
//         ></img>
//       </MDBContainer>
//       <MDBContainer>
//         <br />
//         <p className="h4 text-center mb-4">Schedule</p>
//         <MDBTable bordered striped small>
//           <MDBTableHead color="black" textWhite>
//             <tr>
//               <th className="text-center">Day</th>
//               <th className="text-center">Area</th>
//             </tr>
//           </MDBTableHead>
//           <MDBTableBody>
//             {program?.exercise?.map((data, i) => {
//               return (
//                 <tr key={i}>
//                   <td className="text-center">{data.day}</td>
//                   <td className="text-center">{data.area}</td>
//                 </tr>
//               );
//             })}
//           </MDBTableBody>
//         </MDBTable>
//       </MDBContainer>
//       <MDBContainer>
//         <br />
//         <p className="h4 text-center mb-4">Complete Workout List</p>
//         <MDBTable bordered striped small>
//           <MDBTableHead color="black" textWhite>
//             <tr>
//               <th className="text-center">Exercise Name</th>
//               <th className="text-center">Sets</th>
//               <th className="text-center">reps</th>
//             </tr>
//           </MDBTableHead>
//           <MDBTableBody>
//             {program?.workoutList?.map((data, i) => {
//               return (
//                 <tr key={i}>
//                   <td className="text-center">{data.exerciseName}</td>
//                   <td className="text-center">{data.sets}</td>
//                   <td className="text-center">{data.reps}</td>
//                 </tr>
//               );
//             })}
//           </MDBTableBody>
//         </MDBTable>
//       </MDBContainer>
//     </>
//   );
// };
// export default RecipeDetail;
