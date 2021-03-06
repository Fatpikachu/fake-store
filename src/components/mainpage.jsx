import React, {Component} from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import ApiService from '../services/ApiService.js';
import AuthService from '../services/AuthService.js';
import Homepage from './homepage.jsx';

class Mainpage extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div>
        {
        AuthService.loggedIn()
        ? <Homepage />
        : <div>
          <h1 className='welcome-box'> 欢迎来到 <h1 className='logo1'> Vide<h1 className='logo2'>OH!</h1></h1></h1>
            <div className="login">
              <NavLink to='/login'> Login </NavLink>
            </div>
            <div className="signup">
              <NavLink to='/signup'> Signup </NavLink>
            </div>
         </div>
        }
      </div>
      )
    }
}

export default Mainpage;