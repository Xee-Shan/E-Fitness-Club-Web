import React, { useEffect, useState } from "react";
import { MDBBtn, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router-dom";
import { BiMoney } from "react-icons/bi";

export default function ProductDetail(props) {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [product, setProduct] = useState({});
  const [orderedQuantity, setOrderedQuantity] = useState(0);
  const [myQuantity, setMyQuantity] = useState(1);

  const history = useHistory();

  useEffect(() => {
    let mounted = true;
    function fetchData() {
      axios
        .get("http://localhost:5000/products/get/" + props.match.params.id)
        .then((res) => {
          if (mounted) setProduct(res.data);
        });
    }
    fetchData();
    return () => (mounted = false);
  }, [props.match.params.id]);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:5000/orders/getById/" + props.match.params.id,
        { headers: { "x-auth-token": localStorage.getItem("auth-token") } }
      );
      if (mounted) setOrderedQuantity(response.data.quantity);
    }
    fetchData();
    return () => (mounted = false);
  }, [props.match.params.id]);

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      await axios
        .get("http://localhost:5000/users/getCart", {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        })
        .then((res) => {
          if (mounted) {
            setCart(res.data);
          }
          if (cart.length > 0) {
            const item = cart.find((arr) => arr.id === props.match.params.id);
            setItemCount(item?.quantity);
          }
          localStorage.setItem("item-count", res.data.length);
        });
    }
    fetchData();
    return () => (mounted = false);
  }, [cart, props.match.params.id]);

  const onChangeMyQuantity = (e) => {
    setMyQuantity(parseInt(e.target.value, 10));
  };

  const increment = () => {
    setMyQuantity(myQuantity + 1);
  };
  const decrement = () => {
    setMyQuantity(myQuantity - 1);
  };

  async function btnClicked(product) {
    if (
      myQuantity <= 0 ||
      myQuantity + itemCount > product.quantity - orderedQuantity
    ) {
      alert(
        "Invalid quantity or item quantity in cart is more than availabe in stock"
      );
    } else {
      if (product.quantity - orderedQuantity > 0) {
        const response = await axios.post(
          "http://localhost:5000/users/addToCart/" + myQuantity,
          product,
          { headers: { "x-auth-token": localStorage.getItem("auth-token") } }
        );
        if (response.data !== "")
          alert("Out of Stock : Item quantity more than " + response.data);
        else {
          history.push("/user/cart");
          localStorage.setItem("item-id", product._id);
          window.location.reload();
        }
      } else {
        alert(product.name + " is out of stock!!!");
      }
    }
  }

  return (
    <>
      <Navbar />
      <br /> <br />
      {Object.keys(product).length === 0 ? null : (
        <MDBRow>
          <MDBCol md="6">
            <MDBRow className="mb-4">
              <MDBCol md="8">
                <img
                  src={product?.imageURL}
                  className="img-fluid"
                  alt="product"
                />
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="5">
            <b>Name : </b>&nbsp;&emsp;&emsp;&nbsp;<i>{product?.name}</i> <br />
            <hr />
            <b>Price : </b>&emsp;&emsp;&nbsp;&nbsp;<i>{product?.price} PKR</i>{" "}
            <br />
            <hr /> <b>Brand : </b>&emsp;&emsp;&nbsp;&nbsp;&nbsp;
            <i>{product?.brand}</i> <br />
            <hr /> <b>Available : </b>&emsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i>{(product?.quantity - orderedQuantity).toString()}</i>
            <hr />
            <b>Delivery Time : </b>&emsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <i>{product?.deliveryDays} day(s)</i>
            <br />
            <hr />
            <b>Delivery Charges : </b>&nbsp;&nbsp;&nbsp;&nbsp;
            <i>{product?.deliveryCharges} PKR</i>
            <br />
            <hr />
            <b>Payment Method : </b>&nbsp;&nbsp;&nbsp;&nbsp;
            <BiMoney style={{ fontSize: "25px" }} />
            <i>&nbsp;Cash On Delivery</i>
            <br />
            <hr />
            <div>
              <b>Quantity : </b> &nbsp; &emsp;&emsp;
              <MDBBtn
                size="sm"
                onClick={increment}
                style={{ fontSize: "25px" }}
              >
                +
              </MDBBtn>
              &nbsp;&nbsp;
              <input
                type="number"
                value={myQuantity.toString()}
                name=""
                min="1"
                max={product?.quantity}
                onChange={onChangeMyQuantity}
                id=""
                style={{ fontSize: "25px", textAlign: "center" }}
              />
              &nbsp;&nbsp;{" "}
              <MDBBtn
                size="sm"
                style={{ fontSize: "25px" }}
                onClick={decrement}
              >
                -
              </MDBBtn>
            </div>
            <br />
            <MDBBtn
              className="blue-gradient"
              onClick={() => btnClicked(product)}
              outline
              color="white"
            >
              Add to Cart
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      )}
      <br />
      <MDBContainer>
      <h3>Description : </h3>
      <p>{product?.description}</p>
      </MDBContainer>
    </>
  );
}
