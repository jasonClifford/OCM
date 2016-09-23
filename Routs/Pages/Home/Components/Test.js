import React from "react";
import {Motion, spring} from 'react-motion';


export default class Test extends React.Component {
    render(){
      return (
        <div>
          <Motion defaultStyle={{x: 0}} style={{x: spring(100)}}>
            {value => <div>{value.x}</div>}
          </Motion>

        </div>
      );
    }
}
