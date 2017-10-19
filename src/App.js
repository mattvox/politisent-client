import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import logo from './logo.svg';
import './App.css';

import Tweets from './components/Tweets'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Tweets} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
