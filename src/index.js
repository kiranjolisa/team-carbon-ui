import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const ProgressBar = props => {
  const { sliderColor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#b2eceb",
    borderRadius: 50,
    margin: 50
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: sliderColor,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right"
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold"
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export const MainButton = ({children, onClick}) => {
  return <button className = {styles.MainButton} onClick = {onClick}>{children}</button> 
}