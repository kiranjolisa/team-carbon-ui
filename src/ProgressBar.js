import React from 'react';
export const ProgressBar = props => {
    const { sliderColor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: "90%",
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
  
    // const labelStyles = {
    //   padding: 5,
    //   color: "white",
    //   fontWeight: "bold"
    // };
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          {/* <span style={labelStyles}>{`${completed}%`}</span> */}
        </div>
      </div>
    );
  };

  export const ProgressBarThin = props => {
      const { sliderColor, completed } = props;
    
      const containerStyles = {
        height: 8,
        width: "95%",
        backgroundColor: "#b2eceb",
        borderRadius: 50,
        margin: "auto",
        marginTop: 0,
        marginBottom: 0
      };
    
      const fillerStyles = {
        height: "100%",
        width: `${completed}%`,
        backgroundColor: sliderColor,
        transition: "width 1s ease-in-out",
        borderRadius: "inherit",
        textAlign: "right"
      };
    
      // const labelStyles = {
      //   padding: 5,
      //   color: "white",
      //   fontWeight: "bold"
      // };
    
      return (
        <div style={containerStyles}>
          <div style={fillerStyles}>
            {/*<span style={labelStyles}>{`${completed}%`}</span>*/}
          </div>
        </div>
      );
    };
    
  