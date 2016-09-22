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
                  <h2> Design | Market </h2>
                  <h2> Experiance</h2>
                  <h3>"We love to create great design concepts and deliver them to the world."</h3>



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
