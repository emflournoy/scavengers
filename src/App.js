import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Style from './App.css';
import Login from './components/Login/login';
import HuntPage from './components/Hunt/huntpage';
import CluePage from './components/Clue/one_clue';
import Portal from './components/Portal/portal';



class App extends Component {
  render() {
    return (
      <div>

        <div className='body'>
          <Router>
              <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/Portal' component={Portal}/>
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
