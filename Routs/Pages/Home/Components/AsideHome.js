import React from 'react';
import {Motion, spring} from 'react-motion';





const AsideHome = React.createClass({
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

  render() {
    return (
      <div id="Aside">


            <div id="HomeAsideBtn"
              onMouseDown={()=>{ this.handleMouseDown()}}

              onTouchStart={()=>{ this.handleTouchStart }}>

              <div id="LearnMoreArrow">
                Learn More
                <div id="topArrow"></div>
                <div id="btmArrow"></div>
              </div>
            </div>


        <Motion style={{x: spring(this.state.open ? 0 : 1900)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`

              <div id="HomeAsidePane" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }}>
              {/*///Begin Inner flyout tab/// */}

                <div id="**Some Inner Stuff to be renamed**">


                </div>
                <div id="CloseBtn"
                onMouseDown={()=>{ this.handleMouseDown()}}

                onTouchStart={()=>{ this.handleTouchStart }}>

                <svg version="1.1" id="Layer_1" viewBox="0 0 60 60">

              <style type="text/css">
              	{`.st0{fill:none;stroke:#ffffff;
                  stroke-width:1.152;
                  stroke-linecap:round;
                  stroke-miterlimit:10;}`}
              </style>
              <circle className="st0" cx="30" cy="30" r="27.7"/>
              <line className="st0" x1="11.9" y1="48.1" x2="48.1" y2="11.9"/>
              <line className="st0" x1="11.9" y1="11.9" x2="48.1" y2="48.1"/>
              </svg>

                </div>




                {/*///End Inner flyout tab/// */}
              </div>

          }
        </Motion>

      </div>
    );
  },
});

export default AsideHome;
