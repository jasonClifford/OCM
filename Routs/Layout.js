import React from "react";
import { Link } from "react-router";
import { browserHistory } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



import HeaderLeft from "./Pages/Layout/Components/HeaderLeft.js";
import Expose from "./Pages/Layout/Components/Expose.js";




export default class Layout extends React.Component {
    
    
     //////////////////////////////////////////////////////

    

    render() {

      //set up logic in transitions here
        var path = this.props.location.pathname;// not to mess with yet


        //////////////////////////////////////////////////////////////
        var RwMessage = this.props.location.state;
        if (RwMessage !== null) {
            //set curent path to..
            var RwMessage = this.props.location.state.message;
        }
        if (RwMessage === null) {
            //set curent path to..
            var RwMessage = 0;
        }

        
        //////////////////////////////////////////////////////////////


        var Curentpath = this.props.location.pathname;
        if (Curentpath === "home") {
            //set curent path to..
            var Curentpath = 1;    
        }

        if (Curentpath === "about") {
            //set curent path to..
            var Curentpath = 2;
        }

        if (Curentpath === "contact") {
            //set curent path to..
            var Curentpath = 3;
        }
        console.log('Cur path is', Curentpath);

        ////Type of transition
        if (Curentpath < RwMessage) {
            var TypOfTrans = "upTransition";

        }
        if (Curentpath > RwMessage) {
            var TypOfTrans = "downTransition";

        }
        if (Curentpath === RwMessage) {
            var TypOfTrans = "fadeTransition";

        }
        if (TypOfTrans === undefined){
            var TypOfTrans = "fadeTransition";

        }
        console.log('transition Type', TypOfTrans);


        console.log('Came from', RwMessage);
        //////this.props.location.state.message
        ///////////////////////////////////////////////////////////////
        return (

        <div>
          <div>
                    <HeaderLeft />
          </div>
             
          <div>
                    <Expose />
          </div>

          <div className="mainContainer">
              <ReactCSSTransitionGroup transitionName={path} 
          transitionEnterTimeout={600} transitionLeaveTimeout={600}>
          {React.cloneElement(this.props.children, { key: path })}
                </ReactCSSTransitionGroup>
                  
          </div>
         </div>
      );
    }
}

