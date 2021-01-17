import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Join.module.css";
import onlineIcon from "../../icons/onlineIcon.png";
import { MdPerson } from "react-icons/all";
import Navbar from "../../User/Navbar/Navbar";
import UserAuth from "../../auth/UserAuth";


export default function SignIn() {
  const [name, setName] = useState("");
  const [room] = useState("hospital room");

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/getUser", {
        headers: { "x-auth-token": localStorage.getItem("auth-token") },
      })
      .then((res) => {
        setName(res.data.userName);
      });
  }, []);

  return (
    <UserAuth>
      <>
        <Navbar />
        <div className={styles.joinOuterContainer}>
          <div className={styles.joinInnerContainer}>
            <h1 className={styles.heading}>Waiting Area</h1>
            <div>
              <input
                placeholder="Name"
                value={name}
                className={styles.joinInput}
                type="text"
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <br />
            <div style={{ color: "white" }}>
              <h3>
                <MdPerson />
                <img
                  src={onlineIcon}
                  style={{ height: "10px" }}
                  alt="online"
                />{" "}
                Join Chat to see whether Doctor is online{" "}
              </h3>
            </div>
            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/chat?name=${name}&room=${room}`}
            >
              <button
                className={`${styles.button} ${styles.mt - 20}`}
                type="submit"
              >
                Begin Chat
              </button>
            </Link>
          </div>
        </div>
      </>
    </UserAuth>
  );
}
