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
    let userId = window.document.cookie
    let res = await fetch(`http://localhost:3000/hunts/${huntId}/?user=${userId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    let jsonResponse = await res.json();
    console.log(jsonResponse);
    this.setState({
      AllClues: jsonResponse,
      hunt_description: jsonResponse[0].description
    },()=>{
      console.log(this.state);
    })
  }

  render(){
    console.log(this.state.hunt_description)
    return(
      <div className='body'>
        <div className='nav'>
        </div>
        <h3>{this.state.hunt_description}</h3>
          <div className='allClueCards'>
          {this.state.AllClues.map((ele, index)=>(
            <AllClues data={ele} key={index} num={index+1}/>
          ))}
        </div>
      </div>
    )
  }
}



export default HuntPage;
