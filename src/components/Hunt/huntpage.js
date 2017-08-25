import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AllClues from './allclues';
import Style from '../../App.css';

const HuntPage = () => (
  <div className='body'>
    <div className='nav'>
    </div>
    <h3>these are all the clues.</h3>
    <AllClues/>
  </div>
)


export default HuntPage;
