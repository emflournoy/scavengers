import React, { Component } from 'react';

// import Style from '../../App.css';
import { FacebookLogin } from 'react-facebook-login-component';
// import REACT_APP_FB from '../../.env';

class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseFacebook (response) {
    console.log(response);
    if(response.accessToken){
      window.document.cookie = response.accessToken;
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
