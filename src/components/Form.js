import React, { useState } from "react"

function MyForm() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    message: "",
    isChecked: false,
    gender: "",
    price: 0,
  });
  

  const handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setState({
      ...state,
      [e.target.name]: value,
    })
  }

  return (
    
     
      <form>
      <h3>* Simple React Form</h3>

        <label>
          First Name:{" "}
          <input
            type="text"
            name="fname"
            value={state.fname}
            onChange={handleChange}
          />

        </label> 

        <br/><br/>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lname"
            value={state.lname}
            onChange={handleChange}
          />
        </label>
      
        <br/><br/>
      <label>
        Your Message:{" "}
        <textarea
          name="message"
          value={state.message}
          onChange={handleChange}
        />
      </label>

      <br/><br/>

      <label>
        <input
          type="checkbox"
          name="isChecked"
          checked={state.isChecked}
          onChange={handleChange}
        />
{" "}
        Is Checked?
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={state.gender === "male"}
          onChange={handleChange}
        />
{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={state.gender === "female"}
          onChange={handleChange}
        />
{" "}
        Female
      </label>
    

      <br/><br/>
      
      <label>
        Price (between 0 and 50):
        <input
          type="range"
          name="price"
          min="0"
          max="50"
          value={state.price}
          onChange={handleChange}
        />
      </label>

      <br/><br/>
    <label> <button>Submit</button></label>
     
    
        <p>Name: {state.fname} {state.lname}</p>
      
      <p>Message: {state.message}</p>

      </form>
      
    
  )
}
export default MyForm