import React, { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Axios from "axios";
import { useState } from "react";

const UserProfile = () => {
  const [user, setUser] = useState();
  const fetchUser = async () => {
    const res = Axios.get("http://localhost:5000/users/getUser", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    });
    setUser(res.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  console.log(user);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default UserProfile;
