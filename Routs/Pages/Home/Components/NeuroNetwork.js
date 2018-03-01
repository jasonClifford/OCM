import React, { Component } from 'react';
import $ from 'jquery';
import * as THREE from 'three';
import PropTypes from 'prop-types';
import React3 from 'react-three-renderer';
import ObjectModel from 'react-three-renderer-objects';

var OBJLoader = require('three-obj-loader')(THREE);

var OrbitControls = require('three-orbit-controls')(THREE);
//import exampleObject from "./Model/man.obj"



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
        this.setState({ controls: this.GetControls(this.refs.camRef) });

       
        
        this.THREE = THREE;
        const objLoader = new this.THREE.OBJLoader();
        objLoader.load("./Model/man.obj", geometry => {
            geometry.center();
        })
    }

    render() {
       
        

        return (<React3
            mainCamera="camera"
            width={700} //{700} just designate a px value.  window.innerWidth
            height={700} //{700}                            window.innerHeight 
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
//https://github.com/shlomizadok/shalosh