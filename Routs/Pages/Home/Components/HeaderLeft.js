import React from 'react';
import {Motion, spring} from 'react-motion';
import {browserHistory} from 'react-router';

import Test from "./Test.js";


const HeaderLeft = React.createClass({
  getInitialState() {
    return {open: false};
    return {compact: false};
  },

  handleMouseDown() {
    this.setState({open: !this.state.open});
  },

  handleTouchStart(e) {
    e.preventDefault();
    this.handleMouseDown();
  },
  navaHome(){
    browserHistory.push('/');
    console.log(browserHistory);
  },
  navaHomeTouch(e){
    e.preventDefault();
    this.navaHome();
  },
  navaAbout(){
    browserHistory.push('about');
  },

  navaAboutTouch(e){
    e.preventDefault();
    this.navaAbout();
  },
////////////////////////Hamburger fun Start //////////////////////

hamburgerToggle() {
  //toggle it
  this.setState({compact: !this.state.compact});
},

hamburgerTouchToggle(e) {
  e.preventDefault();
  this.hamburgerToggle();
},
///////////////////////Hamburger Fun End /////////////////////////
  render() {
    return (
      <div>
          <div id="MenuBar1">

            <div id="MenuBtn"
              onMouseDown={()=>{ this.handleMouseDown(); this.hamburgerToggle() }}

              onTouchStart={()=>{ this.hamburgerTouchToggle; this.handleTouchStart }}>


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


          </div>


        <Motion style={{x: spring(this.state.open ? 360 : 0)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`

              <div id="MenuTab" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }}>
              {/*///Begin Inner flyout tab/// */}

                <div id="LogoMain">

                  <img src="./images/FinalOCMLogoINC.svg" alt="Occipital Core Media Inc."></img>
                  <h2> Design | Market Experience </h2>

                  <h3>"We love to create great design concepts and deliver them to the world."</h3>
                </div>
                <div id="NavArea">
                  <nav>
                	<ul id="NavAreaNav">
                    <li><a
                      onMouseDown={()=>{ this.navaHome(); this.handleMouseDown(); this.hamburgerToggle() }}
                      onTouchStart={()=>{ this.navaHomeTouch; this.handleTouchStart }}
                      >Home</a></li>
                    <li><a
                      onMouseDown={()=>{ this.navaAbout(); this.handleMouseDown();this.hamburgerToggle() }}
                      onTouchStart={()=>{ this.navaAboutTouch; this.handleTouchStart }}
                      >About</a></li>

                  </ul>
                  </nav>

                </div>

                <div id="TwitterArea">
                <a id="Twitter" href="https://www.adobe.com"></a>
                </div>




                {/*///End Inner flyout tab/// */}
            </div>

          }
        </Motion>

      </div>
    );
  },
});

export default HeaderLeft;
