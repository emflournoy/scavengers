import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Style from '../../App.css';

const TopUsers = () => (
  <div>
    <h2>Top Teams</h2>
    <ul>
      <li>1. Team Skhunts</li>
      <li>2. Team meaT</li>
      <li>3. Team Cheese</li>
      <li>4. Team Poop</li>
    </ul>
   </div>
 )


export default TopUsers;
