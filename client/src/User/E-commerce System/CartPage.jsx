import React, { useEffect, useState } from "react";
import { MDBTable, MDBBtn, MDBTableBody, MDBTableHead } from "mdbreact";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import UserAuth from "../../auth/UserAuth";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderedQuantity, setOrderedQuantity] = useState();
  const [product, setProduct] = useState();
  /*const [order,setOrder]=useState();*/

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:5000/users/getCart", {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        })
        .then((res) => {
          setCart(res.data);
          localStorage.setItem("item-count", res.data.length);
        });
    }
    fetchData();
  }, [orderedQuantity]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:5000/orders/getById/" +
          localStorage.getItem("item-id"),
        { headers: { "x-auth-token": localStorage.getItem("auth-token") } }
      );
      setOrderedQuantity(response.data.quantity);
    }
    fetchData();
  });

  /*
  useEffect(()=>{
    async function fetchData() {
         await axios.get("http://localhost:5000/orders/get",{headers:{"x-auth-token":localStorage.getItem("auth-token")}})
         .then(res=>{
           setOrder(res.data)
          });            
      }
      fetchData();
},[order]);*/

  useEffect(() => {
    if (cart?.length >= 0) {
      calculate(cart);
    }
  });
  function calculate(cart) {
    let amount = 0;
    cart.map((cart) => {
      amount += cart.quantity * cart.price;
      return amount;
    });
    setTotal(amount);
  }
  useEffect(() => {
    function fetchData() {
      axios
        .get(
          "http://localhost:5000/products/get/" +
            localStorage.getItem("item-id")
        )
        .then((res) => {
          setProduct(res.data);
        });
    }
    fetchData();
  });

  async function handleRemove(id) {
    axios.delete("http://localhost:5000/users/removeFromCart/" + id, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    //window.location.reload();
  }

  async function handleOrder() {
    if (cart?.length > 0) {
      const item = cart.find(
        (arr) => arr.id === localStorage.getItem("item-id")
      );
      console.log(item.quantity);
      console.log(orderedQuantity);
      if (item.quantity <= product.quantity - orderedQuantity) {
        axios.post("http://localhost:5000/orders/placeOrder/", cart, {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        });
        alert("Order placed successfully!!!");
        window.location.reload();
      } else {
        alert(
          item.name +
            " more than available in stock please, try to add to cart again"
        );
        axios.delete("http://localhost:5000/users/removeFromCart/" + item.id, {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        });
        window.location.reload();
      }
    } else {
      alert("Cart is empty");
    }
  }
  return (
    <UserAuth>
      <div>
        <Navbar />
        <h2>My Cart : </h2>
        <br />

        <MDBTable bordered>
          <MDBTableHead color="primary-color" textWhite>
            <tr>
              <th>#</th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Product Brand</th>
              <th>Product Quantity</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </MDBTableHead>
          {cart?.length === 0
            ? null
            : cart?.map((cart, i) => (
                <MDBTableBody key={i}>
                  <tr>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        src={"http://localhost:5000/" + cart.imageName}
                        className="rounded mx-auto d-block"
                        style={{ height: "100px" }}
                        alt="aligment"
                      />
                    </td>
                    <td>{cart.name}</td>
                    <td>{cart.brand}</td>
                    <td>{cart.quantity}</td>
                    <td>{cart.price}</td>
                    <td>
                      <MDBBtn
                        color="danger"
                        onClick={() => handleRemove(cart.id)}
                      >
                        Remove
                      </MDBBtn>
                    </td>
                  </tr>
                </MDBTableBody>
              ))}
        </MDBTable>
        <h3 style={{ float: "right" }}>Total : ${total}</h3>
        <br />
        <br />
        <br />
        <MDBBtn
          color="secondary"
          style={{ float: "right" }}
          onClick={() => handleOrder()}
        >
          Place Order
        </MDBBtn>
      </div>
    </UserAuth>
  );
}
