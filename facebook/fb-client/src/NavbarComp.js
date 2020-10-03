import React from 'react';
import {Navbar,Nav,Button,Form,FormControl}  from 'react-bootstrap'


const NavbarComp = () => { 

return ( 
<>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Facebook</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/sign-in">Login</Nav.Link>
      <Nav.Link href="/sign-up">SignUp</Nav.Link>
       
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
</>
) }

export default NavbarComp;