import React from "react";

export default class HeaderLeft extends React.Component {
  _MenuOpen(){
    alert("clicked");
}

    render(){
      return (
        <div id="MenuBar1">
          <div id="MenuBtn" onClick={this._MenuOpen.bind(this)} ></div>
        


        </div>
      );
    }
}
