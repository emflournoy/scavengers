import React, { Component } from 'react';

// import Style from '../../App.css';
import { FacebookLogin } from 'react-facebook-login-component';
// import REACT_APP_FB from '../../.env';

class Login extends React.Component{

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
    let res = await fetch('https://git.heroku.com/scavengerz.git/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },body:JSON.stringify(userObj)
    })
    let jsonResponse = await res.json();
    if(jsonResponse){
      window.document.cookie = jsonResponse.id;
      window.location.href +="Portal";
    }
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div>
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
    );
  }

}

export default Login;
