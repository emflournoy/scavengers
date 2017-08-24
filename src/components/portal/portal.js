import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import CurrentHunt from './current_hunt';
import TopUsers from './top_users';

class Portal extends Component{
  render() {
    return (
     <div>
       <CurrentHunt/>
       <TopUsers/>
     </div>
    )
  }
}


export default Portal;
