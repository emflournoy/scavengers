import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Style from '../../App.css';

const AllClues = () => (
  <div>
    <Link to="/CluePage"><button>select this clue</button></Link>
    <h1>click a clue</h1>
    <h1>click a clue</h1>
  </div>
)


export default AllClues;
