import React from "react";
import { Link } from "react-router";
import AsideHome from "./Pages/Home/Components/AsideHome.js";
import {Motion, spring} from 'react-motion';
import Video from 'react-html5video';

const Home = React.createClass({

  handleMouseDown({pageY: y}) {
    let Start = Math.floor(y);
    this.setState({Start});
    console.log(Start);
    return {Start};

  },

  handleMouseMove({pageX: x, pageY: y}) {
      this.setState({x, y});


    },

    handleTouchMove({touches}) {
      this.handleMouseMove(touches[0]);
    },

    handleTouchStart({touches}) {
      this.handleMouseDown(touches[0]);
    },

    render(){
      return (
        <div className="mainContainer">
          <div className="TempTouchSwipeUp"></div>
          <div className="TempTouchSwipeDwn"></div>
          <div className="TouchSwipe"
            onMouseMove={this.handleMouseMove}
            onMouseDown={this.handleMouseDown}
            onTouchMove={this.handleTouchMove}
            onTouchStart={this.handleTouchStart}>
          </div>
          <Video className="HomeVid" controls autoPlay loop muted
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="./video/Ink.mp4" />
        </Video>
            <AsideHome />
          

      </div>
      );
    }
});
export default Home;
