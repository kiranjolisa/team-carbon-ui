import React from 'react'

import {
  ProgressBar, 
  ProgressBarThin,
  MainButton, 
  PaymentFailureAnime, 
  PaymentSuccessAnime,
  DisplayCard,
  SmallSpinner, 
  Spinner, 
  PayButton, 
  ProceedToPayButton,
  ModalBox,
  ModalBodyDiv, 
  ModalButton, 
  ModalHeader,
  ModalTextDiv, 
  CloseSpan,
  SideBar,
  SideBarItem,
  Button } from 'team-carbon-ui'
import 'team-carbon-ui/dist/index.css'

const App = () => {
  const [completed, setCompleted] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);

React.useEffect(() => {
  setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
}, []);
  return (
    showModal?
    (<>
  <ProgressBar sliderColor = "#01bfbd" completed = {completed} />
  <MainButton onClick = {() => alert('Nothing')}>Hi there!</MainButton>
  <br/><br/>
  <ProgressBarThin sliderColor = "#01bfbd" completed = {completed} />
  <br/>
  <DisplayCard />
  <PaymentSuccessAnime/>
  <PaymentFailureAnime/>
  <SmallSpinner/>
  <Spinner />
  <br/><br/>
  <ProceedToPayButton>Proceed to Pay &#8377;XXXX</ProceedToPayButton>
  <br/><br/>
  <PayButton>Pay &#8377;XXXX</PayButton>
  <br/><br/>
  <MainButton>Show Modal View</MainButton>
  <ModalBox onClick = {() => {setShowModal(false)}}>
    <ModalBodyDiv>
    <CloseSpan/>
    <ModalHeader>Header Sec</ModalHeader>
      <ModalTextDiv>Something here</ModalTextDiv>
      <ModalButton>Nothing Happens</ModalButton>
    </ModalBodyDiv>
  </ModalBox>
  </>): (<>
  <ProgressBar sliderColor = "#01bfbd" completed = {completed} />
  <MainButton onClick = {() => alert('Nothing')}>Hi there!</MainButton>
  <br/><br/>
  <ProgressBarThin sliderColor = "#01bfbd" completed = {completed} />
  <br/>
  <DisplayCard />
  <PaymentSuccessAnime/>
  <PaymentFailureAnime/>
  <SmallSpinner/>
  <Spinner />
  <br/><br/>
  <ProceedToPayButton>Proceed to Pay &#8377;XXXX</ProceedToPayButton>
  <br/><br/>
  <PayButton>Pay &#8377;XXXX</PayButton>
  <br/><br/>
  <MainButton onClick = {() => {setShowModal(true)}}>Show Modal View</MainButton>
  <br/><br/>
  <SideBar>
  <SideBarItem children = {["Item1", "Item2", "Item3", "Item4"]} />
  </SideBar>
  <Button type = "secondary" onClick= {()=> {alert('user has clicked secondary button now')}}>Secondary</Button>
  <Button type = "primary" onClick= {()=> {alert('user has clicked primary button now')}} >Primary</Button>
  </>));
}

export default App
