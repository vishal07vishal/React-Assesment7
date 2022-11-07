import React from 'react';
import {Container, Navbar, Nav}  from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';



const Navs = () => {
  return (
   <>
     
      <Navbar className='mb-5 navbar'>
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
          <Nav className="m-auto">
            <LinkContainer to="/home"><Nav.Link className="navs me-md-4">Home</Nav.Link></LinkContainer> 
            <LinkContainer to="/student"><Nav.Link className="navs  me-md-4">Student</Nav.Link></LinkContainer> 
            <LinkContainer to="/contact"><Nav.Link className="navs  me-md-4">Contact</Nav.Link></LinkContainer>
       
           
          </Nav>
          
      </Container>
    </Navbar>
   </>
 
  )
}

export default Navs;