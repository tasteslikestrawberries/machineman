
import React from "react"
import android from './assets/android.jpg';
import skull from './assets/skull.jpg';




class SecondContainer extends React.Component {
    render() {
        return (
            <div className='secondContainer'>
             
             <img id='img1' src={android} alt="" ></img>
          
             <img id='img2' src={skull} alt="" ></img>
           
            
            </div>
         
            
          

        
      
         
        ); 
    }
}

export default SecondContainer 