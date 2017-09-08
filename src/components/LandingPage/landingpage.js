import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CurrentHunt from './current_hunt';
import TopUsers from './top_users';
import home_logo from '../../images/home_logo.png';
import app_logo from '../../images/findit-icon.svg';


class LandingPage extends Component{
  constructor(){
    super();
    this.state = {
      userId:0,
      userHunts:[],
      userName:'User',
      top_users:[],

    }
  }

  async componentWillMount(){
    let userId = window.document.cookie
    let res = await fetch(`http://localhost:3000/user/hunts/${userId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }})
    let jsonResponse = await res.json();
    let newRes = await fetch(`http://localhost:3000/user`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    let newjsonResponse = await newRes.json();
    console.log(newjsonResponse);
    this.setState({
      userId: window.document.cookie,
      userHunts : jsonResponse[0],
      userName: jsonResponse[1].firstname,
      top_users: newjsonResponse
    }, ()=>{console.log('state', this.state);});
  }


  render() {
    return (
      <div className='LPBody'>
        <div className='nav LP'>
          <img className="app-logo" src={app_logo}/>
          <Link to='/LandingPage'>
            <img className="home-logo" src={home_logo}/>
          </Link>
        </div>
        <div className="LPbody">
          <h3 className="helloName"> Hello, {this.state.userName}</h3>
           {this.state.userHunts.map((ele, index)=>(
             <CurrentHunt userid={this.state.userId} data={ele} key={index}/>
           ))}
           <div className="top-usrs-tbl">
            <h3 className="topuserstext">Leaderboard</h3>
             {this.state.top_users.map((ele, index)=>(
               <TopUsers data={ele} key={index} index={index} />
             ))}
           </div>
        </div>
      </div>
    )
  }
}


export default LandingPage;
