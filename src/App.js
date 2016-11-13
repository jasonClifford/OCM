import React from "react";

import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory } from "react-router";
require('./style.scss');

import About from "../Routs/About.js";
import Contact from "../Routs/Contact.js";
import Home from "../Routs/Home.js";
import Layout from "../Routs/Layout.js";
import Title from "../Routs/Title.js";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Title} />
      <Route path="home" component={Home}></Route>
      <Route path="about" component={About}></Route>
      <Route path="contact" component={Contact}></Route>

    </Route>


  </Router>,
app);
