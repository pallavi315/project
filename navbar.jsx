import React, { useState } from 'react';
import '../navbar.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import menuData from '../navbar.json'
function  BasicExample(){
  function Menuitem({title,link,submenu}){
    if(submenu){
      return(
        <NavDropdown title={title} id="basic-nav-dropdown">
             {
              submenu.map((item)=>(
                <Menuitem key={item.title} title={item.title} link={item.link} submenu={item.submenu}/>
              ))
             }
          </NavDropdown>
      )
    }
    else{
      return(
        <Nav.Link href={link}>{title}</Nav.Link>
      )
    }
  }
  return (
    <>
    <Navbar expand="lg" bg="light">
      <Container className='navbar'>
      
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              menuData.menu.map((item)=>(
                <Menuitem key={item.title} title={item.title} link={item.link} submenu={item.submenu}/>
              )
              )
            } 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
export default BasicExample;
