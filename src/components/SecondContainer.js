
import React from "react"
import rob1 from './assets/rob1.jpg'
import rob2 from './assets/rob2.jpg'
import rob3 from './assets/rob3.jpg'
import rob4 from './assets/rob4.jpg'
import rob5 from './assets/rob5.jpg'


/*
            <img id='img1' src={android} alt="" ></img>
         
            <img id='img2' src={skull} alt="" ></img>*/


class SecondContainer extends React.Component {
   render() {
       return (
        <div className='secondContainer'>
           
           <div className='grid'>
           
             
                <img className='gridImg' src={rob5}  alt=""></img>
                <img className='gridImg' src={rob4}  alt=""></img>
                <img className='gridImg' src={rob1}  alt=""></img>
                <img className='gridImg' src={rob2}  alt=""></img>
                <img className='gridImg' src={rob3}  alt=""></img>
        
            </div>

            
      
            

              
        </div>
           
        
        
           
         

       
     
        
       ); 
   }
}

export default SecondContainer 