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

  ParaEnt(el){
    var PTitle = document.getElementById("PageTitle");
    var Para2 = document.getElementById("Para2");
    var Para3 = document.getElementById("Para3");
    var Para4 = document.getElementById("Para4");

    PTitle.style.transition = "opacity 0.25s linear 1s, left 0.25s linear 1s";
    Para2.style.transition = "opacity 0.25s linear 1.25s, left 0.25s linear 1.25s";
    Para3.style.transition = "opacity 0.25s linear 1.5s, left 0.25s linear 1.5s";
    Para4.style.transition = "opacity 0.25s linear 1.75s, left 0.25s linear 1.75s";

    PTitle.style.opacity = "1";
    PTitle.style.left="0px";
    Para2.style.opacity = "1";
    Para2.style.left="60px";
    Para3.style.opacity = "1";
    Para3.style.left="25px";
    Para4.style.opacity = "1";
    Para4.style.left="25px";
  },

  HomePic(el){
      var Hpic1 = document.getElementById("Pic1home");
      var Hpic2 = document.getElementById("Pic2home");
      var Hpic3 = document.getElementById("Pic3home");
      Hpic1.style.transition = "opacity 2s linear 1.25s";
      Hpic2.style.transition = "opacity 2s linear 1.5s";
      Hpic3.style.transition = "opacity 2s linear 1.75s";

      Hpic1.style.opacity = "1";
      Hpic2.style.opacity = "1";
      Hpic3.style.opacity = "1";
  },

  render() {
    return (
      <div id="Aside">


            <div id="HomeAsideBtn"
              onMouseDown={()=>{ this.handleMouseDown(); this.ParaEnt("PageTitle,Para2,Para3,Para4");  this.HomePic("Pic1home,Pic2home,Pic3home")}}

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

                <div id="PageTitle">
                <h1> Our Mission: </h1>
                </div>
                <div id="Pic1home" alt="Radix Norm Buisness cards"><img src="./images/Business-Card-MockUp.png"></img></div>

                  <svg id="MarkerO" viewBox="0 0 50 50">
                    <style>
                	{`.st0{fill:none;stroke-miterlimit:10;stroke: #00ff00;}`}
                    </style>
                    <circle className="st0" cx="25" cy="25" r="18"/>
                  </svg>

                  <div id="Pic2home" alt="Kerridge Website"><img src="./images/KerrBigWebSm.PNG"></img></div>


                  <svg id="MarkerO2" viewBox="0 0 50 50">
                    <style>
                	{`.st0{fill:none;stroke-miterlimit:10; stroke: #00ff00;}`}
                    </style>
                    <circle className="st0" cx="25" cy="25" r="18"/>
                  </svg>

                  <div id="Para2">
                  <h2>Occipital Core Media is a boutique marketing and media design firm. Our goal is to create everything from rich
                  interactive web sites to branding and marketing campaigns. </h2>
                  </div>

                  <svg id="MarkerO3" viewBox="0 0 50 50">
                    <style>
                	{`.st0{fill:none;stroke-miterlimit:10;}`}
                    </style>
                    <circle className="st0" cx="25" cy="25" r="18"/>
                  </svg>

                  <div id="Pic3home" alt="Kerridge Website"><img src="./images/QCApp.jpg"></img></div>

                  <div id="Para3">
                  <h2>Using traditional  and digital mixed media, we engage users on a personal level to create memorable experiences.</h2>
                  </div>

                  <svg id="MarkerO4" viewBox="0 0 50 50">
                    <style>
                	{`.st0{fill:none;stroke-miterlimit:10;stroke: #00ff00;}`}
                    </style>
                    <circle className="st0" cx="25" cy="25" r="18"/>
                  </svg>

                  <div id="Para4">
                  <h2>We can create a range of custom software solutions that enhance productivity, streamline business workflows, and generate marketable customer feedback.
                  If you want to be seen in a bold new light by your customer base, Occipital Core Media can help.</h2>
                  </div>


                <div id="CloseBtn"
                onMouseDown={()=>{ this.handleMouseDown()}}

                onTouchStart={()=>{ this.handleTouchStart }}>

                <svg id="SVGclose"viewBox="0 0 60 60">

              <style type="text/css">
              	{`.ClosX{fill:none;
                  stroke-width:1.152;
                  stroke-linecap:round;
                  stroke-miterlimit:10;
                  stroke: #fd9a2b;}`}
              </style>
              <circle className="ClosX" cx="30" cy="30" r="27.7"/>
              <line className="ClosX" x1="11.9" y1="48.1" x2="48.1" y2="11.9"/>
              <line className="ClosX" x1="11.9" y1="11.9" x2="48.1" y2="48.1"/>
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
