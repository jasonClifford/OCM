import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
require('./style.scss');

import About from "../Routs/About.js";
import Bs1 from "../Routs/Bs1";
import Bs2 from "../Routs/Bs2";
import Home from "../Routs/Home.js";
import Layout from "../Routs/Layout.js";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}></Route>
    <Route path="/Home" component={Home}></Route>
    <Route path="/About" component={About}></Route>



  </Router>,
   app);
