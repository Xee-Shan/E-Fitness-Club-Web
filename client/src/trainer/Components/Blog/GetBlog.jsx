import React from "react";
import { useState, useEffect } from "react";

import { MDBBtn } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer } from "mdbreact";
import axios from "axios";
import SideNav from "../SideNav/SideNav";
import TrainerAuth from "../../../auth/TrainerAuth";

export default function Employee() {
  const [blog, setBlog] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:5000/blog/get");
      setBlog(response.data);
    }
    fetchData();
  }, [blog]);

  const handleDelete = async (id) => {
    const value = window.confirm("Are you sure you want to delete program ?");
    if (value === true) {
      await axios.delete("http://localhost:5000/blog/delete/" + id);
      window.location.reload();
    }
  };
  return (
    <TrainerAuth>
      <>
        <SideNav />
        <MDBContainer>
          <br />
          <p className=" h1 text-center">Blog List </p>
          <br />
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
    </TrainerAuth>
  );
}
