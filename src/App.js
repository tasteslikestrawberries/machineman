
import React from 'react';
//components
import Menu from './components/Menu';
import Info from './components/Info';
import useLazyLoad from './components/LazyLoad';
import FirstContainer from './components/FirstContainer';
import SecondContainer from './components/SecondContainer';
import ThirdContainer from './components/ThirdContainer';

//stylesheet
import "./App.css"



function App () {
   useLazyLoad ()

  return (
      <>
      <Menu/>
      <Info/>
      <FirstContainer/>
      <SecondContainer/>
      <ThirdContainer/>
      

      </>
  )
}

  export default App;
