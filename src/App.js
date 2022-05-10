// import logo from './logo.svg';
import './App.css';
// import { waitForElementToBeRemoved } from '@testing-library/react';
import Header from './components/Header'
import User from './components/User'
import Footer from './components/Footer'

import ReactPlayer from 'react-player'
import React, {useState} from 'react'

function App() {
  
  // const food = "nachos"
  // const title = "Welcome to Your Page"
  // const user = {
  //   userName: "alice",
  //   age: 36
  // }

  // const myId = "food-container"

  // const getFavoriteFood = () => {
  //   return food
  // }

  const userDetails = {
    name: "alice",
    food: "nachos"

    
  }
const [theme, setTheme] = useState("light");

  return (
   <div className={theme}>
  
      {/* {<h1>{title.toUpperCase()}</h1>
      <h2> {food}</h2>
      <p> {user.userName}</p>

      <p id={myId}> Favourite food:  {getFavoriteFood()}</p>} */}
      <Header>
      <h1> Hello World</h1>
     </Header>

     <div>
       <button onClick={() => {setTheme("light")}}> Switch to Light</button>
       <button onClick={() => {setTheme("dark")}}> Switch to Dark</button>
     </div>

      <ReactPlayer url="https://www.youtube.com/watch?v=RcohgARJTWQ" playing />
      <User {...userDetails} />
      <User name="Alice" food="Pears" /> 
      <Footer />
  
   </div>
  );
  
}

export default App;
