import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import Style from '../../App.css';

const AllClues = () => (
  <div className='allcards'>
    <Link to="/CluePage">
      <button className='cluecard'>1</button>
    </Link>
  </div>
)


export default AllClues;
