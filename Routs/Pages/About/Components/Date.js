import React from "react";



const Date = React.createClass({

    render(){
      var date = new Date().toLocaleString();
      var stringDate = date.toString();
      console.log(stringDate);
      return (
        <div><h1>{stringDate}</h1></div>

      );
    }
});
export default Date;
