import React from 'react';
import $ from 'jquery';
import Video from 'react-html5video';

const FlyInVid = 'https://s3.ca-central-1.amazonaws.com/ocmediavideo/Main.mp4';
const InkVid = 'https://s3.ca-central-1.amazonaws.com/ocmediavideo/Ink.mp4';

export default class BannerVideo extends React.Component {




    render() {
        return (
            <div>
                <Video id="video1" autoPlay
                        muted
                        playsInline                               //controls autoPlay loop muted
                        poster="https://sourceposter.jpg"
                        ref="video1"
                        onEnded={() => {
                            // Do stuff
                            //this.refs.video2.videoEl.pause();
                            //var VidTime = this.refs.video1.videoEl.playbackRate;
                            //console.log(VidTime);
                            document.getElementById('video1').style.display = "none";
                            this.refs.video2.videoEl.play();


                        }}>

                        <source src={FlyInVid} type="video/mp4" />
                    </Video>

                    <Video id="video2" //controls autoPlay loop muted
                        muted
                        playsInline
                        ref="video2"
                        onEnded={() => {
                            // Do stuff
                            //this.refs.video2.videoEl.pause();
                            //var VidTime = this.refs.video1.videoEl.playbackRate;
                            //console.log(VidTime);
                            this.refs.video2.videoEl.play();


                        }}>

                        <source src={InkVid} type="video/mp4" />
                    </Video>
            </div>
        );
    }
}

