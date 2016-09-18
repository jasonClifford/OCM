import React from "react";
import {Motion, spring} from 'react-motion';
import Demo from "./Demo.js";

export default class HeaderLeft extends React.Component {
  _MenuOpen(){
    alert("clicked");
}

    render(){
      return (
        <div>
          <div id="MenuBar1">

            <div id="MenuBtn" onClick={this._MenuOpen.bind(this)}></div>

         </div>
         <div id="MenuTab">
           <Motion defaultStyle={{x: 0}} style={{x: spring(300)}}>
              {value => <h1>{value.x}</h1>}
            </Motion>
            <Demo />
         </div>

        </div>
      );
    }
}
