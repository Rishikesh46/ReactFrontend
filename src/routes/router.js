import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Index from "../pages/Index";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";


import Header from "../components/Header";
import Footer from "../components/Footer";

class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
export default Router;
