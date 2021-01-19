import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function DoctorAuth(props) {
  const history = useHistory();
  useEffect(() => {
    let token = localStorage.getItem("auth-token");
    if (token === "") {
      history.push("/login");
    }
    axios
      .get("http://localhost:5000/users/getUser", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      })
      .then((res) => {
        if (res.data.role !== "physiatrist") history.push("/login");
      });
  });
  return <>{props.children}</>;
}
