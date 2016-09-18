import React from "react";
import HeaderLeft from "./Components/HeaderLeft.js";
import Expose from "./Components/Expose.js";


export default class Layout extends React.Component {
    render(){
      return (
        <div>
          <HeaderLeft />
          <Expose />
        </div>
      );
    }
}
