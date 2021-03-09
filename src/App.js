
import React from 'react';
import {useState} from 'react';
//components
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Info from './components/Info';
import useLazyLoad from './components/LazyLoad';
import FirstContainer from './components/FirstContainer';
import SecondContainer from './components/SecondContainer';
import ThirdContainer from './components/ThirdContainer';




//stylesheet
import "./App.css"



const App = () => {

const [isOpen, setIsOpen] = useState(false)  

function navbarClickHandler() {
  setIsOpen( (state) => !state )
}

   useLazyLoad ()

  return (
      <>
      <Navbar
      onClick = {navbarClickHandler} 
      isOpen = {isOpen}
      />
      { isOpen &&  <Dropdown/> } 
      <Info/>
      <FirstContainer/>
      <SecondContainer/>
      <ThirdContainer/>
      

      </>
  )
}

  export default App;


  /*
  
  sve unutar {} je jsx ekspresija i zato moramo staviti zagrade,inace bi ga citalo kao obicni tekst
  - && guglaj Logical AND (&&)
  - konvencija je da se nazivi funkcija pisu malim pocetnim slovom a komponente velikim pocetnim
  - !state znaci da NIJESTATE
  - oldschool way const Navbar = (props) => {
   const onClick = props.onClick
   
   */