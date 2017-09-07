import React, { Component } from 'react';


class TopUsers extends Component{
  constructor(){
    super();
    this.state = {
      high1: '',
      high2: '',
      high3: '',
      pts1: 0,
      pts2: 0,
      pts3: 0,
    }
  }

  async componentWillMount(){
    let res = await fetch(`http://localhost:3000/user`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    let jsonResponse = await res.json();
    console.log(Array.isArray(jsonResponse))
    console.log(jsonResponse)
    this.setState({
      high1: jsonResponse[jsonResponse.length-1].firstname,
      high2: jsonResponse[jsonResponse.length-2].firstname,
      high3: jsonResponse[jsonResponse.length-3].firstname,
      pts1: jsonResponse[jsonResponse.length-1].total_points,
      pts2: jsonResponse[jsonResponse.length-2].total_points,
      pts3: jsonResponse[jsonResponse.length-3].total_points
    }, ()=>{console.log(this.state);})
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <div>
        <h2>Top Teams</h2>
          <ul>
            <li>1. <span>{this.state.pts1} pts</span> {this.state.high1} </li>
            <li>2. <span>{this.state.pts2} pts</span> {this.state.high2} </li>
            <li>3. <span>{this.state.pts3} pts</span> {this.state.high3} </li>
          </ul>
        </div>
      </div>
    )
  }
}


export default TopUsers;
