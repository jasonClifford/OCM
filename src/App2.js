import React from "react";
import ReactDOM from "react-dom";
import Layout from "../Routs/Pages/Home/Layout/Layout.js";
import { Router, Route, hashHistory } from "react-router";
require('./style.scss');


const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
