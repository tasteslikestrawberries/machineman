import React from "react";
import robot from './assets/robot.png';
import android from './assets/android.jpg';




class FirstContainer extends React.Component {

 
        componentDidMount() {
            let options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.406
            }
    
            const callback = (entries) => {
                const span = document.getElementById("taste");
              
                // if firstcontainer is intersecting info then add background color 
                if (entries[0].isIntersecting) {
                    span.style.color = "rgb(168, 38, 255";
                }
                // if firstcontainer is not intersecting then remove background color
                if (!entries[0].isIntersecting ) {
                    span.style.color = "unset";
                }
            }
                
            let observer = new IntersectionObserver(callback, options);
            const firstContainer = document.getElementsByClassName("firstContainer")[0]; //getElementsByClassName returns an array
    
            observer.observe(firstContainer);         
        }
    


    render() {
        return (
            <div className='firstContainer'>
            
              <h1><span>First</span><br/>Container</h1>
              <img className="lazyload" data-src={robot} alt="" width="350" height="450"></img>
            
            <div className='content1'>
               
           <div className='contentItem'>
           <img id='img1' src={android} alt="" ></img></div>
            
           <div className='contentItem'>
           <img id='img2' src={android} alt="" width="300" height="350"></img></div>
            <div className='contentItem'>
           <img id='img3' src={android} alt=""></img></div>

           
            </div>

            
    
         
            </div>
           
      
  

        ); 
    }
}

export default FirstContainer 











