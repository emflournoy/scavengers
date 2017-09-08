import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import home_logo from '../../images/home_logo.png';
import AllClues from './allclues';
import Boulder from '../../images/Boulder.jpg';
import app_logo from '../../images/findit-icon.svg';

class HuntPage extends Component{
  constructor(){
    super();
    this.state={
      AllClues:[]
    }
  }

  async componentWillMount(){
    let huntId = window.location.href.substr(window.location.href.lastIndexOf('/')+1);
    let userID = window.document.cookie;
    let res = await fetch(`http://localhost:3000/hunts/${huntId}/?user=${userID}`, {
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
      hunt_description: jsonResponse[0].name

    },()=>{
      console.log(this.state);
    })
  }

  render(){
    // console.log(this.state.hunt_description)
    return(
      <div className='LPBody'>
        <div className='nav LP'>
          <img className="app-logo" src={app_logo}/>
          <Link to='/LandingPage'>
            <img className="home-logo" src={home_logo}/>
          </Link>
        </div>
        <img className="HPimage" src={Boulder}/>
        <h2 className="hunt-des">{this.state.hunt_description}</h2>
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
