import React, { Component } from 'react';


class TopUsers extends Component{
  constructor(){
    super();
    this.state = {
      topUsers:[],
    }
  }

  async componentWillMount(){
    let res = await fetch(`https://scavengers-server.herokuapp.com/user/`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }})
    let jsonResponse = await res.json();
    this.setState({
      topUsers: jsonResponse,
    }, ()=>{console.log(this.state);})
  }
  render() {
    return (
      <div>
        <h2>Top Teams</h2>
        <h3>{topUsers}</h3>
        <ul>
          <li>1. Team Skhunts</li>
          <li>2. Team meaT</li>
          <li>3. Team Cheese</li>
          <li>4. Team Poop</li>
        </ul>
      </div>
    )
  }
}


export default TopUsers;
