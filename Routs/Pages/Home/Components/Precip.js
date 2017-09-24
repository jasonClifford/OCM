import React from 'react';
import $ from 'jquery';


export default class Precip extends React.Component {

    componentDidMount() {

        var receivedMessage = this.props.Location.state.message 

    }
    constructor() {
        super();
        this.toggleState = this.toggleState.bind(this);
        this.state = {
            isActive: false

        }
    }

    toggleState() {
        this.setState({ isActive: !this.state.isActive });
        this.BtnOnOff();
    }


    BtnOnOff() {


        function showPosition(position) { ////////////////////success in getting position


            var Local = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyAK1gXEUVImJJZxczdrpqeURSeQjBfoFsE";

            $.getJSON(Local, function (Location) {

                // Sort through the crap to find city and state from the json //
                //////////////////////////////////////////////////////////
                var result = Location.results[1];//gets in to the Array
                var city = "";
                var state = "";
                for (var i = 0, len = result.address_components.length; i < len; i++) {
                    var ac = result.address_components[i];
                    if (ac.types.indexOf("locality") >= 0) city = ac.long_name;
                    if (ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.long_name;
                }
                ///////////////////////////////////////////////////////////
                console.log(city);
                console.log(state);

                //////Weather In Date Api callback//////////////////////////
                var Weather = "https://api.wunderground.com/api/bfed43d0b4e90d2f/conditions/q/" + state + "/" + city + ".json";

                // console.log(Weather);

                $.getJSON(Weather, function (data) {

                    var WTemp = data.current_observation.temp_c;
                    var WTemp2 = data.current_observation.icon;

                    console.log("Weather With Geolocation = " + WTemp + " C");
                    console.log("Weather With Geolocation curent observation = " + WTemp2);
                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    const canvas = document.getElementById('weathercanvas');
                    const ctx = canvas.getContext('2d');

                    let width = canvas.width = window.innerWidth;
                    let height = canvas.height = window.innerHeight;

                    /////////////////////////Observation maping//////////////////////////////

                    if (WTemp2 === "cloudy" || WTemp2 === "chancetstorms" || WTemp2 === "chancesnow" || WTemp2 === "chancesleet" || WTemp2 === "chancerain" || WTemp2 === "chanceflurries" || WTemp2 === "fog" || WTemp2 === "mostlycloudy" || WTemp2 === "mostlysunny" || WTemp2 === "partlycloudy" || WTemp2 === "partlysunny") {
                        var Code = 1;
                        //set to cloudy conditions
                    }
                    if (WTemp2 === "sunny" || WTemp2 === "unknown") {
                        var Code = 2;
                        //set to sunny
                    }
                    if (WTemp2 === "flurries" || WTemp2 === "sleet") {
                        var Code = 13;
                        //set to light snow
                    }
                    if (WTemp2 === "snow") {
                        var Code = 43;
                        //set to med snow
                    }
                    if (WTemp2 === "rain") {
                        var Code = 9;
                        //set to med snow
                    }
                    if (WTemp2 === "tstorms") {
                        var Code = 3;
                        //set to med snow
                    }

                    ////////////////////////////////////////////////////////////////////////////////////////////////

                    // Variables
                    //var Code = 43;///For testing with Geolocation ***************************************************

                    if (Code === 13) {                       /// Make it snow (light fluries)
                        var drops = [];
                        var dropColour = "rgba(255,255,255,1)";
                        var dropLengths = [3, 3, 3, 3, 3, 3, 3];
                        var dropSkews = [-2, -1, 0, 1, 2];
                        var maxDrops = 100;
                        var velocity = 8;
                        var flutter = 5;

                    }
                    else if (Code === 16) {                  /// Make it snow (fluries)
                        var drops = [];
                        var dropColour = "rgba(255,255,255,1)";
                        var dropLengths = [3, 3, 3, 3, 3, 3, 3];
                        var dropSkews = [-2, -1, 0, 1, 2];
                        var maxDrops = 500;
                        var velocity = 7;
                        var flutter = 5;

                    }
                    else if (Code === 43) {                  /// Make it Heavy snow
                        var drops = [];
                        var dropColour = "rgba(255,255,255,1)";
                        var dropLengths = [3, 2, 3, 2, 3, 2, 3];
                        var dropSkews = [-3, -1, 0, 1, 3];
                        var maxDrops = 800;
                        var velocity = .5;
                        var flutter = 8;

                    }
                    else if (Code === 9) {                  /// Make it rain
                        var drops = [];
                        var dropColour = "rgba(255,255,255,0.41)";
                        var dropLengths = [4, 5, 3, 6, 2, 3, 3];
                        var dropSkews = [0, 0.2, 0, 0, 0.1];
                        var maxDrops = 100;
                        var velocity = 1;
                        var flutter = 1;
                    }
                    else if (Code === 3) {                  /// Make it ThunderStorms
                        var drops = [];
                        var dropColour = "rgba(255,255,255,0.5)";
                        var dropLengths = [10, 8, 8, 8, 7, 15, 9];
                        var dropSkews = [-0.2, -0.3, -0.2, -0.2, 0.1];
                        var maxDrops = 1000;
                        var velocity = .8;
                        var flutter = .1;
                    }



                    // Raindrop class
                    class Droplet {
                        constructor(x, y, length, skew) {
                            this.x = x;
                            this.y = y;
                            this.length = length;
                            this.skew = skew;
                        }
                        // Move method
                        move() {
                            // Increment x & y 
                            this.y += this.length / velocity;
                            this.x += this.skew / flutter;
                            // Set limits
                            if (this.y > height) {
                                this.y = 0;
                            }
                            if (this.x > width || this.x < 0) {
                                this.y = 0;
                                this.x = Math.floor(Math.random() * width);
                            }
                        }
                        // Draw method
                        draw(ctx) {
                            ctx.beginPath();
                            ctx.moveTo(this.x, this.y);
                            ctx.lineTo(this.x + this.skew, this.y + this.length);
                            ctx.strokeStyle = dropColour;
                            ctx.stroke();
                        }
                    }

                    // Create drops and push to array
                    for (let i = 0; i < maxDrops; i++) {
                        let instance = new Droplet(
                            Math.floor(Math.random() * width),
                            Math.floor(Math.random() * height),
                            randVal(dropLengths),
                            randVal(dropSkews)
                        );
                        drops.push(instance);
                    }

                    // Animation loop
                    function loop() {
                        // Clear Canvas  
                        ctx.clearRect(0, 0, width, height);
                        // Draw / Move drops
                        for (let drop of drops) {
                            drop.move();
                            drop.draw(ctx);
                        }

                        var Animate = requestAnimationFrame(loop);


                        //////////////////////////////////////// Add attribute class to stop animation with button

                        var OnOff = $('#ONOFF').attr('class');

                        if (OnOff === 'active') {


                            //console.log(OnOff);  
                        }

                        if (OnOff === 'inactive') {
                            $("#weathercanvas").fadeOut(1300, "linear");
                            $("#Switch").fadeOut(1300, "linear");
                            function Kill() {
                                cancelAnimationFrame(Animate);
                            }
                            setTimeout(function () {
                                ctx.clearRect(0, 0, width, height);
                            }, 1700);

                            Kill();
                        }
                        //////////////////////////////////////// Add attribute class to stop animation with button ****End****


                    }
                    // Begin animation
                    loop();

                    // Resize canvas - responsive
                    window.addEventListener('resize', resize);
                    function resize() {
                        width = canvas.width = window.innerWidth;
                        height = canvas.height = window.innerHeight;
                    }

                    // Function for random array values
                    function randVal(array) {
                        return array[Math.floor(Math.random() * array.length)];
                    }


                });
            });

            //////////////////////////////////////////////////////////////////////////////

            //console.log(position); 
        }//********************geolocation Function end************************ 


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        };
        function showError(error) { // if no geo - just set to Calgary
            if (error.PERMISSION_DENIED) {
                var Weather = "https://api.wunderground.com/api/bfed43d0b4e90d2f/conditions/q/CA/calgary.json";
                //console.log(Weather);

                $.getJSON(Weather, function (data) {

                    var WTemp = data.current_observation.temp_c;
                    var WTemp2 = data.current_observation.icon;

                    console.log("Weather With Geolocation = " + WTemp + " C");
                    console.log("Weather With Geolocation curent observation = " + WTemp2);

                    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    const canvas = document.getElementById('weathercanvas');
                    const ctx = canvas.getContext('2d');
                    // Resize canvas
                    let width = canvas.width = window.innerWidth;
                    let height = canvas.height = window.innerHeight;

                    /////////////////////////Observation maping//////////////////////////////

                    if (WTemp2 === "cloudy" || WTemp2 === "chancetstorms" || WTemp2 === "chancesnow" || WTemp2 === "chancesleet" || WTemp2 === "chancerain" || WTemp2 === "chanceflurries" || WTemp2 === "fog" || WTemp2 === "mostlycloudy" || WTemp2 === "mostlysunny" || WTemp2 === "partlycloudy" || WTemp2 === "partlysunny") {

                        //set to cloudy conditions
                    }
                    if (WTemp2 === "sunny" || WTemp2 === "unknown") {
                        var Code = 2;
                        //set to sunny
                    }
                    if (WTemp2 === "flurries" || WTemp2 === "sleet") {
                        var Code = 13;
                        //set to light snow
                    }
                    if (WTemp2 === "snow") {
                        var Code = 43;
                        //set to med snow
                    }
                    if (WTemp2 === "rain") {
                        var Code = 9;
                        //set to med snow
                    }
                    if (WTemp2 === "tstorms") {
                        var Code = 3;
                        //set to med snow
                    }

                    ////////////////////////////////////////////////////////////////////////////////////////////////

                    // Variables
                    //var Code = 43;///For testing with out Geolocation**************************************************

                    if (Code === 13) {                       /// Make it snow (light fluries)
                        var drops = [];
                        var dropColour = "rgba(255,255,255,1)";
                        var dropLengths = [3, 3, 3, 3, 3, 3, 3];
                        var dropSkews = [-2, -1, 0, 1, 2];
                        var maxDrops = 100;
                        var velocity = 8;
                        var flutter = 5;

                    }
                    else if (Code === 16) {                  /// Make it snow (fluries)
                        var drops = [];
                        var dropColour = "rgba(255,255,255,1)";
                        var dropLengths = [3, 3, 3, 3, 3, 3, 3];
                        var dropSkews = [-2, -1, 0, 1, 2];
                        var maxDrops = 500;
                        var velocity = 7;
                        var flutter = 5;

                    }
                    else if (Code === 43) {                  /// Make it Heavy snow
                        var drops = [];
                        var dropColour = "rgba(255,255,255,1)";
                        var dropLengths = [3, 2, 3, 2, 3, 2, 3];
                        var dropSkews = [-3, -1, 0, 1, 3];
                        var maxDrops = 800;
                        var velocity = .5;
                        var flutter = 8;

                    }
                    else if (Code === 9) {                  /// Make it rain
                        var drops = [];
                        var dropColour = "rgba(255,255,255,0.41)";
                        var dropLengths = [4, 5, 3, 6, 2, 3, 3];
                        var dropSkews = [0, 0.2, 0, 0, 0.1];
                        var maxDrops = 100;
                        var velocity = 1;
                        var flutter = 1;
                    }
                    else if (Code === 3) {                  /// Make it ThunderStorms
                        var drops = [];
                        var dropColour = "rgba(255,255,255,0.5)";
                        var dropLengths = [10, 8, 8, 8, 7, 15, 9];
                        var dropSkews = [-0.2, -0.3, -0.2, -0.2, 0.1];
                        var maxDrops = 1000;
                        var velocity = .8;
                        var flutter = .1;
                    }



                    // Raindrop class
                    class Droplet {
                        constructor(x, y, length, skew) {
                            this.x = x;
                            this.y = y;
                            this.length = length;
                            this.skew = skew;
                        }
                        // Move method
                        move() {
                            // Increment x & y 
                            this.y += this.length / velocity;
                            this.x += this.skew / flutter;
                            // Set limits
                            if (this.y > height) {
                                this.y = 0;
                            }
                            if (this.x > width || this.x < 0) {
                                this.y = 0;
                                this.x = Math.floor(Math.random() * width);
                            }
                        }
                        // Draw method
                        draw(ctx) {
                            ctx.beginPath();
                            ctx.moveTo(this.x, this.y);
                            ctx.lineTo(this.x + this.skew, this.y + this.length);
                            ctx.strokeStyle = dropColour;
                            ctx.stroke();
                        }
                    }

                    // Create drops and push to array
                    for (let i = 0; i < maxDrops; i++) {
                        let instance = new Droplet(
                            Math.floor(Math.random() * width),
                            Math.floor(Math.random() * height),
                            randVal(dropLengths),
                            randVal(dropSkews)
                        );
                        drops.push(instance);
                    }

                    // Animation loop
                    function loop() {
                        // Clear Canvas  
                        ctx.clearRect(0, 0, width, height);
                        // Draw / Move drops
                        for (let drop of drops) {
                            drop.move();
                            drop.draw(ctx);
                        }

                        var Animate = requestAnimationFrame(loop);



                        /////////////////////////////////////////////////// With Class///////////////////////////////////////////////////

                        var OnOff = $('#ONOFF').attr('class');

                        if (OnOff === 'active') {

                        }

                        if (OnOff === 'inactive') {
                            $("#weathercanvas").fadeOut(1300, "linear");
                            $("#Switch").fadeOut(1300, "linear");
                            function Kill() {
                                cancelAnimationFrame(Animate);
                            }
                            setTimeout(function () {
                                ctx.clearRect(0, 0, width, height);
                            }, 1700);

                            Kill();


                            //cancelAnimationFrame(Animate);
                            // ctx.clearRect(0, 0, width, height);
                            //clearTimeout(Animate);
                            //console.log(OnOff);  
                        }
                        /////////////////////////////////////////////////// With Class///////////////////////////////////////////////////


                    }
                    // Begin animation
                    loop();

                    // Resize canvas - responsive
                    window.addEventListener('resize', resize);
                    function resize() {
                        width = canvas.width = window.innerWidth;
                        height = canvas.height = window.innerHeight;
                    }

                    // Function for random array values
                    function randVal(array) {
                        return array[Math.floor(Math.random() * array.length)];
                    }


                });


                //////////////////////////////////////////////////////////////////////////////
            }//End of showError function
        } //End of Error response    

    }////////BtnOnOff function
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






    render() {
        return (
            <div className="precipPage">

                <label id="Switch" >
                    <input id="ONOFF" type="checkbox" className={this.state.isActive ? 'inactive' : 'active'} onClick={this.toggleState}></input>
                    <div className="slider round"></div>
                </label>
                <canvas id="weathercanvas" />
            </div>
        );
    }
}

