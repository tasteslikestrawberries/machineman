import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Spinner from 'react-bootstrap/Spinner';






class Boot extends React.Component{
    render() {
        return (

<>
<Navbar id="navbar" bg="light" variant="light">

<Spinner animation="border" size="sm" />
  <Spinner animation="border" />
  <Spinner animation="grow" size="sm" />
  <Spinner animation="grow" /> &nbsp;&nbsp;&nbsp;

    <Navbar.Brand href="#home">Home</Navbar.Brand>
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