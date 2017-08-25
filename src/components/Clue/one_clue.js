import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Style from '../../App.css';

const CluePage = () => (
  <div className='body'>
    <div className='nav'>
    </div>
    <h1>THIS IS A CLUE</h1>
    <button className='lgbutton'>
      <input type="file" accept="image/*" capture="camera"/>
    </button>
  </div>
)


export default CluePage;
