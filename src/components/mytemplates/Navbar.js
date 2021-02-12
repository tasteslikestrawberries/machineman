/* eslint-disable */


/*BASIC NAV BAR
#nav {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 25px;
  color: white;
  background-color: #282c34;
  border-bottom: 1px solid white; 
  border-top: 1px solid white; 
  text-align: center;
  letter-spacing: 3px;
}
  

#nav li {
  display: inline;
  padding-right: 60px;
  list-style: none;
  
}

#nav a {
  text-decoration: none;
  text-transform: uppercase;
  color: white;
}
#nav a:hover {
  text-decoration: none;
  font-weight:bold;
}

*/


import React from "react"

class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="">Home</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </div>
        );
    }
}


export default Navbar