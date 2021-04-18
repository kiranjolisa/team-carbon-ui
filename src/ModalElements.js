import React from "react";
import styled from "styled-components";

export const ModalBox = styled.div`
display: block; 
position: fixed; 
z-index: 1; 
left: 0;
top: 0;
width: 100%; 
height: 100%;
overflow: auto;
background-color:rgba(0,0,0,.7);`

export const ModalBodyDiv = styled.div`
position: relative;
background-color: white;
margin:auto;
margin-top: 10vh;
padding: 0;
border: 1px solid #888;
width: 43vw;
height:80vh;
transition: 1s;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
border-radius:20px;`

export const CloseSpan = styled.span`
padding: 2px 16px;
float: right;
cursor:pointer;
background-color: #5cb85c;
color: white;
font-size : 30px;`

export const ModalHeader = styled.div`  
background-color: #f7f8f8;
width:97.5%;
padding: 8px;
border-radius:10px;
color: #01bfbd;
font-weight:bold;
font-size:30px;
text-align:center;`

export const ModalTextDiv = styled.div`
padding: 2px 16px;`

export const ModalFooter = styled.div`
padding: 2px 16px;
background-color: #5cb85c;
color: white;`

export const ModalButton = styled.button`
height:40px;
width:150px;
border-radius:20px;
border: none;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
margin:auto;
margin:20px;
cursor:pointer;
font-size:15px;
transition:1s;
color : #444444;
&:focus{
    background-color :#01bfbd;
    color:white;
    outline: none;
}`