import React from 'react'

import { ExampleComponent,ProgressBar,MainButton } from 'team-carbon-ui'
import 'team-carbon-ui/dist/index.css'

const App = () => {
  const [completed, setCompleted] = React.useState(0);

React.useEffect(() => {
  setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
}, []);
  return (
    <>
  <ProgressBar sliderColor = "#01bfbd" completed = {completed}/>
  <ExampleComponent text="It's working 😄" />
  <MainButton onClick = {() => alert('Nothing')}>Hi there!</MainButton>
  </>);
}

export default App
