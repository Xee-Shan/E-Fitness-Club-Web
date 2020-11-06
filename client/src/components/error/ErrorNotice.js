import React from "react";
import Styles from "../../styles/styles.module.css";
import { MDBBtn } from "mdbreact";

const ErrorNotice = (props) => {
  return (
    <div className={Styles.error}>
      <span>{props.message}</span>
      <MDBBtn onClick={props.clearError} size="sm" color="info">
        <i className="fas fa-times"></i>
      </MDBBtn>
    </div>
  );
};

export default ErrorNotice;
