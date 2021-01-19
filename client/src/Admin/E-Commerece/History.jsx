import SideNav from "../SideNav/SideNav";
import React, { useEffect, useState } from "react";
import { MDBBtn } from "mdbreact";
import {
  MDBTable,
  MDBTableBody,
  MDBRow,
  MDBCol,
  MDBTableHead,
  MDBContainer,
} from "mdbreact";
import Axios from "axios";

export default function History() {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const response = await Axios.get("http://localhost:5000/history/get", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      });
      if (mounted) {
        setHistory(response.data);
      }
    }
    fetchData();
    return () => (mounted = false);
  }, [history]);
  async function handleDelete(id) {
    const response = await Axios.delete(
      "http://localhost:5000/history/delete/" + id,
      {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      }
    );
    if (response.status.success) {
      window.location.reload();
    }
  }
  return (
    <>
      <SideNav />
      <br /> <br />
      <MDBContainer>
        <h1 style={{ marginLeft: "35%" }}>Order History</h1>
        <br />
        {history.map((history, i) => {
          return (
            <div key={i}>
              <hr style={{ border: "1.5px solid black " }} />
              <MDBRow>
                <MDBCol sm="6">
                  <div>
                    <b>Name :</b> {history.data.name}
                  </div>
                </MDBCol>
                <MDBCol sm="6">
                  <div>
                    <b>Phone No :</b> {history.data.phoneNumber}
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="6">
                  <div>
                    <b>Delivery Address :</b> {history.data.address}
                  </div>
                </MDBCol>
                <MDBCol sm="6">
                  <div>
                    <b>Order Date :</b> {history.data.orderDate}
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBTable bordered>
                <MDBTableHead>
                  <tr>
                    <th>#</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Product Brand</th>
                    <th>Product Quantity</th>
                    <th>Product Price(PKR)</th>
                    <th>Delivery Charges(PKR)</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {history.data?.orderList?.map((orderList, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <MDBRow>
                          <MDBCol>
                            <img
                              style={{ height: "80px" }}
                              src={orderList.imageURL}
                              alt="thumbnail"
                              className="img-thumbnail"
                            />
                          </MDBCol>
                        </MDBRow>
                      </td>
                      <td>{orderList.name}</td>
                      <td>{orderList.brand}</td>
                      <td>{orderList.quantity}</td>
                      <td>{orderList.price}</td>
                      <td>{orderList.deliveryCharges}</td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
              <h4>Total : {history?.data?.total} PKR</h4>
              <MDBBtn color="danger" onClick={() => handleDelete(history._id)}>
                Delete
              </MDBBtn>
              <hr style={{ border: "1.5px solid black " }} />
            </div>
          );
        })}
      </MDBContainer>
    </>
  );
}
