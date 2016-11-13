import React from "react";
import { Link } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
          <div>
            <h1>this is About!!!!!!!!!!!!!!!!
            Tri-tip prosciutto biltong shank landjaeger sausage picanha alcatra short ribs strip steak. Porchetta sirloin flank jowl andouille sausage bresaola prosciutto hamburger chicken. Bresaola cupim turducken pork belly tail pancetta chuck cow swine chicken turkey. Boudin pork salami shank corned beef tenderloin. Beef corned beef filet mignon t-bone pork loin, shoulder ground round landjaeger cow meatloaf andouille tri-tip.</h1>
          </div>

          <div className="TempTouchSwipeUp">
            <Link to="home">Home</Link>

          </div>
          <div className="TempTouchSwipeDwn">
            <Link to="contact">Contact</Link>

          </div>
          <ReactCSSTransitionGroup transitionName="pageSlider"
            transitionEnterTimeout={600} transitionLeaveTimeout={600}>
            {this.cloneChildren()}
          </ReactCSSTransitionGroup>


        </div>
      );
    }
});
export default About;
