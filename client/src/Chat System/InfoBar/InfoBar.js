import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import styles from './InfoBar.module.css';


const btnClicked=()=>{
   localStorage.removeItem("auth-token");
}

const InfoBar = ({ room }) => (
  <div className={styles.infoBar}>
    <div className={styles.leftInnerContainer}>
      <img className={styles.onlineIcon} src={onlineIcon} alt="online icon" />
      <h3>{room}</h3>
    </div>
    <div className={styles.rightInnerContainer}>
      <button style={
        {background: "none",
	color: "inherit",
	border: "none",
	padding: 0,
	font: "inherit",
	cursor: "pointer",
	outline: "inherit"}} onClick={btnClicked}><a href="/"><img src={closeIcon} alt="close icon" /></a></button>
    </div>
  </div>
);

export default InfoBar;