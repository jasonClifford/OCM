import React from 'react';
import {Motion, spring} from 'react-motion';
import {browserHistory} from 'react-router';

import Test from "./Test.js";


const HeaderLeft = React.createClass({
  getInitialState() {
    return {open: false};
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


  render() {
    return (
      <div>
          <div id="MenuBar1">
            <div id="MenuBtn"
              onMouseDown={this.handleMouseDown}
              onTouchStart={this.handleTouchStart}>
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
                      onMouseDown={()=>{ this.navaHome(); this.handleMouseDown() }}
                      onTouchStart={()=>{ this.navaHomeTouch(); this.handleTouchStart() }}
                      >Home</a></li>
                    <li><a
                      onMouseDown={()=>{ this.navaAbout(); this.handleMouseDown() }}
                      onTouchStart={()=>{ this.navaAboutTouch(); this.handleTouchStart() }}
                      >About</a></li>

                  </ul>
                  </nav>

                </div>

                <div id="TwitterArea">
                <a id="Twitter" href="https://www.adobe.com"></a>
                </div>

                <div id="testArea">
                <Test />

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
