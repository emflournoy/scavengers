import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import HuntPage from '../Hunt/huntpage';
import BoulderImg from '../../images/Boulder.jpg';
import TotalPoints from './totalPoints';


const CurrentHunt = ({data}) => (
  <div className='currentHunt'>
    <div className="opacity">
      <div className='curHuntSection'>
        <p>{data.description}</p>
        <div>
          <Link to={{
            pathname: `/HuntPage/${data.id}`
          }}><button className='smbutton'><TotalPoints data={data.total_clues}/></button></Link>
        </div>
      </div>
    </div>
  </div>
)


export default CurrentHunt;
