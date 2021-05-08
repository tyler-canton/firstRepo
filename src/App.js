import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import UserDetails from './components/users/UserDetails';
import About from './components/pages/About';

import GithubState from './context/github/githubState';
import AlertState from './context/globalAlert/alertState';
 
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const { REACT_APP_GITHUB_CLIENT_ID, REACT_APP_GITHUB_CLIENT_SECRET } = process.env;
const App = () => {

  return (
    <GithubState>
      <AlertState>

        <Router>
          <div className="App">

            <Navbar title='Innovative Academy' name='Ty' />

            <div className="main-container container">
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={UserDetails} />
                <Route component={NotFound} />

              </Switch>

            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}


export default App;