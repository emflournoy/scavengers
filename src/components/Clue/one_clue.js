import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Style from '../../App.css';

const CluePage = () => (
  <div>
    <div className='nav'>
    </div>
    <h1>THIS IS A CLUE</h1>
    <input type="file" accept="image/*" capture="camera"/>
  </div>
)


export default CluePage;
