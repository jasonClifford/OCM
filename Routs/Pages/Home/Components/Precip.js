import React from 'react';
import $ from 'jquery';


export default class Precip extends React.Component {
    constructor() {
        super();
        this.toggleState = this.toggleState.bind(this);
        this.state = {
            isActive: false

        }
    }
    toggleState() {
        this.setState({ isActive: !this.state.isActive });
        //this.BtnOnOff();
       // console.log(this.state.isActive);
    } 
    
    
      render() {
          return (
           <div className="precipPage">
                  
                  <label id="Switch" >
                      <input id="ONOFF" type="checkbox" className={this.state.isActive ? 'inactive' : 'active'} onClick={this.toggleState}></input>
                      <div className="slider round"></div>
                  </label>

                  <div id="ip_content" />
                  <h2 id="place"></h2>
                  <h1 id="weather"></h1>

                  <canvas id="weathercanvas" />

            </div>
          );
      }
}

