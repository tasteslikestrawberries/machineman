
import React from "react"
import android from './assets/android.jpg';




class SecondContainer extends React.Component {
    render() {
        return (
            <div className='secondContainer'>
                  <h2>Have you been told<br/><br/>
                      about the <br/>machine man?</h2>


           <img id='img1' src={android} alt="" ></img>

            
        <div className='secondText'></div>
               </div>
         
            
          

        
      
         
        ); 
    }
}

export default SecondContainer 