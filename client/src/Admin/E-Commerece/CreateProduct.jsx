import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import Admin from "../../auth/Admin";
import SideNav from "../SideNav/SideNav";
import ErrorNotice from "../../components/error/ErrorNotice";
const CreateProduct = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [deliveryCharges, setDeliveryCharges] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [deliveryDays, setDeliveryDays] = useState("");
  const [image, setImage] = useState();
  const [previewImage, setPreviewImage] = useState("");
  const [error,setError]=useState();
  const history = useHistory();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeBrand = (e) => {
    setBrand(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangeDeliveryCharges = (e) => {
    setDeliveryCharges(e.target.value);
  };
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const onChangeDeliveryDays = (e) => {
    setDeliveryDays(e.target.value);
  };
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };
  const btnClicked = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("brand", brand);
    formData.append("price", price);
    formData.append("deliveryCharges", deliveryCharges);
    formData.append("description", description);
    formData.append("quantity", quantity);
    formData.append("deliveryDays", deliveryDays);
    formData.append("category", category);
    formData.append("image", image);
try{
   const response=await axios
      .post("http://localhost:5000/products/create", formData, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      if(response.data.success){
        history.push("/admin/product");
      }
    }catch(err){
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <Admin>
      <SideNav />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" style={{marginLeft:"20%"}}>
            <form>
              <p className="h4 text-center mb-4">Create Product</p>
              {error && (
                    <ErrorNotice
                      message={error}
                      clearError={() => setError(undefined)}
                    />
                  )}
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
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Brand
              </label>
              <input
                type="text"
                onChange={onChangeBrand}
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <br />
              <input
                type="text"
                placeholder="choose your option"
                name="city"
                className="form-control"
                list="category"
                onChange={onChangeCategory}
              />
              <datalist id="category">
                <option value="Equipment">Equipment</option>
                <option value="Tops">Tops</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Accessories">Accessories</option>
              </datalist>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Price
              </label>
              <input
                type="number"
                onChange={onChangePrice}
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Delivery Charges
              </label>
              <input
                type="number"
                onChange={onChangeDeliveryCharges}
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Quantity
              </label>
              <input
                type="number"
                onChange={onChangeQuantity}
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <br />
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Delivery Day(s)
              </label>
              <input
                type="number"
                onChange={onChangeDeliveryDays}
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
              <img src={previewImage} alt="" />
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
                  Upload Product
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Admin>
  );
};

export default CreateProduct;
