import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Icon}from 'antd';
import Customers from './Components/Layouts/Customers/index';
import Sidebar from "./Components/CommonComponent/Sidebar";
import Navbar from "./Components/CommonComponent/Navbar";
import Profile from "./Components/Layouts/SingleCustomer";
import Login from "./Components/Layouts/Login";
import Order from './Components/Layouts/Order/index'
import Home from "./Components/Layouts/Home";
import Captains from "./Components/Layouts/Captains";
import NotFound from "./Components/Layouts/NotFound";
import "./App.css";

import Viewcaptain from "./Components/Layouts/SingleCaptains";
// import Captains from "./Components/Layouts/Captains/index"

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Router>
            <Route path="/login" component={Login} exact />
          <Sidebar />
          <Navbar />
          <Switch>
            <Route path="/" render={() => (
              <>
              <Sidebar />
              <Navbar />
              <Home />
              </>
            )} exact/>
            <Route path="/login" component={Login} exact />

            <Route
              exact
              path="/captains/profile/:id"
              render={() => (
                <div>
                  <Sidebar />
                  <Navbar />
                  <Viewcaptain />
                </div>
              )}
            />

            <Route
              exact
              path="/customers/profile/:id"
              render={() => (
                <div>
                  <Profile />
                </div>
              )}
              />
              <Route exact path="/orders" render = {() => (
                <div>
                <Sidebar />
                <Navbar />
                <Order />
              </div>
              )} />
          
            <Route
              exact
              path="/customers"
              render={() => (<Customers />)}
            />
             <Route
              exact
              path="/captains"
              render={() => (<Captains />)}
            />
            <Route
              render={() => (<NotFound />)}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
