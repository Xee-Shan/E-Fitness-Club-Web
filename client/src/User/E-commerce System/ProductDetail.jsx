aimport React, { useEffect, useState } from "react";
import { MDBBtn, MDBRow, MDBCol } from "mdbreact";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router-dom";

export default function ProductDetail(props) {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [product, setProduct] = useState({});
  const [orderedQuantity, setOrderedQuantity] = useState(0);
  const [myQuantity, setMyQuantity] = useState(1);

  const history = useHistory();

  useEffect(() => {
    function fetchData() {
      axios
        .get("http://localhost:5000/products/get/" + props.match.params.id)
        .then((res) => {
          setProduct(res.data);
        });
    }
    fetchData();
  }, [props.match.params.id]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:5000/orders/getById/" + props.match.params.id,
        { headers: { "x-auth-token": localStorage.getItem("auth-token") } }
      );
      setOrderedQuantity(response.data.quantity);
    }
    fetchData();
  }, [props.match.params.id]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:5000/users/getCart", {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        })
        .then((res) => {
          setCart(res.data);
          if (cart.length > 0) {
            const item = cart.find((arr) => arr.id === props.match.params.id);
            setItemCount(item?.quantity);
          }
          localStorage.setItem("item-count", res.data.length);
        });
    }
    fetchData();
  }, [cart, props.match.params.id]);

  const onChangeMyQuantity = (e) => {
    setMyQuantity(e.target.value);
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
      alert("Invalid quantity or quantity more than availabe in stock");
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
      {product.length === 0 ? null : (
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
          <MDBCol md="6" className="blue-gradient">
            <b>Name : </b>&nbsp;&nbsp;&nbsp;&nbsp;<i>{product?.name}</i> <br />
            <hr />
            <b>Price ($): </b>&nbsp;&nbsp;&nbsp;&nbsp;<i>{product?.price}</i>{" "}
            <br />
            <hr /> <b>Brand : </b>&nbsp;&nbsp;&nbsp;&nbsp;
            <i>{product?.brand}</i> <br />
            <hr /> <b>In Stock : </b>&nbsp;&nbsp;&nbsp;&nbsp;
            <i>{(product?.quantity - orderedQuantity).toString()}</i>
            <br />
            <hr />
            <div>
              <b>Description : </b>
              <p>{product?.description}</p>
              <hr />
              <b>Quantity : </b> &nbsp;
              {/* <button style={{ border: "none",marginTop:"10px",height:"30px" }} onClick={increment}>
                <h2>+</h2>
              </button>{" "} */}
              <MDBBtn size="sm" onClick={increment}>
                +
              </MDBBtn>
              &nbsp;&nbsp;
              <input
                type="number"
                value={myQuantity}
                name=""
                min="1"
                max={product?.quantity}
                onChange={onChangeMyQuantity}
                id=""
                style={{ textAlign: "center" }}
              />
              &nbsp;&nbsp;{" "}
              {/* <button style={{ border: "none" }} onClick={decrement}>
                <h2>╸</h2>
              </button> */}
              <MDBBtn size="sm" onClick={decrement}>
                -
              </MDBBtn>
            </div>
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
    </>
  );
}
