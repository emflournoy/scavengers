import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Style from './App.css';
import OAuth from './components/OAuth/oauth';
import HuntPage from './components/Hunt/huntpage';
import CluePage from './components/Clue/one_clue';
import LandingPage from './components/LandingPage/landingpage';



class App extends Component {
  render() {
    return (
      <div>

        <div className='body'>
          <Router>
              <Switch>
                <Route exact path='/' component={OAuth}/>
                <Route path='/LandingPage' component={LandingPage}/>
                <Route path='/HuntPage' component={HuntPage}/>
                <Route path='/CluePage' component={CluePage}/>
              </Switch>
          </Router>
        </div>

      </div>
    )
  }
}



export default App;
