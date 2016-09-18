import React from "react";

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
         <div id="MenuTab"></div>
        </div>
      );
    }
}
