import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const NutritionAuth = (props) => {
  const history = useHistory();
  const getToken = () => {
    const token = localStorage.getItem("auth-token");
    if (token === "") {
      history.push("/login");
    }
    Axios.get("http://localhost:5000/users/getUser", {
      headers: { "x-auth-token": localStorage.getItem("auth-token") },
    }).then((res) => {
      if (res.data.role !== "nutritionist") {
        history.push("/login");
      }
    });
  };
  useEffect(() => {
    getToken();
  }, []);
  return <>{props.children}</>;
};

export default NutritionAuth;
