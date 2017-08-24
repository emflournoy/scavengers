import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import HuntPage from '../Hunt/huntpage';

const CurrentHunt = () => (
  <div>
    <h3>here is information about your hunt.</h3>
    <Link to='/HuntPage'><button>continue hunt</button></Link>
     <hr/>
  </div>
)


export default CurrentHunt;
