import React from "react";
import Styles from "../../styles/styles.module.css";
import { MDBBtn } from "mdbreact";

const ResponseNotice = (props) => {
  return (
    <div className={Styles.error}>
      <span>{props.message}</span>
      <MDBBtn onClick={props.clearError} size="sm" color="unique">
        <i className="fas fa-times"></i>
      </MDBBtn>
    </div>
  );
};

export default ResponseNotice;
