import React from "react";
import { useState, useEffect } from "react";

import { MDBBtn } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from "mdbreact";
import axios from "axios";
import SideNav from "../SideNav/SideNav";

export default function Employee() {
  const [blog, setBlog] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/blog/get");
      setBlog(response.data);
    }
    fetchData();
  }, [blog]);

  async function handleDelete(id) {
    await axios.delete("http://localhost:5000/blog/delete/" + id);
  }
  return (
    <>
      <SideNav />
      <MDBContainer>
        <br />
        <h2>List of Blogs : </h2>
        {blog?.length === 0 ? (
          <h2>No Blog added yet...</h2>
        ) : (
          <MDBTable bordered striped small>
            <MDBTableHead color="black" textWhite>
              <tr>
                <th className="text-center">#</th>
                <th className="text-center">Title</th>
                <th className="text-center">Action</th>
              </tr>
            </MDBTableHead>
            {blog?.map((data, i) => (
              <MDBTableBody key={i}>
                <tr>
                  <td className="text-center">{i + 1}</td>
                  <td className="text-center">{data.title}</td>

                  <td className="text-center">
                    <MDBBtn
                      color="warning"
                      size="sm"
                      href={"/trainer/addcontent/" + data._id}
                    >
                      Content
                    </MDBBtn>
                    <MDBBtn
                      color="danger"
                      size="sm"
                      onClick={() => handleDelete(data._id)}
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
    </>
  );
}
