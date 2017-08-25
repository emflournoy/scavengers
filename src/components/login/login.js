import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Style from '../../App.css';
import { FacebookLogin } from 'react-facebook-login-component';


class Login extends React.Component{

  constructor (props, context) {
    super(props, context);
  }

  responseFacebook (response) {
    console.log(response);
    //anything else you want to do(save to localStorage)...
  }

  render () {
    return (
      <div>
        <FacebookLogin socialId='1288710811237257'
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
// window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '1288710811237257',
//       cookie     : true,
//       xfbml      : true,
//       version    : 'v2.8'
//     });
//     FB.AppEvents.logPageView();
//   };
//
//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "//connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));

// const Login = () => (
//   <div className='instagram'>
//     <h3>Sign in with Instagram</h3>
//     <Link to="/Portal">Portal</Link>
//   </div>
// )
//
//
// export default Login;
