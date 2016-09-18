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
            </div>



        <Motion style={{x: spring(this.state.open ? 0 : -1900)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`

              <div id="ExpoPane" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} />

          }
        </Motion>

      </div>
    );
  },
});

export default Expose;
