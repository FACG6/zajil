import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Icon } from 'antd'
import Customers from './Components/Layouts/Customers'
import Sidebar from "./Components/CommonComponent/Sidebar";
import Header from "./Components/CommonComponent/Header";
import Navbar from "./Components/CommonComponent/Navbar";
import Login from "./Components/Layouts/Login";
import Home from "./Components/Layouts/Home";
<<<<<<< HEAD
import Captains from "./Components/Layouts/Captains"
=======
import AddCaptain from "./Components/Layouts/Captains/AddCaptain"

>>>>>>> 029637fa26e73dd3f09ca8f334167a61c398ac47

import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" component={Login} exact />
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <Sidebar />
                  <Navbar />
                  <Header title="الرئيسية" Icon={<Icon type="bank" />} />
                  <Home />
                </div>
              )}
            />
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
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
