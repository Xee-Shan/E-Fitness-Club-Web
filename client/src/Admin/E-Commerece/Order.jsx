import React, { useEffect, useState } from 'react';
import axios from "axios";
import { MDBModalHeader, MDBModalFooter, MDBModal, MDBModalBody, MDBBtn, MDBContainer } from "mdbreact";
import { MDBTable, MDBCol, MDBRow, MDBTableBody, MDBTableHead } from "mdbreact";
import SideNav from "../SideNav/SideNav";
import Admin from "../../auth/Admin";
import { HiEye } from "react-icons/hi";

export default function Order() {
  const [order, setOrder] = useState([]);
  const [modal, setModal] = useState(false);
  const [oneOrder, setOneOrder] = useState({});
  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    let mounted=true;
    async function fetchData() {
      await axios.get("http://localhost:5000/orders/get", { headers: { "x-auth-token": localStorage.getItem("auth-token") } })
        .then(res => {
          if(mounted){
          setOrder(res.data);
          }
        });
    }
    fetchData();
    return ()=>mounted=false;
  }, [order]);
  async function handleDelivered(order) {
    const response = await axios.post("http://localhost:5000/history/add",order, {
            headers: { "x-auth-token": localStorage.getItem("auth-token") },
          });
          if(response.data.success){
            await axios.delete("http://localhost:5000/orders/delete/" + order._id, { headers: { "x-auth-token": localStorage.getItem("auth-token") } });
            window.location.reload();
          }
  }

  async function view(id) {
    await axios.get("http://localhost:5000/orders/getOneOrder/" + id, {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then(res => {
      setOneOrder(res.data);
    });
    setModal(true);
  }

  return (
    <Admin>
      <SideNav />
      <br />
      <MDBContainer>
        {order.length===0?<h1 style={{textAlign:"center"}}>No Pending Orders...</h1>:
        <MDBTable>
          <MDBTableHead style={{ backgroundColor: "white" }} textWhite>
            <tr style={{ color: "black" }}>
              <th>#</th>
              <th>Customer's Name</th>
              <th>Customer's Address</th>
              <th>Customer's Email</th>
              <th>Date</th>
              <th>Total(PKR)</th>
              <th>Action</th>
            </tr>
          </MDBTableHead>
          {order?.map((order, i) => (
            <MDBTableBody key={i}>
              <tr>
                <td>{i + 1}</td>
                <td>{order.name}</td>
                <td>{order.address}</td>
                <td>{order.email}</td>
                <td>{order.orderDate.slice(0,10)}</td>
                <td>{order.total}</td>
                <td>
                  <button onClick={() => handleDelivered(order)} style={{ backgroundColor: "white" }}>
                    <b>✓</b>
                  </button>
                  {" "}
                  <button style={{ width: "50px" }} onClick={() => { toggle(); view(order._id); }}>
                    <HiEye />
                  </button>
                  <MDBModal isOpen={modal} toggle={toggle} size="lg">
                    <MDBModalHeader toggle={toggle}>
                      Order Details
                        </MDBModalHeader>
                    <MDBModalBody>
                      <MDBRow>
                        <MDBCol sm="6">
                          <div>
                            <b>Name :</b> {oneOrder.name}
                          </div>
                        </MDBCol>
                        <MDBCol sm="6">
                          <div>
                            <b>Phone No :</b> {oneOrder.phoneNumber}
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol sm="6">
                          <div>
                            <b>Delivery Address :</b> {oneOrder.address}
                          </div>
                        </MDBCol>
                        <MDBCol sm="6">
                          <div>
                            <b>Order Date :</b> {oneOrder.orderDate}
                          </div>
                        </MDBCol>
                      </MDBRow>
                      <MDBTable>
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
                        {oneOrder?.orderList?.map((orderList, i) => (
                          <tr>
                            <td>{i + 1}</td>
                            <td>
                              <MDBRow>
                                <MDBCol>
                                  <img style={{ height: "80px"}}src={orderList.imageURL} alt="thumbnail" className="img-thumbnail" />
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
                      </MDBTable>
                      <h4>Total : {oneOrder.total} PKR</h4>

                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="secondary" onClick={toggle}>
                        Close
                          </MDBBtn>
                    </MDBModalFooter>
                  </MDBModal>
                </td>
              </tr>
            </MDBTableBody>
          ))}
        </MDBTable>
}
      </MDBContainer>
    </Admin>
  )
}
