import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router"
import { FrontPage } from "./Pages/Front/FrontPage"

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    );
  }
}

export default App;
