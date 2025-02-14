import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      
      <Navbar.Brand as={Link} to="/">My Profil</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="ml-auto">
          
          <Nav.Link as={Link} to="/">Home</Nav.Link>
         
          <Nav.Link as={Link} to="/about">About me</Nav.Link>
         
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
         
          <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
        
        </Nav>
      
      </Navbar.Collapse>
    
    </Navbar>
  );
}

export default Header;