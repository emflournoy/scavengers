import React, { Component } from 'react';


class totalPoints extends Component {
  constructor(){
    super();
    this.state = {
      userId:0,
      total_clues: 0,
      total_points: 0,
    }
  }
  getPoints(arr) {
    let counter = 0;
    for(let i = 0; i<arr.length; i++){
      if(arr[i].completed === true){
        counter++;
      }
    }
    return counter;
  }
  async componentWillMount(){
    let userId = window.document.cookie
    let res = await fetch(`http://localhost:3000/hunts/userhuntclue/${userId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }})
    let jsonResponse = await res.json();

    this.setState({
      userId: window.document.cookie,
      total_clues: this.props.data,
      total_points:this.getPoints(jsonResponse)
    }, ()=>{console.log(jsonResponse, this.state);})
  }
  render(){
    return (
      <div>
      <h5 className="totpts">{this.state.total_points} / {this.state.total_clues} completed</h5>
      </div>
  )}
}


export default totalPoints;
