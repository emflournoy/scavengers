import React, { Component } from 'react';


class TopUsers extends Component{
  constructor(){
    super();
    this.state = {
      scores:[],
      dog: "fawkes"
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
    this.setState({
      scores: jsonResponse,
    }, ()=>{console.log(this.state);})
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Top Teams</h2>
        {this.state.scores.map(el=>{
          <li>{el.firstname}</li>
        })}
      </div>
    )
  }
}


export default TopUsers;
