
import React from "react"
import android from './assets/android.jpg';



class SecondContainer extends React.Component {
    render() {
        return (
            <div className='secondContainer'>
                  <h2>Second Cont.</h2>

            <div className='content2'>

            <div className='contentItem'>
           <img id='img1' src={android} alt="" ></img></div>
            
           <div className='contentItem'>
           <img id='img2' src={android} alt="" width='' height='500px'></img></div>

           <div className='contentItem'>
           <img id='img1' src={android} alt="" ></img></div>


               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
           aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt moliiiiit anim id est laborum. 
            
            </div>

        
      
            </div>
        ); 
    }
}

export default SecondContainer 