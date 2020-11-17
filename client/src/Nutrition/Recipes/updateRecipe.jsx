// import React, { useState } from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import history from "../history";

// export default function UpdateRecipe() {
//   const recipe = useSelector((state) => state.recipe.newRecipe);

//   let [name, setName] = useState(recipe.name);
//   let [type, setType] = useState(recipe.type);
//   let [ingredients, setIngredients] = useState(recipe.ingredients);
//   let [description, setDescription] = useState(recipe.description);
//   let [method, setMethod] = useState(recipe.method);
//   let imageName = "http://localhost:5000/" + recipe.imageName;

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onChangeType = (e) => {
//     setType(e.target.value);
//   };
//   const onChangeIngredients = (e) => {
//     setIngredients(e.target.value);
//   };
//   const onChangeMethod = (e) => {
//     setMethod(e.target.value);
//   };
//   const onChangeDescription = (e) => {
//     setDescription(e.target.value);
//   };

//   const btnClicked = (id) => {
//     const recipe = {
//       name: name,
//       type: type,
//       description: description,
//       ingredients: ingredients,
//       method: method,
//     };
//     axios.put("http://localhost:5000/api/recipe/update/" + id, recipe);
//     history.push("/nutrition/recipe");
//   };
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <form>
//             <p className="h4 text-center mb-4">Edit Recipe</p>
//             <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
//               Image
//             </label>
//             <MDBRow className="mb-4">
//               <MDBCol md="6">
//                 <img src={imageName} className="img-fluid" alt="" />
//               </MDBCol>
//             </MDBRow>
//             <br />
//             <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
//               Name
//             </label>
//             <input
//               onChange={onChangeName}
//               value={name}
//               type="text"
//               id="defaultFormRegisterNameEx"
//               className="form-control"
//               required
//             />
//             <br />
//             <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
//               Method
//             </label>
//             <input
//               type="text"
//               value={method}
//               onChange={onChangeMethod}
//               id="defaultFormRegisterNameEx"
//               className="form-control"
//               required
//             />
//             <br />
//             <select
//               className="browser-default custom-select"
//               onChange={onChangeType}
//             >
//               <option value={type}>{type}</option>
//               <option value="Break Fast">Break Fast</option>
//               <option value="Lunch">Lunch</option>
//               <option value="Dinner">Dinner</option>
//             </select>
//             <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
//               Ingredients
//             </label>
//             <input
//               type="number"
//               value={ingredients}
//               onChange={onChangeIngredients}
//               id="defaultFormRegisterNameEx"
//               className="form-control"
//               required
//             />
//             <br />
//             <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
//               Descrpition
//             </label>
//             <div className="input-group">
//               <div className="input-group-prepend">
//                 <span className="input-group-text" id="basic-addon">
//                   <i className="fas fa-pencil-alt prefix"></i>
//                 </span>
//               </div>
//               <textarea
//                 value={description}
//                 onChange={onChangeDescription}
//                 className="form-control"
//                 id="exampleFormControlTextarea1"
//                 rows="5"
//                 required
//               ></textarea>
//             </div>
//             <br />
//             <div className="text-center mt-4">
//               <MDBBtn
//                 onClick={() => btnClicked(recipe._id)}
//                 color="unique"
//                 type="submit"
//               >
//                 Edit Product
//               </MDBBtn>
//             </div>
//           </form>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }
import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UpdateRecipe = () => {
  let [name, setName] = useState("");
  let [type, setType] = useState("");
  let [ingredients, setIngredients] = useState("");
  let [method, setMethod] = useState("");
  let [description, setDescription] = useState("");
  let [image, setImage] = useState();

  const history = useHistory();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeType = (e) => {
    setType(e.target.value);
  };
  const onChangeIngredients = (e) => {
    setIngredients(e.target.value);
  };
  const onChangeMethod = (e) => {
    setMethod(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };
  const btnClicked = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("ingredients", ingredients);
    formData.append("description", description);
    formData.append("method", method);
    formData.append("image", image);

    axios.post("http://localhost:5000/recipes/create", formData).then((res) => {
      if (res.data.success) {
        history.push("/nutrition/recipe");
      } else alert("Error occured");
    });
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Update Recipe</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Name
            </label>
            <input
              onChange={onChangeName}
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              required
            />
            <br />
            <select
              className="browser-default custom-select"
              onChange={onChangeType}
            >
              <option>Type</option>
              <option value="Break Fast">Break Fast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
            </select>
            <br />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Ingredients
            </label>
            <input
              type="text"
              onChange={onChangeIngredients}
              id="defaultFormRegisterNameEx"
              className="form-control"
              required
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Method
            </label>
            <input
              type="text"
              onChange={onChangeMethod}
              id="defaultFormRegisterNameEx"
              className="form-control"
              required
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Descrpition
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon">
                  <i className="fas fa-pencil-alt prefix"></i>
                </span>
              </div>
              <textarea
                onChange={onChangeDescription}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                required
              ></textarea>
            </div>
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Uplaod Image
            </label>
            <input
              type="file"
              accept=".jpeg, .jpg, .png"
              name="file"
              onChange={onChangeImage}
              id="defaultFormRegisterNameEx"
              className="form-control"
              style={{ borderStyle: "none" }}
              required
            />
            <br />
            <div className="text-center mt-4">
              <MDBBtn onClick={btnClicked} color="unique" type="submit">
                Update Recipe
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default UpdateRecipe;
