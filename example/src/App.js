import React from 'react'

import {
  ProgressBar, 
  ProgressBarThin,
  MainButton, 
  PaymentFailureAnime, 
  PaymentSuccessAnime,
DisplayCard } from 'team-carbon-ui'
import 'team-carbon-ui/dist/index.css'

const App = () => {
  const [completed, setCompleted] = React.useState(0);

React.useEffect(() => {
  setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
}, []);
  return (
    <>
  <ProgressBar sliderColor = "#01bfbd" completed = {completed} />
  <MainButton onClick = {() => alert('Nothing')}>Hi there!</MainButton>
  <br/><br/>
  <ProgressBarThin sliderColor = "#01bfbd" completed = {completed} />
  <br/>
  <DisplayCard />
  <PaymentSuccessAnime/>
  <PaymentFailureAnime/>
  </>);
}

export default App
