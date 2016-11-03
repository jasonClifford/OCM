import React from "react";
import { Link } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


import HeaderLeft from "./Pages/Layout/Components/HeaderLeft.js";
import Expose from "./Pages/Layout/Components/Expose.js";



const Layout = React.createClass({

    render() {
      var path = this.props.location.pathname;
      var segment = path.split("/")[1] || 'root';
      console.log(segment);
      return (
        <div>
          <div>
            <HeaderLeft />
          </div>
          <div>
            <Expose />
          </div>

          <div className="mainContainer">
            <ReactCSSTransitionGroup transitionName={segment === "root" ? "reversePageSwap" : "pageSwap"}
            transitionEnterTimeout={600}
             transitionLeaveTimeout={600}>
            {React.cloneElement(this.props.children, { key: path })}
            </ReactCSSTransitionGroup>

          </div>
        </div>
      );
    },
});
export default Layout;
