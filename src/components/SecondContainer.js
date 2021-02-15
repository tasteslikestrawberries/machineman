
import React from "react"
import android from './assets/android.jpg';
import skull from './assets/skull.jpg';




class SecondContainer extends React.Component {
    render() {
        return (
            <div className='secondContainer'>
             
               
               <div className='secondContainerPart'>
           <img id='img1' src={android} alt="" ></img>
          
           <img id='img2' src={skull} alt="" ></img>
           <div className='secondText'> <h2>becoming HUMAN?</h2></div>

               </div>
    
               </div>
         
            
          

        
      
         
        ); 
    }
}

export default SecondContainer 