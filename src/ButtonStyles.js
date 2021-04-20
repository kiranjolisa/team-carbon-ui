import React from "react";
import styles from "./ButtonStyles.module.css";

export const Button = ({type = "primary", children, onClick}) => {
    return <button className = {styles[type]} onClick = {onClick}>{children}</button> 
  }