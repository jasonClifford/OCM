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
