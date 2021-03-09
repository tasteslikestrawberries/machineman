import React from 'react';


const Navbar = ({onClick, isOpen}) => {
  let classNameNavbar='navbar'

  if (isOpen) {classNameNavbar+=' change' }
  
    return (
    
    <div className={classNameNavbar} value="button" onClick={onClick} >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      
    </div>
    );
};


 

  export default Navbar






/*
import React from 'react';


const Menu = () => {
    return (

    <div id="menu" value="button" >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      
    </div>
 

    );
};

export default Menu*/