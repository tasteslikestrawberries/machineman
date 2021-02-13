import React from "react";
import codingscreen from './assets/codingscreen.jpg'


class ThirdContainer extends React.Component {
 
    componentDidMount() {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.45
        }

        const callback = (entries) => {
            const span = document.getElementById("taste");
          
            // if thirdcontainer is intersecting info then add background color 
            if (entries[0].isIntersecting) {
                span.style.backgroundColor = "black";
            }
            // if third container is not intersecting then remove background color
            if (!entries[0].isIntersecting ) {
                span.style.backgroundColor = "unset";
            }
        }
            
        let observer = new IntersectionObserver(callback, options);
        const thirdContainer = document.getElementsByClassName("thirdContainer")[0]; //getElementsByClassName returns an array

        observer.observe(thirdContainer);         
    }

    render() {
        return (
            <div className='thirdContainer'>
                 <h3>Third Container</h3>
            <div className='content3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
           aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt moliiiiit anim id est laborum.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
           aliqua.
           <br/><br/><br/>

           <img className="lazyload" data-src={codingscreen} alt="codingscreen"></img>

            </div>
            

           
      
  

            </div>
        ); 
    }
}

export default ThirdContainer 
