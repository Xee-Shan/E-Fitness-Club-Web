import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact";
import SideNav from "./SideNav//SideNav";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function AdminHome() {
  const history = useHistory();
  const [count, setCount] = useState({});
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const data = [
    {
      name: "Physiatrist",
      count: parseInt(count.physiatristCount, 10),
    },
    {
      name: "Trainer",
      count: parseInt(count.trainerCount, 10),
    },
    {
      name: "User",
      count: parseInt(count.userCount, 10),
    },
    {
      name: "Nutritionist",
      count: parseInt(count.nutritionistCount, 10),
    },
  ];
  const productData = [];
  product.map((product) => {
    productData.push({
      name: product.name,
      quantity: product.quantity,
    });
  });

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const response = await axios.get(
        "http://localhost:5000/users/get/countOfUser",
        {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        }
      );
      if (mounted) setCount(response.data);
    }
    fetchData();
    return () => (mounted = false);
  }, []);
  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/products/get", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      if (mounted) setProduct(response.data);
    }
    fetchData();
    return () => (mounted = false);
  }, [product]);
  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      await axios
        .get("http://localhost:5000/orders/get", {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        })
        .then((res) => {
          if (mounted) setOrder(res.data);
        });
    }
    fetchData();
    return () => (mounted = false);
  }, [order]);
  return (
    <div>
      <SideNav />
      {Object.keys(count).length === 0 ? null : (
        <MDBContainer>
          <br />
          <h1 style={{ textAlign: "center" }}>Admin Panel</h1>
          <br />
          <MDBRow>
            <MDBCol size="1"></MDBCol>
            <MDBCol size="3">
              <MDBCard
                style={{ width: "15rem", cursor: "pointer" }}
                onClick={() => {
                  history.push("/admin/product");
                }}
              >
                <MDBCardBody>
                  <MDBCardTitle>Total Products</MDBCardTitle>
                  <MDBCardText style={{ textAlign: "center" }}>
                    <b style={{ fontSize: "3em" }}>{product.length}</b>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol></MDBCol>
            <MDBCol>
              <MDBCard
                style={{ width: "15rem", cursor: "pointer" }}
                onClick={() => {
                  history.push("/admin/order");
                }}
              >
                <MDBCardBody>
                  <MDBCardTitle>Pending Orders</MDBCardTitle>
                  <MDBCardText style={{ textAlign: "center" }}>
                    <b style={{ fontSize: "3em" }}>{order.length}</b>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol></MDBCol>
          </MDBRow>
          <br />
          <hr style={{ border: "1px solid black" }} />
          <br /> <br />
          <div>
            {Object.keys(count).length === 0 ? null : (
              <BarChart
                width={1000}
                height={400}
                data={data}
                margin={{
                  top: 8,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 30, right: 11 }}
                />
                <YAxis interval={1} allowDecimals="false" />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="count"
                  fill="purple"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            )}
            <br /> <br />
            {product.length === 0 ? null : (
              <BarChart
                width={1000}
                height={400}
                data={productData}
                margin={{
                  top: 8,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis
                  dataKey="name"
                  scale="point"
                  padding={{ left: 30, right: 11 }}
                />
                <YAxis interval={1} allowDecimals="false" />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar
                  dataKey="quantity"
                  fill="teal"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            )}
          </div>
        </MDBContainer>
      )}
    </div>
  );
}
