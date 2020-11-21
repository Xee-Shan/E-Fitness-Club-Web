import React, { useState,useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
// import { useSelector } from "react-redux";
import axios from "axios";
import Admin from "../../auth/Admin";
import { useHistory } from "react-router-dom";

export default function EditProduct(props) {
  // const product = useSelector((state) => state.product.newProduct);
  const [productId, setProductId] = useState();
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image,setImage]=useState();
  const [previewImage,setPreviewImage]=useState("");

  
  useEffect(() => {
    async function fetchData() {
      try{
      const response = await axios.get("http://localhost:5000/products/get/"+props.match.params.id, {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      console.log(response.data);
      setProductId(response.data._id);
      setName(response.data.name);
      setBrand(response.data.brand);
      setPrice(response.data.price);
      setQuantity(response.data.quantity);
      setDescription(response.data.description);
      setCategory(response.data.category);
      setPreviewImage(response.data.imageURL);
    }
    catch(err){
      console.log(err);
    }
    }
    fetchData();
  }, []);

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
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const btnClicked = (id) => {
    const product = {
      name: name,
      brand: brand,
      description: description,
      quantity: quantity,
      price: price,
      category: category,
    };
    axios.put("http://localhost:5000/products/update/" + id, product, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    history.push("/admin/product");
  };
  return (
    <Admin>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Edit Product</p>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Name
              </label>
              <input
                onChange={onChangeName}
                value={name}
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
                value={brand}
                onChange={onChangeBrand}
                id="defaultFormRegisterNameEx"
                className="form-control"
                required
              />
              <br />
              <img src={previewImage} alt=""/>
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
              <br/>
              <select
                className="browser-default custom-select"
                onChange={onChangeCategory}
              >
                <option value={category}>{category}</option>
                <option value="Equipment">Equipment</option>
                <option value="Tops">Tops</option>
                <option value="Bottoms">Bottoms</option>
                <option value="Accessories">Accessories</option>
              </select>
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Price
              </label>
              <input
                type="number"
                value={price}
                onChange={onChangePrice}
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
                value={quantity}
                onChange={onChangeQuantity}
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
                  value={description}
                  onChange={onChangeDescription}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  required
                ></textarea>
              </div>
              <br />
              <div className="text-center mt-4">
                <MDBBtn
                  onClick={() => btnClicked(productId)}
                  color="unique"
                  type="submit"
                >
                  Edit Product
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Admin>
  );
}
