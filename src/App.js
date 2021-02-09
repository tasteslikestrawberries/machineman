import React from "react"
//components
import Header from './components/Header'
import MyForm from './components/Form'
import Articles from './components/Articles'
//stylesheet
import "./App.css"


function App () {

  return (
      <>
     
        <Header/>
        <div className="content">
        <MyForm/>
        <Articles/>
        </div>
      </>
  )
}

  export default App;
