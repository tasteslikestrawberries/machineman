import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';







class Boot extends React.Component{
    render() {
        return (

<>
<Navbar id="navbar" bg="light" variant="light">

    <Navbar.Brand href="#homesweethome">Home</Navbar.Brand>
    <Nav className="mr-auto">


      <Nav.Link href="#articles">Articles</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#blog">Blog</Nav.Link>


    </Nav>


  </Navbar>
</>

);
}
}



export default Boot