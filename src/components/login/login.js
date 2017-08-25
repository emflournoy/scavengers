import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Style from '../../App.css';

const Login = () => (
  <div className='instagram'>
    <h3>Sign in with Instagram</h3>
    <Link to="/Portal">Portal</Link>
  </div>
)


export default Login;
