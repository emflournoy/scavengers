import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

// import Style from '../../App.css';
import HuntPage from '../Hunt/huntpage';
import BoulderImg from '../../images/Boulder.jpg'

const CurrentHunt = ({data}) => (
  <div className='currentHunt'>
    <div>
      <div className='curHuntSection'>
        <div>
          <img className='huntThumbnail' src={BoulderImg}></img>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
      </div>
      <div className='curHuntSection'>
        <div>
          <h5>0 / {data.total_clues} completed</h5>
        </div>
        <div>
          <Link to={{
            pathname: `/HuntPage/${data.id}`
          }}><button className='smbutton'>continue hunt</button></Link>
        </div>
      </div>
    </div>
  </div>
)


export default CurrentHunt;
