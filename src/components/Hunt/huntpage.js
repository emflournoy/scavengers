import React, { Component } from 'react';

import AllClues from './allclues';
// import Style from '../../App.css';

class HuntPage extends Component{
  constructor(){
    super();
    this.state={
      AllClues:[]
    }
  }

  async componentWillMount(){
    let huntId = window.location.href.substr(window.location.href.lastIndexOf('/')+1);
    let res = await fetch(`http://localhost:3000/hunts/${huntId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    let jsonResponse = await res.json();
    this.setState({
      AllClues: jsonResponse
    },()=>{
      console.log(this.state);
    })
  }

  render(){
    return(
      <div className='body'>
        <div className='nav'>
        </div>
        <h3>these are all the clues.</h3>
        {this.state.AllClues.map((ele, index)=>{
          <AllClues data={ele} key={index}/>
        })}
      </div>
    )
  }
}



export default HuntPage;
