import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBTable,
  MDBBtn,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
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
    let mounted=true;
    async function fetchData() {
      await axios
        .get("http://localhost:5000/users/getCart", {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        })
        .then((res) => {
          if(mounted){
          setCart(res.data);
          localStorage.setItem("item-count", res.data.length);
          }
        });
    }
    fetchData();
    return ()=>mounted=false;
  }, [cart]);

  useEffect(() => {
    let mounted=true;
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:5000/orders/getById/" +
          localStorage.getItem("item-id"),
        { headers: { "x-auth-token": localStorage.getItem("auth-token") } }
      );
      if(mounted)
      setOrderedQuantity(response.data.quantity);
    }
    fetchData();
    return ()=>mounted=false;
  },[orderedQuantity]);

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
      amount += cart.quantity * (cart.price+cart.deliveryCharges);
      return amount;
    });
    setTotal(amount);
  }
  useEffect(() => {
    let mounted=true;
    function fetchData() {
      axios
        .get(
          "http://localhost:5000/products/get/" +
            localStorage.getItem("item-id")
        )
        .then((res) => {
          if(mounted)
          setProduct(res.data);
        });
    }
    fetchData();
    return ()=>mounted=false;
  },[product]);

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
      if (item.quantity <= product.quantity - orderedQuantity) {
        axios.post("http://localhost:5000/orders/placeOrder/"+total, cart, {
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
        <MDBContainer>
          <br />
          <p className="h1 text-center">My Cart</p>
          <br />

          <MDBTable bordered>
            <MDBTableHead color="blue-gradient" textWhite>
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
                          src={cart.imageURL}
                          className="rounded mx-auto d-block"
                          style={{ height: "80px" }}
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
          <h3 style={{ float: "right" }}>Total : {total} PKR</h3>
          <br />
          <br />
          <br />
          <MDBBtn
            className="blue-gradient"
            style={{ float: "right" }}
            onClick={() => handleOrder()}
          >
            Place Order
          </MDBBtn>
        </MDBContainer>
      </div>
    </UserAuth>
  );
}
