import React from "react";
import Carousel from 'react-bootstrap/Carousel';

 


const Header = () => {
  return (
  
    <header>

      <Carousel>
  <Carousel.Item id ="citem">
    <img className="d-block w-100" src="https://i.postimg.cc/MGbdwb0C/c3.png" alt="First slide"></img>
    <Carousel.Caption id="caption">
      <h3>First slide label</h3> <br/> <br/>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item id ="citem">
    <img className="d-block w-100" src="https://i.postimg.cc/G3Y9m7TT/c1.png" alt="Second slide"></img>
    <Carousel.Caption id="caption">
      <h3>Second slide label</h3> <br/> <br/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item id ="citem">
    <img className="d-block w-100" src="https://images.wallpapersden.com/image/download/macos-11-big-sur_bGZsbmmUmZqaraWkpJRobWllrWdma2U.jpg" alt="Third slide"></img>
    <Carousel.Caption id="caption">
      <h3>Third slide label</h3> <br/> <br/>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>


    </header>
    
  )
}

export default Header


