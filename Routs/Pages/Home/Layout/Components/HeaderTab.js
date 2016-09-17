import React from "react";
import {Motion, spring} from 'react-motion';

export default class HeaderTab extends React.Component {
  render(){
      return (
        <div id="MenuTab">


          <Motion defaultStyle={{x: 0}} style={{x: spring(300)}}>
              {value => <h1>{value.x}</h1>}
            </Motion>




          </div>
      );
    }
}
