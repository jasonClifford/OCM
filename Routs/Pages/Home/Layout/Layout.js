import React from "react";
import HeaderLeft from "./Components/HeaderLeft.js";
import Expose from "./Components/Expose.js";
import Content from "./Components/Content.js";
import Test from "./Components/Test.js";


export default class Layout extends React.Component {
    render(){
      return (
        <div>

          <HeaderLeft />
          <Expose />
          <Content />
          <Test />
        </div>
      );
    }
}
