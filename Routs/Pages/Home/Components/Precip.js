import React from 'react';
import $ from 'jquery';


export default class Precip extends React.Component {

    componentDidMount() {
        this.BtnOnOff();

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
        //this.BtnOnOff();
       // console.log(this.state.isActive);
    } 

    BtnOnOff() {
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var DateApi = "http://ip-api.com/json";

        $("#ip_content").html("Waiting...");
        $.getJSON(DateApi, {
            format: "jsonp"
        })

            .done(function (response) {
                var result = ""
                var City = response.city
                var Region = response.region
                var Country = response.country
                console.log(City);

                if (response.city === "") {
                    //default to Cal
                    var City = "Calgary";
                }
                //console.log(City);

                // show all the props returned
                for (var prop in response) {
                    result += prop + ": " + response[prop] + "<br>";
                }

                // set the new values 
                $("#ip_content").html(result);
                $("#place").html(City + " " + Region + " " + Country);

                // console.log(City +" "+ Region +" "+ Country);  


                /////////////////////////////////  Weather  ////////////////////////////////////////////////////////// 
                var Weather = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast " +
                    "where woeid in (select woeid from geo.places(1) where text='" + City + "," + Region + "') and u='c'&format=json";

                $.getJSON(Weather, function (data) {

                    const WTemp = data.query.results.channel.item.condition.temp;
                    const Code = data.query.results.channel.item.condition.code;
                    const WethLocalCity = data.query.results.channel.location.city;
                    const WethLocalReg = data.query.results.channel.location.region;
                    const SunRise = data.query.results.channel.astronomy.sunrise;
                    const SunSet = data.query.results.channel.astronomy.sunset;


                    //console.log(SunSet);
                    $("#weather").html(WethLocalCity + " " + WethLocalReg + " temperature is: " + WTemp + "<br> Weather Code: " + Code + "<br> Sunrise was at: " + SunRise + "<br> Sunset will be at: " + SunSet);
                    //});


                    /////////////////////////////////////// Precipitation Animation //////////////////////////////////////////////////////////////////////

                    // Ref canvas & get context
                    const canvas = document.getElementById('weathercanvas');
                    const ctx = canvas.getContext('2d');
                    //console.log(Code);

                    //var Code =41;
                    // Weather Types/////////////
                    var liteSnow = 13;     //code 13 for snow light fluries.  
                    var snow = 16;         //code 13 for snow fluries. 
                    var hevySnow = 41;     //code 41 for Heavy snow. 
                    var hevySnow2 = 43;    //code 43 for Heavy snow.  
                    var DRain = 9;          //code 9 for drizzel
                    var HRain = 3;          //code 3/4 for Thunderstorms/severe thunderstorms

                    //var Code = 43; // Code will take in the current weather code.


                    // Resize canvas
                    let width = canvas.width = window.innerWidth;
                    let height = canvas.height = window.innerHeight;

                    // Variables

                    if (Code >= 17 && Code <= 18 || Code === 42) {                       /// Make it lite snow
                        var drops = [];
                        var dropColour = "rgba(255,255,255,1)";
                        var dropLengths = [3, 3, 3, 3, 3, 3, 3];
                        var dropSkews = [-2, -1, 0, 1, 2];
                        var maxDrops = 100;
                        var velocity = 6;
                        var flutter = 5;

                    }
                    else if (Code >= 13 && Code <= 16 || Code === 42) {                  /// Make snow
                        var drops = [];
                        var dropColour = "rgba(255,255,255,1)";
                        var dropLengths = [3, 3, 3, 3, 3, 3, 3];
                        var dropSkews = [-2, -1, 0, 1, 2];
                        var maxDrops = 500;
                        var velocity = 2;
                        var flutter = 5;

                    }
                    else if (Code === 41 || Code === 43) {                  /// Make it Heavy snow
                        var drops = [];
                        var dropColour = "rgba(255,255,255,1)";
                        var dropLengths = [3, 2, 3, 2, 3, 2, 3];
                        var dropSkews = [-3, -1, 0, 1, 3];
                        var maxDrops = 800;
                        var velocity = .5;
                        var flutter = 8;

                    }//(angle >= 90 && angle <= 180)
                    else if (Code >= 5 && Code <= 12 || Code >= 37 && Code <= 39 || Code === 35) {                  /// Make it rain
                        var drops = [];
                        var dropColour = "rgba(255,255,255,0.41)";
                        var dropLengths = [4, 5, 3, 6, 2, 3, 3];
                        var dropSkews = [0, 0.2, 0, 0, 0.1];
                        var maxDrops = 100;
                        var velocity = 1;
                        var flutter = 1;
                    }
                    else if (Code >= 1 && Code <= 4 || Code === 45) {                  /// Make it ThunderStorms
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

                /////////////////////////////////////// Precipitation Animation End  //////////////////////////////////////////////////////////////////////      



            });
    }////////End of update canvas
    
    
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

