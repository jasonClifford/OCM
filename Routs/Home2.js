import React from "react";
import { Link } from "react-router";
import AsideHome from "./Pages/Home/Components/AsideHome.js";
import {Motion, spring} from 'react-motion';
import Video from 'react-html5video';

const Home = React.createClass({


  handleMouseMove({pageX: x, pageY: y}) {
      //this.setState({x, y});
      var Start= y;
      var End= y;
      var threshold = 200;
      console.log(y);
    },

    handleTouchMove({touches}) {
      this.handleMouseMove(touches[0]);
    },



    render(){
      return (
        <div className="HomeMainWindow">
          <div className="TouchSwipe"
            onMouseMove={this.handleMouseMove}
            onTouchMove={this.handleTouchMove}>
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
