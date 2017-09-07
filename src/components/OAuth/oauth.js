import React, { Component } from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import logo from '../../images/findIT-logo3.svg';
import facebookLogo from '../../images/facebook-logo.png';

class OAuth extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  async responseFacebook (response) {
    let name = response.name;
    let firstName = name.substr(0, name.indexOf(' '))
    let lastName = name.substr(name.indexOf(' ')+1);
    let userObj = {
      firstname: firstName,
      lastname: lastName,
      accessToken: response.accessToken,
      email: response.email
    }
    console.log(userObj);
    let res = await fetch('https://scavengers-server.herokuapp.com/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },body:JSON.stringify(userObj)
    })
    let jsonResponse = await res.json();
    if(jsonResponse){
      window.document.cookie = jsonResponse.id;
      window.location.href +="LandingPage";
    }
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div className="opacity">
        <div className="splashPage">
          <div className="logo-body">
            <img className="logo-img" src={logo}/>
            <div className="login">
              <img className="facebook-logo" src={facebookLogo}/>
              <FacebookLogin socialId= '1288710811237257'
                             language="en_US"
                             scope="public_profile,email"
                             responseHandler={this.responseFacebook}
                             xfbml={true}
                             fields="id,email,name"
                             version="v2.5"
                             className="facebook-login"
                             buttonText="Login With Facebook"/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default OAuth;
