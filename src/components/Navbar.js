import React from 'react';


const Navbar = ({onClick, isOpen}) => {
  let classNameNavbar='navbar'

  if (isOpen) {classNameNavbar += 'change' }
  
    return (
    
    <div className={classNameNavbar} value="button" onClick={onClick} >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      
    </div>
    );
};


 

  export default Navbar





