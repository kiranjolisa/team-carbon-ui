import React from "react";
import styled, {keyframes} from "styled-components";

export const ProceedToPayButton = styled.button`
background-color:#01bfbd;
color:white;
width:22%;
height:50px;
cursor:pointer;
width:270px;
margin-left:25%;
border:none;
outline:none;
border-radius:25px;
font-size:17px;
padding:10px;
&:hover{
    background-color:#039695;
}`

export const PayButton = styled.button`
background-color:#01bfbd;
color:white;
width:30%;
height:40px;
cursor:pointer;
width:240px;
margin-left:27%;
border:none;
outline:none;
border-radius:25px;
font-size:17px;
padding:10px;
&:hover{
    background-color:#039695;
}`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid #b2eceb;
  border-right: 2px solid #b2eceb;
  border-bottom: 2px solid #b2eceb;
  border-left: 4px solid #01bfbd;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin:auto;
  margin-top:20px;
`;

export const SmallSpinner = styled.div`
  animation: ${rotate360} 2s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #b2eceb;
  border-right: 2px solid #b2eceb;
  border-bottom: 2px solid #b2eceb;
  border-left: 4px solid #01bfbd;
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin:auto;
  margin-top:20px;
`;