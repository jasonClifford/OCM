import React from 'react';
import {Motion, spring} from 'react-motion';

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

  render() {
    return (
      <div>
          <div id="MenuBar1">
          <div id="MenuBtn"
            onMouseDown={this.handleMouseDown}
            onTouchStart={this.handleTouchStart}>
          </div>
        </div>

        <Motion style={{x: spring(this.state.open ? 410 : 0)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`

              <div id="MenuTab" style={{
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} />

          }
        </Motion>
      </div>
    );
  },
});

export default HeaderLeft;
