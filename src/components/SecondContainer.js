
import React from "react"
import android from './assets/android.jpg'
import skull from './assets/skull.jpg'
import rob1 from './assets/rob1.jpg'
import rob2 from './assets/rob2.jpg'
import rob3 from './assets/rob3.jpg'


/*
            <img id='img1' src={android} alt="" ></img>
         
            <img id='img2' src={skull} alt="" ></img>*/


class SecondContainer extends React.Component {
   render() {
       return (
        <div className='secondContainer'>
           
           <div className='grid'>
            <div className='gridImg'>
             

                <img id='img1' src={android} alt=""></img>
                <img id='img2' src={skull}   alt=""></img>
                <img id='img3' src={rob1}    alt=""></img>
                <img id='img4' src={rob2}    alt=""></img>
                <img id='img5' src={rob3}    alt=""></img>
            </div>
            </div>

            
      
            

              
        </div>
           
        
        
           
         

       
     
        
       ); 
   }
}

export default SecondContainer 