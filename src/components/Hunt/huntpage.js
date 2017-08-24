import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AllClues from './allclues';


const HuntPage = () => (
  <div>
    <h3>these are all the clues.</h3>
    <AllClues/>
     <hr/>
  </div>
)


export default HuntPage;
