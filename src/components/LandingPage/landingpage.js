import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CurrentHunt from './current_hunt';
import TopUsers from './top_users';
import home_logo from '../../images/home_logo.png';


class LandingPage extends Component{
  constructor(){
    super();
    this.state = {
      userId:0,
      userHunts:[],
      userName:'User'
    }
  }

  async componentWillMount(){
    let userId = window.document.cookie
    let res = await fetch(`https://scavengers-server.herokuapp.com/user/hunts/${userId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }})
    let jsonResponse = await res.json();
    console.log('jsonResponse', jsonResponse);
    this.setState({
      userId: window.document.cookie,
      userHunts : [jsonResponse[0]],
      userName: jsonResponse[1].firstname + ' ' + jsonResponse[1].lastname,
    }, ()=>{console.log(this.state);})
  }


  render() {
    return (
      <div className='body'>
        <div className='nav'>
          <h2>ScaVengerS</h2>
          <Link to='/LandingPage'>
            <img src={home_logo} className="home-logo"></img>
          </Link>
        </div>
        <div className="LPbody">
          <h3 className="helloName"> Hello, {this.state.userName}</h3>
           {this.state.userHunts.map((ele, index)=>(
             <CurrentHunt userid={this.state.userId} data={ele} key={index}/>
           ))}
          <TopUsers/>
        </div>
      </div>
    )
  }
}


export default LandingPage;
