import React, { Component } from 'react';
import {
  // BrowserRouter as Router,
  // Route,
  // Link
} from 'react-router-dom';

// import Style from '../../App.css';
import CurrentHunt from './current_hunt';
import TopUsers from './top_users';

class Portal extends Component{
  constructor(){
    super();
    this.state = {
      userId:0,
      userHunts:[]
    }
  }

  async componentDidMount(){
    let userId = window.document.cookie
    let res = await fetch(`http://localhost:3000/user/hunts/${userId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }})
    let jsonResponse = await res.json();
    this.setState({
      userId: window.document.cookie,
      userHunts : jsonResponse
    })
  }
  render() {
    return (
      <div className='body'>
        <div className='nav'>
        </div>
        <CurrentHunt/>
        <TopUsers/>
      </div>
    )
  }
}


export default Portal;
