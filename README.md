# team-carbon-ui

> A custom UI library built for modular usage of styling components in React app.

[![NPM](https://img.shields.io/npm/v/team-carbon-ui.svg)](https://www.npmjs.com/package/team-carbon-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save team-carbon-ui
```
[#NOTE: Dependencies used: styled-components, classnames]

Sample Deployment: https://sample-ui-deployment.vercel.app/
## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'team-carbon-ui'
import 'team-carbon-ui/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```
## Available Components
1. Main Button 


![Main Button](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/MainButton.png)

```jsx
  const MainButton = ({children, onClick}) => {
      return <button className = {styles.MainButton} onClick = {onClick}>{children}</button> 
  };
```

2. Loading Spinner


![Big Spinner](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/BigSpinnerLoading.png)

```jsx
    const Spinner = styled.div`
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
```

3. Display Card


![Display Card](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/DisplayCard.png)

```jsx
    const DisplayCard = ({
    title = "Help Jasper Paul Rescue People Abandoned, Dying On The Streets. Support ‘The Second Chance’",
    imageURL = "https://kettocdn.gumlet.io/media/campaign/342000/342482/image/wid323b78c9f7e9daa2179f02aa6cfffc4dbfbafc29.jpg?w=300",
    achievedPercent = 110, 
    AuthorName = "Jasper Paul", 
    raisedValue= 123356,
    lastDonation = 7,
    daysLeft = 21,
    supportersCount = 13997,
    id})=> {
        const extractFirstLetter = (AuthorName) =>{
            let splitNames = AuthorName.split(" ");
            return splitNames[0][0] + splitNames[1][0];
        }
        if(achievedPercent > 100){
            achievedPercent = 100;
        }
    return (
        <CardContainer>
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
            clear:"both"}}>&ensp;Last donation {lastDonation} hours ago</div>
            <div style = {{float:"left", clear:"both",width:"100%", color:"#444444"}}>
                <div style = {{float:"left", fontSize:"15px", textAlign:"left"}}><p><span>&emsp;{daysLeft}</span>Days Left</p></div>
                <div style = {{float:"right", fontSize:"15px", textAlign:"right"}}><p>{supportersCount} Supporters&emsp;</p></div>
            </div>
        </CardContainer>
    )
}
```

4. Pay Button


 ![Pay Button](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/PayButton.png)
 
```jsx
    const PayButton = styled.button`
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
  }`;
```


5. Proceed to Pay Button


 ![Proceed to Pay Button](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/ProceedToPayButton.png)
 
```jsx
   const ProceedToPayButton = styled.button`
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
  }`;
  ```

6. Payment Success Animation


![Payment Process Success](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/PaymentSuccessAnime.png)

```jsx
    const PaymentSuccessAnime = () => {
    return(
        <div className = {cx(styles.o_circle, 
        styles.c_container__circle, 
        styles.o_circle__sign_success)}>
        <div className= {styles.o_circle__sign}></div>  
    </div>   
    )
  }`;
```

7. Payment Failure Animation


![Payment Process Failure](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/PaymentFailureAnime.png)

```jsx
  const PaymentFailureAnime = () => {
    return(
        <div className = {cx(styles.o_circle, 
            styles.c_container__circle, 
            styles.o_circle__sign_failure)}>
    <div className= {styles.o_circle__sign}></div>  
    </div>
    )
}`; 
```

8. Progress Bar


![Progress Bar](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/ProgressBar.png)

 ```jsx
    const ProgressBar = props => {
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
    
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
        </div>
      </div>
    );
  };
  ```
  
  9. Progress Bar (Thin)


  ![Progress Bar Thin](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/ProgressBarThin.png)
  
   ```jsx
      const ProgressBarThin = props => {
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
      return (
        <div style={containerStyles}>
          <div style={fillerStyles}>
          </div>
        </div>
      );
    }; 
  ```
   
   10. Loading Spinner (Small)


   ![Loading Spinner Small Size](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/SmallSpinnerLoading.png)
   
  ```jsx
    const SmallSpinner = styled.div`
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
  ```

11. Sidebar 


![Sidebar](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/Sidebar.png)

   ```jsx
      const SideBar = ({ heading = 'CATEGORIES',children, width ='20vw', 
      background = "#f5f5f5", padding = "20px", borderRadius = '8px'}) => {
      return(
      <div style = {{width: width, backgroundColor:background, padding:padding, borderRadius:borderRadius}}>
        <SideBarHeading>{heading}</SideBarHeading>
        {children} //Sidebar items
    </div>)
    }
    const SideBarItem = ({children}) => {
    return(<ul>{children.map((item) => (
        <StyledLi>{item}</StyledLi>
    ))}</ul>)
    };
 ```
   

## License

MIT © [kiranjolisa](https://github.com/kiranjolisa)
