import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';






class Boot extends React.Component{
    render() {
        return (

<>
<Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">My Bootstrap Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
    </Nav>
  </Navbar>
</>

);
}
}



export default Boot