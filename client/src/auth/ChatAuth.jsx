import React,{useEffect} from 'react';
import history from "../history/History";
import axios from "axios";

export default function ChatAuth(props) {
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
            if (res.data.role !== "physiatrist"&&res.data.role !== "user") history.push("/login");
          });
      }, []);
      return <>{props.children}</>;
}
