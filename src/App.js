import React from "react"
//components
import Navbar from './components/Navbar'
import Header from './components/Header'
import MyForm from './components/Form'
import Articles from './components/Articles'
//stylesheet
import "./App.css"


function App () {

  return (
      <>
        <Navbar/>
        <Header/>
        <div class="content">
        <MyForm/>
        <Articles/>
        </div>
      </>
  )
}

  export default App;
