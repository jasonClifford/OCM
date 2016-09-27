import React from "react";

import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory } from "react-router";
require('./style.scss');

import About from "../Routs/About.js";
import Home from "../Routs/Home.js";
import Layout from "../Routs/Layout.js";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} key={1}></IndexRoute>
      <Route path="about" name="about" component={About} key={2}></Route>

    </Route>


  </Router>,
app);
