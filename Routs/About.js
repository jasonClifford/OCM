import React from "react";
import { Link } from "react-router";


//import Date from "./Pages/About/Components/Date.js";



const About = React.createClass({
 
    render(){
      return (
          <div className="mainContainer">
              


          <div className="LinkPrev">
                  <Link to="home">Home</Link>

          </div>
          <div className="LinkNext">
            <Link to="contact">Contact</Link>

          </div>
          

          
        </div>
      );
    }
});
export default About;
