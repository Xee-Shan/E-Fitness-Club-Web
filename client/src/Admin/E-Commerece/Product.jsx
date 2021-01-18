import React, { useEffect, useState } from "react";
import { MDBBtn } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from "mdbreact";
// import { useDispatch } from "react-redux";
import axios from "axios";
// import { updateProduct } from "../../actions/productAction";
import { useHistory } from "react-router-dom";
import Admin from "../../auth/Admin";
import SideNav from "../SideNav/SideNav";

export default function Product() {
  // const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const history = useHistory();

  useEffect(()=>{
    if(!localStorage.getItem("auth-token")){
      history.push("/login");
    }
  })
  useEffect(() => {
    let mounted=true;
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/products/get", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      if(mounted)
      setProduct(response.data);
    }
    fetchData();
    return ()=>mounted=false;
  }, [product]);

  async function handleDelete(id) {
    await axios.delete("http://localhost:5000/products/delete/" + id, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
  }
  const handleEdit = (product) => {
    // dispatch(updateProduct(product));
    //window.location.href = "http://localhost:3000/admin/edit/product";
    history.push("/admin/edit/product/"+product._id);
  };


  return (
    <Admin>
      <SideNav />
      <MDBContainer>
        <h2>List of Products : </h2>
        {product.length === 0 ? (
          <h2>No Products yet...</h2>
        ) : (
          <MDBTable bordered>
            <MDBTableHead style={{ backgroundColor: "#68717C" }} textWhite>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </MDBTableHead>
            {product?.map((product, i) => (
              <MDBTableBody key={i}>
                <tr>
                  <td>{i + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.brand}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <MDBBtn color="warning" onClick={() => handleEdit(product)}>
                      Edit
                    </MDBBtn>
                    <MDBBtn
                      color="danger"
                      onClick={() => handleDelete(product._id)}
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
    </Admin>
  );
}
