import React, { Component } from 'react';
import $ from 'jquery';
import * as THREE from 'three';
import PropTypes from 'prop-types';
import React3 from 'react-three-renderer';
var OrbitControls = require('three-orbit-controls')(THREE)


class NeuroNetwork extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { controls: {} };
    }

    GetControls(camRef) {
        let refRenderElement = document.getElementsByTagName("canvas")[0];
        const controls = new OrbitControls(camRef, refRenderElement);
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.05;
        return controls;
    }

    componentDidMount() {
        this.setState({ controls: this.GetControls(this.refs.camRef) })
    }

    render() {
        return (<React3
            mainCamera="camera"
            width={1600} //{700} just designate a px value.  window.innerWidth
            height={1600} //{700}                            window.innerHeight 
            onAnimate={this.state.controls.update}
        >
            <scene>
                <perspectiveCamera
                    name="camera"
                    lookAt={new THREE.Vector3(0, 0, 0)}
                    position={new THREE.Vector3(0, 0, 5)}
                    ref="camRef"
                />
                <mesh>
                  
                   <boxGeometry
                        width={1}
                        height={1}
                        depth={1} />

                   <meshBasicMaterial
                       wireframe={true}
                        color={0x00fff0}
                        
                        
                    />
                </mesh>
            </scene>
        </React3>);
    }
}

export default NeuroNetwork;

//https://github.com/benwinding/Test-react-three-renderer/blob/master/src/index.js

//https://stackoverflow.com/questions/41248287/how-to-connect-threejs-to-react