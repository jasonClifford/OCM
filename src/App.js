import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
require('./style.scss');

import Layout from "../Routs/Layout.js";
import About from "../Routs/About.js";
import Bs1 from "../Routs/Bs1";
import Bs2 from "../Routs/Bs2";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}></Route>
    <IndexRoute component={About}></IndexRoute>
    <Route path="Bs1" component={Bs1}></Route>
    <Route path="Bs2" component={Bs2}></Route>
  </Router>,
   app);
