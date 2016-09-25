import React from "react";
import { Link } from "react-router";

import HeaderLeft from "./Pages/Home/Components/HeaderLeft.js";
import Expose from "./Pages/Home/Components/Expose.js";

export default class Layout extends React.Component {
    render() {
      console.log(this.props.childern);
      return (
        <div>
          <div>
            <HeaderLeft />
          </div>
          <div>
            <Expose />
          </div>

          <div id="mainContainer">
            
              {this.props.children}
          </div>
        </div>
      );
    }
}
