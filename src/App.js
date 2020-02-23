import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/header";
import Hcon from "./components/hcon";
import SHeader from "./components/sheader"
import BS from "./components/body"
import { HashRouter ,Route , Redirect ,Switch , Link , withRouter } from 'react-router-dom';
import HomePage from "./Pages/home"
import Search from "./Pages/search"
import Get from "./Pages/get"
import About from "./Pages/about"


class App extends React.Component{

  render(){
    return(
     
    <React.Fragment>
      <HashRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={props => <HomePage {...props} />}
          />
          <Route
            path="/search"
            exact
            render={props => <Search {...props} />}
          />
          <Route
            path="/all"
            exact
            render={props => <Get {...props} />}
          />
          <Route
            path="/about"
            exact
            render={props => <About {...props} />}
          />
        </Switch>
        </HashRouter>
      </React.Fragment>
    )
  }
}
  

export default App;
