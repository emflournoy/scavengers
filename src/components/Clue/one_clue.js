import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const CluePage = () => (
  <div>
    <h1>THIS IS A CLUE</h1>
    <input type="file" accept="image/*" capture="camera"/>
  </div>
)


export default CluePage;
