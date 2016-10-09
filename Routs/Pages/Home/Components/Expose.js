import React from 'react';
import {Motion, spring} from 'react-motion';


const Expose = React.createClass({
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
      <div>

            <div id="ExpoBtn"
              onMouseDown={this.handleMouseDown}
              onTouchStart={this.handleTouchStart}>
              <img src="./images/BubbleLogo.gif" width="60" height="60" alt="Expose of Projects"/>
            </div>



        <Motion style={{x: spring(this.state.open ? 0 : -2000)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`

              <div id="ExpoPane" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }}>
              <div><h2>Hi there</h2></div>


            </div>


          }
        </Motion>

      </div>
    );
  },
});

export default Expose;
