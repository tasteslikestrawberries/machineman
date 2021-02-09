
import React from 'react';
//components
import Boot from './components/Boot.js';
import Header from './components/Header';
import MyForm from './components/Form';
import Articles from './components/Articles';
//stylesheet
import "./App.css"




function App () {

  return (
      <>
      <Boot/>
        <div className="content">
        <Articles/>
        <Header/>
        <MyForm/>
        </div>
      </>
  )
}

  export default App;
