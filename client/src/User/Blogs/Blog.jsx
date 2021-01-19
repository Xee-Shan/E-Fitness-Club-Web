import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navbar from "../../User/Navbar/Navbar";
import GetBlogs from "./GetBlogs";
import UserAuth from "../../auth/UserAuth";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  const fetchData = async () => {
    const response = await Axios.get("http://localhost:5000/blog/getAll", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    setBlog(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <UserAuth>
      <>
        <Navbar />
        <br />
        <p className="h1 text-center">All Blogs</p>
        <br />
        <GetBlogs blog={blog} />
        <br />
      </>
    </UserAuth>
  );
};

export default Blog;
