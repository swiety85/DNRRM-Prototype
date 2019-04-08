import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from './admin';
import Login from './login';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Admin} />
        <Route path="/admin" component={Admin} />
      </Router>
    );
  }
}

export default App;
