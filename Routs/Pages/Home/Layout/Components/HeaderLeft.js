import React from "react";
import {Motion, spring} from 'react-motion';

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
           <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
              {value => <h1>{value.x}</h1>}
            </Motion>

         </div>
        </div>
      );
    }
}
