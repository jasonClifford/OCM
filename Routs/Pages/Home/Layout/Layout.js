import React from "react";
import HeaderLeft from "./Components/HeaderLeft.js";
import HeaderTab from "./Components/HeaderTab.js";

export default class Layout extends React.Component {
    render(){
      return (
        <div>
          <HeaderLeft />
          <HeaderTab />
        </div>
      );
    }
}
