import React from "react";
import {ProgressBarThin as ProgressBar} from "./ProgressBar";
import styled from "styled-components";

const CardContainer = styled.div`
float:left;
height:83vh;
width: 21.8vw;
border-radius:20px;
margin:10px;
&:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor:pointer;};`

const CardTitle = styled.h3`
color : #444444;
margin-left:5px;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;`

const CodeNameBlock = styled.div`
width:20px;
height:20px;
border-radius:50%;
color:#01bfbd;
background-color:gainsboro;
text-align:center;
justify-content:center;
margin-left:10px;
padding:0px;
font-size:14px;`

export const DisplayCard = ({
    title = "Help Jasper Paul Rescue People Abandoned, Dying On The Streets. Support ‘The Second Chance’",
    imageURL = "https://kettocdn.gumlet.io/media/campaign/342000/342482/image/wid323b78c9f7e9daa2179f02aa6cfffc4dbfbafc29.jpg?w=300",
    achievedPercent = 110, 
    AuthorName = "Jasper Paul", 
    raisedValue= 123356,
    lastDonation = 7,
    daysLeft = 21,
 supportersCount = 13997,
    id,
openPaymentModal,
toggleOpenPaymentModal})=> {
        const extractFirstLetter = (AuthorName) =>{
            let splitNames = AuthorName.split(" ");
            return splitNames[0][0] + splitNames[1][0];
        }
        if(achievedPercent > 100){
            achievedPercent = 100;
        }
    return (
        <CardContainer onClick = {() => {toggleOpenPaymentModal()}}>
            <img src = {imageURL} width = "100%" height = "170px" alt = {title}
            style = {{ borderRadius: "20px" }}/>
            <CardTitle>{title}</CardTitle>
            <div>
                <span style = {{float:"left"}}>
                <CodeNameBlock><p>{extractFirstLetter(AuthorName)}</p></CodeNameBlock>
                </span>
                <p style = {{float:"left", fontSize:"14px", color : "#212529"}}>&emsp;by {AuthorName}</p>
            </div>
               
                <div style = {{clear:"both",float:"left", marginLeft : "10px"}}>
                    <p style = {{fontSize: "20px", fontWeight:"bold", color:"#444444"}}>&#8377;{raisedValue}
                    <span style = {{fontSize: "18px", fontWeight:"normal", color:"#999999"}}>&ensp;raised</span></p>
                </div>
            <div style = {{float:"left", clear:"left", width:"100%"}}>
            <ProgressBar sliderColor = "#01bfbd" completed ={achievedPercent}/>
            </div>
            <div style = {{fontSize: "17px", 
            fontWeight:"normal", 
            color:"#999999",
            float: "left", 
            clear:"both"}}>Last donation {lastDonation} hours ago</div>
            <div style = {{float:"left", clear:"both",width:"100%", color:"#444444"}}>
                <div style = {{float:"left", fontSize:"15px", textAlign:"left"}}><p><span>{daysLeft}</span>Days Left</p></div>
                <div style = {{float:"right", fontSize:"15px", textAlign:"right"}}><p>{supportersCount} Supporters</p></div>
            </div>
        </CardContainer>
    )
}
