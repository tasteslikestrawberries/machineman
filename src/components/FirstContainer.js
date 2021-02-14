import React from "react";
import robot from './assets/robot.png';




class FirstContainer extends React.Component {

 
        componentDidMount() {
            let options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2
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
            
              <h1>The <span>Machine</span><br/>Man</h1>
              <img className="lazyload" data-src={robot} alt="" width="350" height="450"></img>
            
            <div className='content1'>
               
          
            
           
           
            </div>

            
    
         
            </div>
           
      
  

        ); 
    }
}

export default FirstContainer 











