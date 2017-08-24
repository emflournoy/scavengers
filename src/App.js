import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Portal from './components/Portal/portal';
import Login from './components/Login/login';
import HuntPage from './components/Hunt/huntpage';
import CluePage from './components/Clue/one_clue';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/Portal' component={Portal}/>
            <Route path='/HuntPage' component={HuntPage}/>
            <Route path='/CluePage' component={CluePage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}



export default App;
