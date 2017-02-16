import React from "react";
import { Link } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Date from "./Pages/About/Components/Date.js";


const About = React.createClass({
  cloneChildren: function () {
    var path = this.props.location.pathname;
    if (this.props.children) {
      return React.cloneElement(this.props.children, { key: path })
    }
  },
    render(){
      return (
        <div className="mainContainer">


          <div className="LinkPrev">
            <Link to="home">Home</Link>

          </div>
          <div className="LinkNext">
            <Link to="contact">Contact</Link>

          </div>
          <ReactCSSTransitionGroup transitionName="pageSlider"
            transitionEnterTimeout={600} transitionLeaveTimeout={600}>
            {this.cloneChildren()}
          </ReactCSSTransitionGroup>

          <Date />
        </div>
      );
    }
});
export default About;
