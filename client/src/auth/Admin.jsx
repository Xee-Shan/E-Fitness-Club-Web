import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Admin = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("auth-token") === undefined) {
      history.push("/login");
    }
    async function fetchData() {
      await axios
        .get("http://localhost:5000/users/getUser", {
          headers: { "x-auth-token": localStorage.getItem("auth-token") },
        })
        .then((res) => {
          if (res.data.role !== "admin") history.push("/login");
        });
    }
    fetchData();
  });
  return <>{props.children}</>;
};
export default Admin;
