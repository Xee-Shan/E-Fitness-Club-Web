import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import styles from './InfoBar.module.css';
import { useHistory } from "react-router-dom";

const InfoBar = ({ room,socket }) => {
  const history = useHistory();

  const btnClicked=(e)=>{
    e.preventDefault();
    socket.emit("disconnect");
    socket.off();
    history.push("/join");
    window.location.reload();
 }
 
  
 return( <div className={styles.infoBar}>
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
	outline: "inherit"}} onClick={(e)=>btnClicked(e)}><a href="/"><img src={closeIcon} alt="close icon" /></a></button>
    </div>
  </div>
 );
};

export default InfoBar;