import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Feed from './Feed'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Header.js';
import NavbarComp from './NavbarComp';
import Sidebar from './Sidebar';
import Widges from './Widges'
import LoginForm from './LoginForm'
import './Loginsignup.css'
import SignUpForm from './SignUpForm';
import { useStateValue } from './StateProvider';

function App() {

 const [{ user },dispatch] = useStateValue();
  return (<Router>
    <div className="app">
      {!user ?  <LoginForm /> : (
      <>
       <Header />
       <div className="app__body">
         <Sidebar />
         <Feed />
         <Widges />
       </div>
       </>
        )}
    </div>
  </Router>
  );
}

export default App;
