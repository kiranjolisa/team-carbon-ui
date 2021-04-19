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

### Main Button 

#### When To Use
This button is used as the highlighted buttons on the landing page and is recommeded to use in that manner.

#### How To Use
```jsx
<MainButton onClick = {() => alert('Nothing')}>Hi there!</MainButton>
```
#### Sample Implementation

-![Main Button](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/MainButton.png)

### Loading Spinner

#### When To Use
Spinner is used to make the screen equipped when the code is making some kind of API requests and that helps to let the user know that the application is
doing something from behind. 

#### How To Use
```jsx
  <Spinner />
```
#### Sample Implementation
-![Big Spinner](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/BigSpinnerLoading.png)

### Display Card

#### When To Use
These kinds of cards are generally used to depict informations regarding to a peculiar matter in-short. Here, in the context of our web app, it's used to display
the short format information regarding the fundraisers.

#### How To Use
```jsx
<DisplayCard />
```
The above implementation will work since there are enough supplies for default parameters but the programmer using this library is advised to use their custom values.Like the one defined below
```jsx
  <DisplayCard
   title = "Help Jasper Paul Rescue People Abandoned, Dying On The Streets. Support ‘The Second Chance’"
    imageURL = "https://kettocdn.gumlet.io/media/campaign/342000/342482/image/wid323b78c9f7e9daa2179f02aa6cfffc4dbfbafc29.jpg?w=300"
    achievedPercent = 110
    AuthorName = "Jasper Paul" 
    raisedValue= 123356
    lastDonation = 7
    daysLeft = 21
    supportersCount = 13997
    id/>
  ```

#### Sample Implementation
-![Display Card](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/DisplayCard.png)


### Pay Button

#### When To Use
Pay buttons are generally found oval shaped buttons that are used to initiate the payment process(basically accessing the payment gateway) within the website.

#### How To Use
  ```jsx
  <PayButton>Pay &#8377;XXXX</PayButton>
  ```
#### Sample Implementation
-![Pay Button](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/PayButton.png)
 
### Proceed to Pay Button

#### When To Use
Similar to the above mentioned Pay Button but varies in size and padding to accomodate more texts.

#### How To Use
```jsx
 <ProceedToPayButton>Proceed to Pay &#8377;XXXX</ProceedToPayButton>
 ```
#### Sample Implementation
-![Proceed to Pay Button](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/ProceedToPayButton.png)

### Payment Success Animation

#### When To Use
After successful completion of a payment, the user has to be made aware that the payment procedures were accomplised successfully and therefore 
this anime does that job.

#### How To Use
```jsx
 <PaymentSuccessAnime/>
 ```
 
#### Sample Implementation
-![Payment Process Success](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/PaymentSuccessAnime.png)

### Payment Failure Animation

#### When To Use
After incurring failure of a payment process, the user has to be made aware that the payment procedures weren't accomplised successfully and therefore 
this anime does that job.

#### How To Use
```jsx
 <PaymentFailureAnime/>
 ```
#### Sample Implementation
-![Payment Process Failure](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/PaymentFailureAnime.png)

### Progress Bar

#### When To Use
Progress bar renders a styled div that behaves like a measure revealer of something on a scale of 100. For example: Depiction of achieved percent of current value to the 
target value can be portrayed using Progress Bar.

#### How To Use
```jsx
 <ProgressBar sliderColor = "#01bfbd" completed = {/*some numerical value out of 100 goes here*/} />
 ```
#### Sample Implementation
-![Progress Bar](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/ProgressBar.png)
  
 ### Progress Bar (Thin)
 
 #### When To Use
Progress bar renders a styled div that behaves like a measure revealer of something on a scale of 100. For example: Depiction of achieved percent of current value to the 
target value can be portrayed using Progress Bar. This UI component is very similar to the above one but the only diffeence is that it's relatively slimmer.

#### How To Use
```jsx
 <ProgressBarThin sliderColor = "#01bfbd" completed = {/*some numerical value out of 100 goes here*/} />
 ```

#### Sample Implementation
-![Progress Bar Thin](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/ProgressBarThin.png)
   
### Loading Spinner (Small)

#### When To Use
Spinner is used to make the screen equipped when the code is making some kind of API requests and that helps to let the user know that the application is
doing something from behind. This is very similar to the spinner mentioned above in the same documentation but smaller in as the name suggests, the choice
of sizes depends on many UI design factors. 

#### How To Use
```jsx
<SmallSpinner />
```
#### Sample Implementation
-![Loading Spinner Small Size](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/SmallSpinnerLoading.png)

### Sidebar 

#### When To Use
Inorder to enlist many things categorically in a styled format and at the same time has some tasks to be persued on the remain area of the application
when they are clicked, sidebar gets handy on such scenarios. Here in the context of the web application developed by our team, the sidebars were used 
mainly to list the different categories of fundraisers and list them when the buttons are clicked.

#### How To Use
```jsx
  <SideBar>
    <SideBarItem children = {["Item1", "Item2", "Item3", "Item4"]} />
  </SideBar>
  ```
  Passing an array of items directly to the component will easily render a Sidebar without much hassle and that makes code look more neat.
  
#### Sample Implementation
-![Sidebar](https://github.com/kiranjolisa/team-carbon-ui/blob/main/readme_imgs/Sidebar.png)

## License

MIT © [kiranjolisa](https://github.com/kiranjolisa)
