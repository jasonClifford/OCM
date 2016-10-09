import React from "react";
import {Motion, spring} from 'react-motion';

const Test = React.createClass({
  //set up a boolean flag to track the toggle state
  getInitialState() {
    return {compact: false};
  },

  hamburgerToggle() {
    //toggle it
    this.setState({compact: !this.state.compact});
  },

  hamburgerTouchToggle(e) {
    e.preventDefault();
    this.handleMouseDown();
  },

  render() {
    return (
      <div className="hamburgerBtn" onMouseDown={this.hamburgerToggle}
            onTouchStart={this.hamburgerTouchToggle}>

        {/* We're making the whole thing a motion component, we put our stuff to be animated in here */}
        <Motion style={{
            //designate all of the differences in interpolated values in these ternary operators
            dash: spring(this.state.compact ? -41 : 160),
            translateY: spring(this.state.compact ? 8 : 0),
            translateX: spring(this.state.compact ? -8 : 0),
            rotate: spring(this.state.compact ? 45 : 180)}}>

            {/* make sure the values are passed below*/}
            {({dash, rotate,translateY,translateX}) =>
            <div>

            <svg viewBox="0 0 50 50">
            <title>Hamberger Button</title>


            <polygon
              style={{
                  WebkitTransform: `rotate(${-rotate}deg) translateY( ${translateY}px)
translateX( ${translateX}px)`,
                  transform: `rotate(${-rotate}deg) translateY( ${translateY}px )
translateX( ${translateX}px)`,

              }}
              className="cls-4" points="39.2 14 10.8 14"/>

              <polygon
              style={{
                   WebkitTransform: `rotate(${rotate}deg) translateY( ${-translateY}px)
translateX( ${translateX}px)`,
                  transform: `rotate(${rotate}deg) translateY( ${-translateY}px )
translateX( ${translateX}px)`,

              }}
              className="cls-4" points="39.2 36 10.8 36"/>

            <g style={{
                  strokeDashoffset: `${dash}`
                }}
              className="react-letters" data-name="react motion letters">
              <path
                className="cls-5"  d="M44.5,25H3.4C3.7,13.3,13.2,3.4,25,3.4C37,3.4,46.6,13,46.6,25S37,46.6,25,46.6C13.2,46.6,3.6,36.7,3.4,25"/>

            </g>
          </svg>
          </div>

          }
        </Motion>
      </div>
    );
  },
});

export default Test;
