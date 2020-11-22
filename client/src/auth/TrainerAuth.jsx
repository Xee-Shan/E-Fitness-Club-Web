import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const TrainerAuth = (props) => {
  const history = useHistory();
  const getToken = () => {
    const token = localStorage.getItem("auth-token");
    if (token === "") {
      history.push("/trainer/login");
    }
    Axios.get("http://localhost:5000/users/getUser", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      if (res.data.role !== "trainer") {
        history.push("/pagenotfound");
      }
    });
  };
  useEffect(() => {
    getToken();
  }, []);
  return <>{props.children}</>;
};

export default TrainerAuth;
