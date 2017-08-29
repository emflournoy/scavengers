import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import Style from '../../App.css';

const AllClues = (props) => (
  <div className='allcards'>
    <Link to="/CluePage">
      <button className='cluecard'>{props.num}</button>
    </Link>
  </div>
)


export default AllClues;
