import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Style from '../../App.css';
import HuntPage from '../Hunt/huntpage';
import BoulderImg from '../../images/Boulder.jpg'

const CurrentHunt = () => (
  <div className='currentHunt'>
    <div>
      <div className='curHuntSection'>
        <div>
          <img className='huntThumbnail' src={BoulderImg}></img>
        </div>
        <div>
          <p>Get to know Boulder</p>
        </div>
      </div>
      <div className='curHuntSection'>
        <div>
          <h5>2/15 completed</h5>
        </div>
        <div>
          <Link to='/HuntPage'><button className='smbutton'>continue hunt</button></Link>
        </div>
      </div>
    </div>
  </div>
)


export default CurrentHunt;
