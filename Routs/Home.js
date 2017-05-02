import React from "react";
import { Link } from "react-router";
import AsideHome from "./Pages/Home/Components/AsideHome.js";
import {Motion, spring} from 'react-motion';
import Video from 'react-html5video';

const Home = React.createClass({

    render(){
      return (
        <div className="mainContainer">

          <div className="LinkNext">
            <Link to="about">

            <svg id="LinkDwnLgo" width="50px" height="50px" viewBox="0 0 50 50">

          <g>
          	<path class="st0" d="M25,1.6C12.1,1.6,1.6,12.1,1.6,25S12.1,48.4,25,48.4S48.4,37.9,48.4,25S37.9,1.6,25,1.6z M25,46.1
          		C13.3,46.1,3.9,36.7,3.9,25S13.3,3.9,25,3.9S46.1,13.3,46.1,25S36.7,46.1,25,46.1z"/>
          	<path class="st0" d="M22.1,32.4c0.3,0.5,0.9,0.7,0.9,1.3c-0.2,0.1-0.4,0.1-0.6-0.1c-0.1-0.1-0.2-0.1-0.2-0.1
          		c-0.7,0.2-1.2-0.2-1.8-0.6c-0.3-0.2-0.4-0.4-0.5-0.7c0-0.1-0.2-0.2-0.3-0.2c-0.4,0-0.5-0.2-0.3-0.5c0.2-0.4,0.2-0.7,0-1.1
          		c-0.1-0.2,0-0.7,0.1-1c0,0,0,0,0.1,0c0.5-0.1,0.9-0.2,1.4-0.3c0.1,0,0.2,0,0.2-0.1c0.1,0,0.1-0.1,0.2-0.2c-0.1,0-0.1-0.1-0.2-0.1
          		c-0.3,0-0.6,0-0.9,0.1c-0.4,0.1-0.9,0.1-1.3,0.2c-0.1,0-0.2-0.2-0.3-0.3c0-0.1,0-0.3,0-0.3c0.1-0.1,0.3-0.2,0.5-0.2
          		c0.3,0,0.5-0.1,0.6-0.4c0.1-0.3,0.3-0.6,0.4-0.9c0.1-0.3,0-0.4-0.3-0.5c-0.2,0-0.5-0.1-0.7-0.1c-0.2-0.1-0.4-0.3-0.3-0.5
          		c0.2-0.4,0-0.7-0.4-0.9c0.1,0,0.1-0.1,0.2-0.1c0.2-0.1,0.3-0.3,0.2-0.5c-0.1-0.2-0.1-0.5-0.4-0.5c-0.1,0-0.3-0.1-0.4-0.1
          		c0.1-0.1,0.2-0.1,0.3-0.2c0.1,0,0.2-0.1,0.2-0.1c0.2-0.2,0.4-0.2,0.6,0.1c0.1,0.1,0.4,0.1,0.6,0.2c0.1,0,0.1,0,0.2,0
          		c0.3,0.2,0.5,0.2,0.8,0.1c0.1,0,0.3,0.2,0.4,0.3c0.2-0.1,0.1-0.3-0.1-1c0.3,0.2,0.5,0.7,0.4,1.1c-0.1,0.2-0.3,0.2-0.4,0.2
          		c-0.3-0.2-0.3,0.1-0.4,0.2c-0.1,0.6-0.2,1.1-0.3,1.7c0,0.1,0.1,0.2,0.1,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.2,0.2,0.3,0.3,0.2,0.6
          		c0,0.1,0,0.2,0,0.3c0,0,0.1,0.1,0.2,0.1c0,0,0.1-0.1,0.1-0.1c0.1-0.2,0.1-0.5,0.2-0.7c0-0.1,0.1-0.2,0.2-0.2
          		c0.1,0.1,0.1,0.1,0.2,0.2c0,0,0,0,0.1,0.1c0.1-0.1,0.1-0.2,0.2-0.4c0.1,0.3,0.1,0.5,0.2,0.7c0.2,0.7,0.5,1,1.2,1c0.4,0,0.7,0,1.1,0
          		c0.1,0,0.2,0,0.2-0.1c0.3-0.1,0.6-0.3,0.9-0.4c0.3-0.1,0.4-0.3,0.2-0.6C26,27,26,27,26.1,27.1c0.4,0.3,0.9,0.3,1.2-0.1
          		c0.2-0.2,0.4-0.4,0.5-0.7C28,26.2,28,26,27.8,26c-0.2-0.1-0.5-0.3-0.7-0.4c0.1-0.1,0.3-0.1,0.3-0.2c0.1-0.6,0.5-0.8,0.9-1
          		c0.1-0.1,0.2-0.1,0.2-0.3c-0.1-0.2-0.2-0.2-0.3-0.1c-0.4,0.1-0.9,0.3-1.4,0c0.3-0.3,0.5-0.7,0.9-0.8c0.2-0.1,0.4-0.1,0.6-0.2
          		c0.5-0.2,0.9-0.5,1.4-0.8c0.1,0,0.2,0,0.2,0.1c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1-0.1,0.1-0.2,0.2c-0.3,0.3-0.6,0.7-1,1
          		c-0.1,0.1-0.2,0.1-0.3,0.2c0.2,0.2,0.6,0.2,0.7-0.1c0.1-0.4,0.4-0.5,0.7-0.6c0.4-0.2,0.7-0.3,1.1-0.4c0.3-0.1,0.5-0.1,0.8-0.1
          		c0.1,0,0.2-0.1,0.3-0.1c0.4-0.3,0.7-0.5,1.2-0.5c0.2,0,0.5,0,0.7-0.1c0.1,0,0.1-0.1,0.2-0.1c0-0.1-0.1-0.1-0.1-0.2
          		c0,0-0.1-0.1-0.1-0.1c-0.3-0.3-0.3-0.6,0-0.8c0.2-0.2,0.5-0.3,0.8-0.4c0.4-0.1,0.4-0.2,0.2-0.6c-0.1-0.1-0.1-0.3-0.2-0.4
          		c-0.3-0.2-0.4-0.5-0.8-0.5c0,0-0.1,0-0.1-0.1c-0.1-0.1-0.1-0.8,0-0.9c0.6-0.5,1.2-1.1,1.8-1.6c0,0,0.1-0.1,0.1-0.1
          		c0-0.1,0.1-0.3,0.1-0.4c0-0.1-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.2,0.1c-0.2-0.3-0.1-0.3,0.2-0.6c-0.5-0.2-1-0.5-1.5-0.7
          		c-0.4-0.1-0.8-0.2-1.1-0.3c-0.2,0-0.3-0.1-0.5-0.2c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.1,0.2-0.1,0.3c-0.4-0.3-0.8-0.6-1.2-1
          		c-0.2-0.2-0.4-0.4-0.6-0.6c-0.1-0.1-0.3-0.1-0.4-0.1c0.2-0.4,0.6-0.2,0.9-0.2c0,0,0-0.1,0-0.1c-0.5-0.1-1.1-0.2-1.6-0.3
          		c0,0,0,0.1-0.1,0.1c0.2,0.1,0.3,0.3,0.5,0.4c-0.1,0.1-0.2,0.3-0.4,0.4c-0.2-0.1-0.3-0.2-0.5-0.4c-0.1-0.1-0.2-0.1-0.3-0.2
          		c-0.6-0.3-0.7-0.2-0.9,0.5c0,0.1-0.1,0.3-0.1,0.4c0,0-0.1,0-0.1,0c0-0.2,0-0.5,0-0.7c-0.6-0.2-1.3-0.2-1.8-0.5c0,0,0-0.1,0-0.1
          		c0.2,0,0.4,0,0.6,0c0.2,0,0.4,0.1,0.6,0.1c0.1,0,0.2,0,0.4-0.1c-0.1-0.2-0.1-0.4-0.2-0.5c-0.2-0.1-0.5-0.2-0.8-0.2
          		c-0.3-0.1-0.6-0.1-0.9-0.2c-0.1,0-0.1-0.1-0.2-0.1c0.4,0.1,0.8,0.2,1.2,0.2c0.2,0,0.3-0.1,0.5-0.1c0.1,0,0.1,0,0.2,0
          		c0.4,0.1,0.7,0.1,1.1,0.2c0.1,0,0.2,0.1,0.2,0.2c0,0,0,0,0,0.1c-0.2,0-0.4-0.1-0.6-0.1c0.1,0.3,0.7,0.2,0.4,0.7
          		c0.3,0.1,0.6,0.2,0.8-0.1c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0,0.3,0c0.1,0,0.2-0.1,0.2-0.2c-0.1-0.1-0.1-0.2-0.2-0.2
          		c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c0.1-0.1,0.2-0.2,0.3-0.2c0.1,0,0.1-0.1,0.2-0.1c-0.5-0.5-1.1-0.4-1.7-0.3
          		c-0.1,0-0.2,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c-0.4,0-0.8,0.1-1.1,0.1c0.2-0.1,0.3-0.1,0.5-0.2c-0.2-0.1-0.5-0.2-0.7-0.4
          		c0,0,0-0.1,0-0.1c0.1,0,0.3,0,0.4,0c0.5,0.1,1,0.2,1.5,0.1c0.1,0,0.2-0.1,0.2,0.1c0.1,0,0.2,0,0.2,0c0.3-0.2,0.6-0.2,0.9-0.1
          		c0.4,0.1,0.7,0.2,1.1,0.3c0.1,0,0.2,0.1,0.2,0.2c0.2,0.4,0.5,0.3,0.8,0.3c0.3,0,0.5-0.1,0.8-0.1c0.6-0.1,1.1,0,1.6,0.4
          		c0.1,0.1,0.2,0.2,0.3,0.3c0.5,0.5,1.1,1,1.7,1.3c0.8,0.4,1.4,1,2.1,1.5c0.3,0.2,0.7,0.5,1,0.8c0.6,0.6,1,1.3,1,2.3
          		c0,0.3,0.1,0.6,0.1,1c-0.2-0.3-0.3-0.5-0.4-0.7c-0.1-0.2-0.3-0.4-0.4-0.6c-0.3-0.3-0.6-0.5-0.9-0.8c0,0.1-0.1,0.4-0.2,0.5
          		c-0.1,0.1-0.4,0-0.7,0c-0.1,0.2,0.1,0.7-0.5,0.7c0.2,0.2,0.4,0.2,0.5,0.4c0.2,0.2,0.5,0.5,0.7,0.7c0.2,0.1,0.4,0.2,0.6,0.3
          		c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.3,0.7,0.2,0.9-0.3c0.4,0.4,0.8,0.7,1.1,1c-0.2,0-0.4,0-0.6,0.1c-0.1,0-0.2,0.1-0.2,0.1
          		c0,0.4-0.4,0.5-0.7,0.6c-0.2,0.1-0.4,0.2-0.2,0.5c0,0,0,0.1,0,0.2c-0.1,0.2,0.1,0.6,0.3,0.7c0.3,0.1,0.5,0.3,0.6,0.6
          		c0,0.1,0.1,0.1,0.2,0.1c0.2,0.1,0.4,0.1,0.6,0.1c0.1,0,0.3-0.1,0.5-0.2c-0.1,0.4-0.2,0.8-0.3,1.2c-0.1,0.3-0.2,0.6-0.3,0.8
          		c-0.1,0.3-0.3,0.6-0.5,0.9c-0.7,0.6-1.2,1.4-1.8,2.1c-0.3,0.3-0.7,0.7-1,1c-0.6,0.5-1.2,0.9-1.8,1.3c-0.3,0.2-0.5,0.3-0.8,0.4
          		c-0.5,0.2-0.9,0.5-1.4,0.7c-0.7,0.2-1.5,0.4-2.3,0.6c-0.2,0.1-0.4,0.2-0.7,0.2c-0.5,0.1-1,0.1-1.4,0.2c-0.5,0.1-0.9,0.3-1.4,0.4
          		c-0.4,0.1-0.9,0.2-1.3,0.3c-0.2,0-0.3,0-0.4-0.2c0-0.1-0.2-0.2-0.3-0.2c-0.1-0.1-0.3-0.1-0.4-0.1c-0.2-0.1-0.4-0.2-0.4-0.4
          		c0-0.2-0.1-0.4-0.4-0.4c-0.9,0-1.5-0.6-2.2-1.1c-0.1-0.1-0.3-0.2-0.4-0.3c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2,0.2-0.2,0.3,0.1,0.5
          		c0.5,0.3,1,0.7,1.5,1c0.1,0.1,0.2,0.2,0.2,0.3c0,0-0.1,0.1-0.2,0.2c-0.2,0.1-0.4,0.1-0.6,0.2c-0.2,0.1-0.2,0.2-0.1,0.3
          		c0,0,0.1,0.1,0.1,0.1c0,0.1,0,0.1,0,0.2c0,0-0.1,0.1-0.2,0C22.3,32.5,22.2,32.4,22.1,32.4z M37.3,21.8c0,0,0.1,0,0.1,0
          		c0.2-0.4,0.3-0.9,0.5-1.3c0,0,0.1,0,0.1,0c0,0.1,0.1,0.3,0.1,0.4c-0.2,0.7-0.4,1.3-1,1.7c-0.1,0.1-0.2,0.2-0.2,0.4
          		c-0.1,0.2,0.1,0.3,0.2,0.3c0.1,0,0.2-0.1,0.3-0.2c0.1-0.8,0.6-1.3,1-2c0.2-0.3,0.1-0.6-0.2-0.7c-0.3-0.2-0.5-0.2-0.9-0.1
          		C37.5,20.8,37.1,21.3,37.3,21.8z M36,19.5c0.3-0.4,0.4-0.4,1-0.5c0.1,0,0.2-0.1,0.2-0.1c0-0.2-0.1-0.4-0.1-0.6
          		c-0.1,0-0.3,0.1-0.4,0.1c-0.1,0-0.1,0.1-0.1,0.1c-0.2,0.2-0.4,0.5-0.6,0.8c-0.1,0.2-0.2,0.4-0.3,0.7c0,0.1,0.1,0.2,0.2,0.2
          		c0.2,0,0.3,0,0.5,0c0.2-0.1,0.4-0.3,0.6,0c0.2-0.5,0.2-0.5-0.3-0.6C36.4,19.6,36.2,19.6,36,19.5z M36.6,13.9
          		C36.6,13.8,36.7,13.8,36.6,13.9c-0.2-0.3-0.5-0.5-0.9-0.7c-0.4-0.3-0.9-0.6-1.4-0.6c-0.3,0-0.4,0-0.4,0.3c0,0.1,0.1,0.2,0.2,0.3
          		c0.2,0.1,0.4,0.2,0.6,0.3c0.2,0.1,0.4,0.1,0.6,0c0.1,0,0.2,0,0.3,0C36,13.5,36.3,13.7,36.6,13.9z M39.8,19.6
          		c-0.1-0.1-0.1-0.2-0.1-0.2c-0.3-0.1-0.7-0.1-1-0.2c0,0-0.1,0.2-0.1,0.2c0.1,0.3,0.2,0.7,0.1,1c0,0,0.1,0.2,0.1,0.2
          		c0.3,0,0.5-0.1,0.5-0.4C39.3,19.9,39.4,19.6,39.8,19.6z M24,30.8c0-0.1,0-0.1,0-0.1c-0.5-0.6-1.1-1.1-1.6-1.7
          		c-0.1-0.1-0.2-0.1-0.4-0.2c0,0.1,0.1,0.3,0.1,0.4c0,0,0,0.1,0.1,0.1c0.5,0.5,1,0.9,1.5,1.4C23.7,30.7,23.8,30.7,24,30.8z
          		 M33.2,11.6c-0.2-0.6-1.1-0.6-1.7-0.1c0.3,0.1,0.5,0.2,0.7,0.3C32.5,11.7,32.8,11.6,33.2,11.6z M31.4,23.9c0.3,0.3,0.6,0.5,1,0.3
          		c0.2-0.1,0.5-0.1,0.8-0.2c0.2-0.1,0.3-0.2,0.3-0.4c-0.1,0-0.1,0-0.1,0c-0.4,0.1-0.9,0.3-1.3,0.2C31.7,23.8,31.6,23.9,31.4,23.9z
          		 M38.8,21.1c0,0.1,0,0.1,0,0.2c0,0.3,0,0.5-0.2,0.8c-0.2,0.3-0.4,0.6-0.5,0.9c-0.1,0.2-0.1,0.4-0.2,0.6c0.1,0,0.1,0,0.2,0.1
          		c0.1-0.2,0.3-0.4,0.4-0.7c0.2-0.5,0.4-0.9,0.6-1.4C38.9,21.3,38.9,21.2,38.8,21.1z M38.1,14.9c0,0.3,0,0.5,0.3,0.5
          		c0.2,0,0.2,0.1,0.2,0.3c0,0.3,0.1,0.3,0.3,0.2c0-0.2-0.1-0.3,0-0.4c0-0.2,0-0.3-0.2-0.4C38.5,15.1,38.3,15,38.1,14.9z M36.6,18
          		c0,0,0-0.1-0.1-0.1c0,0-0.1,0-0.2,0c-0.2,0.2-0.4,0.3-0.7,0.2c-0.1,0-0.2,0.1-0.2,0.2c0,0.1,0,0.2,0,0.3c0.1,0,0.2,0,0.3-0.1
          		c0.2-0.1,0.4-0.2,0.6-0.2C36.6,18.3,36.6,18.2,36.6,18z M36.5,14.3c-0.4-0.1-0.7-0.1-1-0.2c0,0,0,0.1,0,0.1
          		c0.1,0.1,0.1,0.1,0.2,0.2C36,14.8,36,14.8,36.5,14.3z M36.9,22.7c-0.1,0-0.3,0-0.4,0c-0.1,0-0.2,0.1-0.2,0.1
          		c-0.1,0.1-0.1,0.2-0.1,0.4c0.1,0,0.2,0.1,0.3,0C36.8,23.1,36.8,22.9,36.9,22.7z M33.7,12.9c0-0.3-0.2-0.5-0.5-0.6
          		c-0.1,0-0.2,0-0.3,0c0.1,0.1,0.1,0.2,0.2,0.3C33.3,12.7,33.5,12.8,33.7,12.9z M29.6,24c-0.1,0.1-0.2,0.2-0.3,0.3
          		c0.2,0.1,0.3,0.2,0.4,0.3c0.1-0.1,0.2-0.2,0.3-0.3C29.9,24.2,29.7,24.1,29.6,24z M38.3,24.1C38.3,24.1,38.3,24,38.3,24.1
          		c-0.2-0.1-0.4-0.2-0.6-0.2c-0.1,0-0.2,0.1-0.3,0.1c0.1,0.1,0.2,0.1,0.3,0.1C37.9,24.1,38.1,24.1,38.3,24.1z M33.4,13.5
          		c0,0,0-0.1,0.1-0.1c-0.2-0.1-0.4-0.2-0.6-0.3c0,0,0,0.1-0.1,0.1C32.9,13.4,33.1,13.6,33.4,13.5z M37.3,15.5c0.1,0,0.1,0,0.2,0.1
          		c0-0.1,0.1-0.3,0.1-0.4c0,0-0.1,0-0.2-0.1C37.4,15.3,37.3,15.4,37.3,15.5z"/>
          	<path class="st0" d="M14.4,15.1c-0.1,0.4-0.3,0.7-0.4,1.1c0,0,0,0.1,0.1,0.2c0.1-0.2,0.2-0.3,0.3-0.5c0,0,0.1,0.1,0.1,0.1
          		c0,0.3-0.1,0.5-0.2,0.7c0,0.1,0,0.2,0,0.3c0.1,0,0.2,0,0.3,0c0,0,0,0,0,0c-0.2,0.1-0.4,0.3-0.7,0.4c-0.8,0.2-1.1,0.8-1.3,1.5
          		c-0.1,0.2,0,0.5,0,0.7c0,0.2,0.1,0.3-0.2,0.4c0-0.3-0.1-0.6-0.1-0.9c0,0-0.1,0-0.1,0c-0.1,0.2-0.2,0.4-0.3,0.6
          		c-0.1,0.4-0.3,0.7-0.7,0.8c-0.2,0-0.3,0.2-0.4,0.3c-0.2,0.3-0.4,0.7-0.6,1c-0.1-0.4-0.2-0.8-0.3-1.2c0,0,0,0-0.1,0
          		c-0.1,0.3-0.3,0.7-0.5,1c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0,0.1-0.1,0.1c-0.3,0.5-0.5,1-0.4,1.6c0.1,0.4,0,0.8,0,1.2
          		c0,0.1,0,0.2,0,0.3c0.5-0.1,0.6-0.5,0.6-0.9c0,0,0.1,0,0.1,0c0,0.1,0.1,0.2,0.1,0.4c0,0.2-0.1,0.5-0.1,0.7c0,0.3-0.1,0.4-0.4,0.3
          		c-0.1,0-0.3,0.1-0.5,0.1c-0.1-0.3-0.3-0.5,0.1-0.8c-0.3-0.1-0.3-0.2-0.2-0.4c0.2-0.3,0.2-0.6,0.1-0.9c-0.1-0.7,0-1.4,0.5-2.1
          		c0.4-0.5,0.6-1.1,0.6-1.7c0-0.4,0.3-0.8,0.6-1.1c0.2-0.2,0.3-0.4,0.4-0.7c0.1-0.5,0.2-0.9,0.6-1.2c0.2-0.2,0.4-0.4,0.6-0.5
          		c0,0,0.1-0.1,0.1-0.1c-0.1-0.3,0.2-0.6,0.2-0.9c0-0.1,0.1-0.2,0.2-0.3c0.2-0.3,0.4-0.6,0.6-0.9c0.1-0.1,0.1-0.2,0.3-0.2
          		c0.1,0,0.2-0.2,0.3-0.3c0.1-0.1,0.1-0.2,0.2-0.3c0,0,0.1,0,0.2-0.1c0,0.1,0,0.1,0,0.2c-0.1,0.2-0.1,0.5-0.4,0.6
          		c0,0-0.1,0.1-0.1,0.2c-0.1,0.1-0.1,0.3-0.2,0.4c-0.2,0.3-0.3,0.3-0.4,0c-0.3,0.3-0.3,0.6-0.1,1c0.3-0.1,0.5-0.2,0.6-0.5
          		c0.1-0.2,0.3-0.4,0.4-0.6c0,0,0-0.1,0-0.1c0-0.5,0.3-0.8,0.6-1.1c-0.1,0.5-0.2,1.1-0.4,1.6c0,0.2-0.2,0.4-0.4,0.4
          		c-0.5,0.2-0.6,0.6-0.7,1c-0.1,0.4-0.1,0.8-0.3,1.2c-0.1,0.4-0.5,0.6-0.8,0.7c-0.3,0.2-0.6,0.4-0.7,0.8c0.2,0,0.4,0,0.6,0
          		c-0.3,0.6-1,0.8-1.2,1.4c0.1,0,0.1,0.1,0.2,0.1c0,0,0.1,0,0.1,0c0.4-0.5,0.8-1,1.2-1.5c0,0,0.1-0.1,0.1-0.2c0-0.5,0.3-0.7,0.6-1
          		c0.2-0.2,0.3-0.3,0.5-0.5c0,0,0.1-0.1,0.1-0.1c0.4-0.1,0.3-0.4,0.4-0.7c0-0.3,0-0.6,0.1-0.9C13.8,15.1,14,15,14.4,15.1z M11.3,16.6
          		C11.2,16.6,11.2,16.6,11.3,16.6c-0.3,0.6-0.4,1.2-0.6,1.9C11.4,18,11.1,17.3,11.3,16.6z M9.6,19.6c0,0,0.1,0,0.1,0.1
          		c0.2-0.3,0.4-0.6,0.5-0.9c0,0-0.1,0-0.1-0.1C10,19,9.8,19.3,9.6,19.6z M12,16.1c0,0-0.1,0-0.1-0.1c-0.1,0.3-0.2,0.6-0.4,0.8
          		c0,0,0.1,0,0.1,0.1C11.8,16.7,11.9,16.4,12,16.1z"/>
          	<path class="st0" d="M15.6,31.6c0.4,0.1,0.6,0.1,0.9,0.1c0.1-0.6,0.5-0.8,1-0.5c0.2,0.1,0.3,0.2,0.5,0.3c0.3,0.2,0.5,0.4,0.5,0.8
          		c0.7-0.2,1.1,0.4,1.6,0.7c0,0,0,0.2-0.1,0.3c-0.3,0.3-0.7,0.4-1.1,0.4c-0.4,0-0.8,0-1.2,0.1c-0.1,0-0.3,0.1-0.4,0.2
          		c-0.2,0.2-0.3,0.4-0.6,0.5c-0.2,0.1-0.4,0.3-0.6,0.4c-0.2,0.1-0.4,0.1-0.6,0.2c0,0,0-0.1,0-0.1c0.2-0.1,0.5-0.2,0.7-0.4
          		c0,0,0-0.1-0.1-0.1c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0-0.2,0.1-0.3,0.1c0-0.1,0-0.2-0.1-0.2c-0.1-0.1-0.3-0.3-0.4-0.4
          		c-0.1-0.1-0.3-0.1-0.5-0.2c0.1-0.1,0.2-0.3,0.3-0.4c-0.1-0.2-0.6-0.1-0.6-0.6c0.2,0.1,0.3,0.2,0.5,0.3c0.5,0.3,1.1,0.2,1.2-0.4
          		c0-0.1,0-0.2-0.1-0.3C15.9,32.4,15.8,32,15.6,31.6z"/>
          	<path class="st0" d="M32,17.7c-0.3-0.1-0.5,0-0.8,0.2c-0.1,0-0.3-0.1-0.4-0.2c-0.1-0.1-0.1-0.3,0-0.4c0.3-0.4,0.7-0.7,1.1-1.1
          		c0.1-0.1,0.3-0.1,0.4,0c0.2,0.2,0.3,0.4,0.5,0.6c0,0,0,0.1,0,0.1C32.7,17.2,32.2,17.7,32,17.7z"/>
          	<path class="st0" d="M28.8,16.8c-0.1,0.3-0.2,0.5-0.2,0.8c0,0.3,0.2,0.6,0.3,0.8c0.2,0.3,0.3,0.7,0.2,1.1c-0.1-0.2-0.1-0.4-0.2-0.5
          		c-0.1-0.1-0.2-0.2-0.3-0.3c-0.5-0.1-0.9-0.5-1-1c0-0.3,0.1-0.5,0.4-0.6C28.2,17.1,28.5,17,28.8,16.8z"/>
          	<path class="st0" d="M15.6,22.9c0-0.1,0-0.3,0-0.4c0.1-0.7,0.3-1.5,0.5-2.2c0.1-0.4,0.3-0.8,0.5-1.1c0.4-0.5,0.6-1.1,0.7-1.7
          		c0.1-0.4,0.3-0.7,0.6-0.8c-0.8,2.1-1.8,4-2.1,6.3C15.7,23,15.7,23,15.6,22.9z"/>
          	<path class="st0" d="M18.7,11c-0.2,0.1-0.4,0.3-0.6,0.4c0,0-0.1-0.1-0.2-0.1c0,0.1,0,0.3-0.1,0.4c0.2,0,0.4,0.1,0.5,0.1
          		c0,0,0,0.1,0,0.1c-0.4,0-0.7,0.1-1.1,0.1c-0.1,0-0.2,0.1-0.3,0.2c0,0,0,0.1,0,0.1c-0.1,0.1-0.3,0.2-0.4,0.3
          		c-0.1-0.1-0.2-0.3-0.2-0.4c0-0.5,0.2-0.7,0.7-0.7c0.4,0,0.7,0,1-0.3C18.1,11,18.4,11,18.7,11C18.6,11,18.7,11,18.7,11z"/>
          	<path class="st0" d="M25.1,23.9c0-0.2-0.1-0.4-0.1-0.6c-0.1-1,0.2-1.9,0.7-2.7c0.1-0.1,0.1-0.3,0.2-0.3c0.1-0.1,0.2-0.1,0.3-0.1
          		c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.1-0.1,0.2c-0.6,1-0.9,2.1-0.9,3.3C25.2,23.9,25.2,23.9,25.1,23.9z"/>
          	<path class="st0" d="M30.5,21.1c-0.4,0.2-0.7,0.2-1.1,0.1c-0.3-0.1-0.6,0.1-0.9,0.1c-0.2,0-0.3,0.1-0.5,0.1c-0.1,0-0.2-0.1-0.2-0.1
          		c0,0,0.1-0.2,0.1-0.2c0.4,0,0.6-0.3,0.9-0.4C29.5,20.6,30,20.6,30.5,21.1z"/>
          	<path class="st0" d="M28.8,13.6c0.2-0.1,0.4-0.2,0.6-0.2c0,0,0,0.1,0,0.1c0.1,0.2,0.2,0.4,0.4,0.5c0.6,0.6,1.2,1.1,2,1.3
          		c0.3,0.1,0.5,0.3,0.6,0.6c-0.7-0.3-1.3-0.6-2-1c-0.2-0.1-0.4-0.3-0.5-0.5c-0.2-0.4-0.5-0.6-0.9-0.7c0,0-0.1-0.1-0.1-0.1
          		C28.8,13.6,28.8,13.6,28.8,13.6z"/>
          	<path class="st0" d="M21.5,13.4c0.2-0.3,0.5-0.6,0.7-0.8l0,0c0.4-0.4,0.3-0.9,0.3-1.3c-0.1,0-0.2,0-0.3,0.1c0-0.1,0-0.2,0-0.2
          		c0.4,0,0.3-0.3,0.4-0.5c0,0,0,0,0.1-0.1c0,0.1,0.1,0.2,0.1,0.3c0,0.2,0,0.4,0,0.5c0.1,0.5-0.2,0.9-0.5,1.3
          		c-0.1,0.1-0.1,0.2-0.2,0.3c0.4,0.1,0.7,0.2,1.1,0.3c-0.2,0.2-0.4,0.3-0.6,0.2C22.3,13.1,21.9,13.1,21.5,13.4L21.5,13.4z"/>
          	<path class="st0" d="M32,19.2c-0.2-0.1-0.3-0.2-0.4-0.3c0-0.1,0-0.3,0.1-0.4c0.1-0.2,0.3-0.4,0.5-0.6c0,0,0.1-0.1,0.2-0.1
          		c0,0,0.1,0,0.1,0.1c0.5,0.2,0.6,0.4,0.2,0.8C32.5,18.9,32.3,19,32,19.2z"/>
          	<path class="st0" d="M23.6,23c0.1,0.2,0.2,0.5,0.2,0.8c0,0.3-0.3,0.4-0.5,0.4c-0.3,0-0.5,0-0.7-0.2c-0.1-0.1,0.1-0.4,0.3-0.6
          		C23.1,23.3,23.3,23.2,23.6,23z"/>
          	<path class="st0" d="M19,12.4c0.2-0.1,0.4-0.1,0.6-0.2c0.3,0,0.5-0.1,0.8-0.1c0.1,0,0.2,0,0.3,0.1c0.1,0,0.3,0.1,0.4,0.1
          		c0.1,0,0.2,0.1,0.2,0.1c0,0.1,0,0.2-0.1,0.2c-0.2,0.1-0.4,0.2-0.6,0c-0.2-0.2-0.4-0.2-0.6,0c-0.2,0.1-0.4,0.2-0.4-0.2
          		c0-0.1-0.1-0.1-0.2-0.1C19.3,12.4,19.2,12.4,19,12.4C19.1,12.4,19,12.4,19,12.4z"/>
          	<path class="st0" d="M14.8,15.6c0-0.2-0.1-0.4,0-0.5c0.2-0.4,0.5-0.8,0.7-1.1c0.1-0.2,0.3-0.4,0.5-0.6
          		C16.2,13.8,15.7,14.7,14.8,15.6z"/>
          	<path class="st0" d="M19.7,18.9c0.2,0.2,0.2,1.3,0.1,2.4C19.5,20.8,19.4,19.4,19.7,18.9z"/>
          	<path class="st0" d="M21.6,10.5c0.1,0.5,0.1,0.9-0.4,1.1c0.1-0.2,0.2-0.4,0.3-0.7c-0.4,0.1-0.8,0.1-1.2-0.2
          		C20.9,10.6,21.3,10.6,21.6,10.5z"/>
          	<path class="st0" d="M16.7,13.7c-0.2,0.5-1.8,2.6-2,2.6c0-0.3,0.1-0.6,0.4-0.7c0.1,0,0.1-0.1,0.2-0.1c0.4-0.5,0.8-1.1,1.2-1.6
          		C16.6,13.8,16.6,13.8,16.7,13.7z"/>
          	<path class="st0" d="M13.7,30.8c-0.2-0.1-0.5,0-0.6-0.3c0,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0.1-0.2,0.1-0.2
          		c0.1,0,0.2,0,0.3,0.1c0.2,0.1,0.4,0.3,0.5,0.5c0.1,0.1,0.1,0.2,0.2,0.3C13.8,30.8,13.8,30.8,13.7,30.8z"/>
          	<path class="st0" d="M23.6,13.2c0.1-0.6,0.1-1.2,0.2-1.7c0.2,0.1,0.4,0.1,0.6,0.2c-0.4,0.3-0.3,0.7-0.3,1.1
          		C24,13,23.9,13.1,23.6,13.2z"/>
          	<path class="st0" d="M29.2,16.8c0.4,0.3,0.5,0.7,0.4,1c0,0.1-0.1,0.2-0.1,0.2c-0.1,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.1-0.2-0.2-0.2
          		C28.9,17.3,28.9,17.1,29.2,16.8z"/>
          	<path class="st0" d="M9.3,21.7c0.1,0.2,0.2,0.3,0.3,0.4c0,0.1,0,0.3,0,0.3c-0.2,0.2-0.4,0.4-0.6,0.5C8.8,22.8,9,22.1,9.3,21.7z"/>
          	<path class="st0" d="M13.7,20.1c0.1-0.4,0.3-0.6,0.6-0.9c0.1-0.1,0.3-0.2,0.4-0.4c0.2-0.3,0.4-0.5,0.5-0.8c0.1,0.2,0,0.8-0.3,0.9
          		c-0.5,0.3-0.9,0.5-1.1,1.1C13.8,20.1,13.7,20.1,13.7,20.1z"/>
          	<path class="st0" d="M14.1,18.3c0.1-0.6,1.1-1.5,1.6-1.4C14.9,17.1,14.7,17.9,14.1,18.3z"/>
          	<path class="st0" d="M20.2,11.7c-0.2,0-0.4,0-0.6,0c-0.1,0-0.2-0.2-0.2-0.3c0.1-0.1,0.2-0.3,0.4-0.3c0.1-0.1,0.3,0,0.4,0
          		c0,0.1,0,0.3,0,0.5C20.1,11.6,20.2,11.6,20.2,11.7z"/>
          	<path class="st0" d="M32.9,19.7c0.1-0.2,0.2-0.4,0.3-0.7c0,0-0.1-0.1-0.2-0.1c0.1-0.1,0.1-0.1,0.2-0.1c0.1,0,0.2,0,0.3,0
          		c0,0.2,0.1,0.4,0,0.5C33.5,19.5,33.4,19.8,32.9,19.7z"/>
          	<path class="st0" d="M22.8,16.9c-0.7,0.4-1.6-0.1-1.9-0.7C21.4,16.5,22,16.9,22.8,16.9z"/>
          	<path class="st0" d="M10.1,25.8c0.6,0.5,0.6,0.5,1.4,0.1c0,0,0.1,0,0.1,0c-0.1,0.2-0.2,0.4-0.4,0.6c0,0.1-0.2,0.1-0.3,0
          		c-0.2-0.1-0.5-0.2-0.7-0.4C10,26.1,10,26,10.1,25.8C10,25.9,10,25.9,10.1,25.8z"/>
          	<path class="st0" d="M17,16.6c-0.3,0.3-0.6,0.6-0.9,0.9C16,17.2,16,17.1,16,17c0.2-0.1,0.3-0.3,0.4-0.3c0.2-0.1,0.4-0.2,0.5-0.3
          		C17,16.5,17,16.5,17,16.6z"/>
          	<path class="st0" d="M22.2,12.5c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1,0-0.2,0-0.3,0c0-0.1,0-0.2,0-0.3c0.2-0.2,0.4-0.4,0.6-0.5
          		c0,0,0.1,0,0.1,0.1C22.3,12.2,22.3,12.4,22.2,12.5L22.2,12.5z"/>
          	<path class="st0" d="M13.2,29.8c-0.1-0.1-0.2-0.3-0.1-0.4c0-0.1,0.2-0.2,0.3-0.4c0.1,0.1,0.2,0.2,0.2,0.2c0,0.2-0.2,0.3-0.2,0.5
          		C13.3,29.8,13.2,29.8,13.2,29.8z"/>
          	<path class="st0" d="M18.7,12.6c-0.3,0.4-0.6,0.8-1,1.3C17.7,13.5,18,13.1,18.7,12.6z"/>
          	<path class="st0" d="M13.2,21.9c0.1-0.5,0.2-1,0.3-1.6C13.6,20.7,13.4,21.8,13.2,21.9z"/>
          	<path class="st0" d="M10,23.4c-0.2,0.2-0.3,0.3-0.4,0.4c0-0.1-0.1-0.2-0.1-0.2c0.1-0.2,0.2-0.3,0.3-0.4C9.8,23.2,9.9,23.3,10,23.4z
          		"/>
          	<path class="st0" d="M21.5,13.4c-0.2,0.2-0.4,0.2-0.8,0.2c0.2-0.2,0.3-0.3,0.4-0.5C21.3,13.1,21.4,13.3,21.5,13.4L21.5,13.4z"/>
          	<path class="st0" d="M10.5,24.8c-0.2,0.2-0.4,0.3-0.6,0.5c0-0.2,0-0.4-0.1-0.7C10.1,24.7,10.2,24.8,10.5,24.8z"/>
          	<path class="st0" d="M33.3,16.6c0-0.3,0-0.6,0-0.9C33.6,15.9,33.6,16.3,33.3,16.6z"/>
          	<path class="st0" d="M21.7,19.3c0.1-0.3,0.3-0.5,0.4-0.8C22.2,18.8,22,19.2,21.7,19.3C21.7,19.3,21.7,19.3,21.7,19.3z"/>
          	<path class="st0" d="M11.2,24.1c0,0.4,0,0.5-0.6,0.4C10.7,24.3,10.7,24.3,11.2,24.1z"/>
          	<path class="st0" d="M24.7,9.8c0.4-0.1,0.7,0.1,1,0.3c0,0,0,0.1,0,0.1C25.3,10,25,9.9,24.7,9.8z"/>
          	<path class="st0" d="M16.4,13.7c-0.1-0.2-0.1-0.4-0.2-0.6c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.2,0.1c0.1,0.2,0.1,0.4,0,0.6
          		C16.5,13.7,16.4,13.7,16.4,13.7z"/>
          	<path class="st0" d="M21.2,16.2c0.1-0.4,0.3-0.8,0.4-1.3C21.7,15.3,21.5,15.9,21.2,16.2z"/>
          	<path class="st0" d="M24.8,26.1c-0.2-0.2-0.3-0.4-0.2-0.6c0-0.1,0.1-0.1,0.2-0.2c0,0.1,0.1,0.1,0.1,0.2
          		C24.9,25.8,24.9,25.9,24.8,26.1z"/>
          	<path class="st0" d="M29.1,14.8c0,0.3-0.1,0.5-0.1,0.8c-0.1,0-0.1,0-0.2,0c0-0.3,0.1-0.5,0.1-0.8C28.9,14.7,29,14.8,29.1,14.8z"/>
          	<path class="st0" d="M29.4,18.9c-0.2-0.3-0.4-0.6-0.6-0.9c0,0,0.1,0,0.1-0.1c0.2,0.3,0.4,0.6,0.6,0.9
          		C29.5,18.8,29.5,18.8,29.4,18.9z"/>
          	<path class="st0" d="M15.2,13.1c-0.2-0.3-0.1-0.5,0.2-0.8C15.3,12.6,15.2,12.9,15.2,13.1z"/>
          	<path class="st0" d="M35.1,15.7c0,0.4-0.4,0.4-0.6,0.6C34.6,16,34.7,15.9,35.1,15.7z"/>
          	<path class="st0" d="M12.7,27.5c-0.1-0.3,0.2-0.5,0.3-0.8c0,0,0.1,0,0.1,0C13,27,12.9,27.3,12.7,27.5
          		C12.7,27.5,12.7,27.5,12.7,27.5z"/>
          	<path class="st0" d="M31.4,21.2c0.2-0.1,0.4-0.2,0.6-0.4C32.1,21.3,31.7,21.3,31.4,21.2C31.5,21.3,31.5,21.3,31.4,21.2z"/>
          	<path class="st0" d="M11.9,26.2c0.3,0.3,0.3,0.4,0,0.7C11.9,26.7,11.9,26.5,11.9,26.2z"/>
          	<path class="st0" d="M41.6,20.7c0,0.2,0,0.4,0.1,0.6C41.3,21.1,41.3,20.9,41.6,20.7z"/>
          	<path class="st0" d="M12.5,32.5c0.2,0.1,0.3,0.2,0.5,0.3c0,0,0,0.1,0,0.2c-0.1,0-0.1,0.1-0.2,0c-0.1-0.1-0.2-0.2-0.4-0.3
          		C12.4,32.6,12.4,32.5,12.5,32.5z"/>
          	<path class="st0" d="M19.6,17.2c0,0.3,0,0.5,0,0.8C19.3,17.8,19.3,17.5,19.6,17.2z"/>
          	<path class="st0" d="M20.9,14c0.4,0.1,0.4,0.2,0.3,0.8C21,14.5,21,14.3,20.9,14z"/>
          	<path class="st0" d="M15.5,16.4c0.1-0.1,0.2-0.3,0.2-0.4c0,0,0.1,0,0.1,0.1c0,0.2,0,0.4-0.2,0.4C15.6,16.5,15.5,16.4,15.5,16.4z"/>
          	<path class="st0" d="M13,25c-0.1,0.1-0.2,0.2-0.2,0.2c0-0.1-0.1-0.1-0.1-0.2c0-0.1,0.1-0.1,0.2-0.2C12.9,24.8,13,24.9,13,25z"/>
          	<path class="st0" d="M23.3,32.9c0.1-0.1,0.2-0.2,0.3-0.2c0,0,0.1,0.1,0.1,0.1c-0.1,0.1-0.2,0.2-0.3,0.2
          		C23.4,33,23.3,32.9,23.3,32.9z"/>
          	<path class="st0" d="M24,18.5c0,0.2-0.1,0.4-0.1,0.6c0,0-0.1,0-0.1,0c0-0.2,0.1-0.4,0.1-0.6C23.9,18.5,24,18.5,24,18.5z"/>
          	<path class="st0" d="M19.9,15.1c-0.1-0.2-0.1-0.4-0.2-0.5c0,0,0.1,0,0.1,0c0,0.2,0.1,0.4,0.1,0.5C20,15,20,15.1,19.9,15.1z"/>
          	<path class="st0" d="M23.6,22c0-0.2,0-0.4,0-0.6c0,0,0.1,0,0.1,0C23.7,21.6,23.7,21.8,23.6,22C23.6,22,23.6,22,23.6,22z"/>
          	<path class="st0" d="M8.2,26.2c0.1-0.1,0.2-0.2,0.2-0.3c0,0,0.1,0.1,0.1,0.1C8.4,26.2,8.3,26.3,8.2,26.2
          		C8.2,26.3,8.2,26.3,8.2,26.2z"/>
          	<path class="st0" d="M23.4,12.7c0-0.1,0.1-0.3,0.1-0.4c0,0,0.1,0,0.1,0c0,0.1-0.1,0.3-0.1,0.4C23.5,12.7,23.4,12.7,23.4,12.7z"/>

          </g>
          </svg>






            <svg id="HomeArowDwn" width="50px" height="50px" viewBox="0 0 50 50">
          <style type="text/css">
          	{`.st0{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}`}
          </style>
          <g>
          	<path className="st0" d="M2.5,2.2c0.1,0.4,22.3,46,22.3,46l22.7-46C33.1,14.5,18.1,14.9,2.5,2.2z"/>
          </g>
          </svg>

          </Link>
          </div>

              <AsideHome />

          <Video className="HomeVid" controls autoPlay loop muted
            poster="https://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="./video/Ink.mp4" />
        </Video>
            


      </div>
      );
    }
});
export default Home;
