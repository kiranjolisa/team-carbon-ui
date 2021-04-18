import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
text-decoration: none;
color : #212529;
font-size:16px;
font-family : apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
"Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", 
"Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
list-style-type: none;
padding : 5%;
&:hover {
      cursor:pointer;
      color: #01bfbd;
      font-weight:700;
    }`

const SideBarHeading = styled.p`
color : #444444;
padding : 5%;
font-weight:700;
font-size : 17px;
border-bottom: 1px solid #ccc;
padding-bottom:8px;`
export const SideBar = ({ heading = 'CATEGORIES',children, width ='20vw', 
background = "#f5f5f5", padding = "20px", borderRadius = '8px'}) => {
    return(
    <div style = {{width: width, backgroundColor:background, padding:padding, borderRadius:borderRadius}}>
        <SideBarHeading>{heading}</SideBarHeading>
        {children}
    </div>)
}

export const SideBarItem = ({children}) => {
    return(<ul>{children.map((item) => (
        <StyledLi>{item}</StyledLi>
    ))}</ul>)
}