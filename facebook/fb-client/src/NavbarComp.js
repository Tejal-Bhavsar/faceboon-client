import React from 'react';
import {Navbar,Nav,Button,Form,FormControl}  from 'react-bootstrap'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import Profile from './Profile'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const NavbarComp = () => { 


return ( 
<>
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Facebook</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/signup">SignUp</Nav.Link>
       
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<Route> 
  
              <Switch>
              <Route exact path='/' component={Profile} /> 
              <div className="auth-wrapper">
                <div className="auth-inner">
                  <Route path='/signin' component={LoginForm} />
                  <Route path="/login" component={LoginForm} />
                  <Route path="/signup" component={SignUpForm} />
                </div>
              </div>
              </Switch>
          
</Route>
</>
) }

export default NavbarComp;