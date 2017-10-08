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

       
       // console.log('Path reads', path);
        
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

