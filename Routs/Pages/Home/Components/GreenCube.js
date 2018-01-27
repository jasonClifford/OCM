import React, { Component } from 'react';
import $ from 'jquery';
import * as THREE from 'three';
import PropTypes from 'prop-types';
import React3 from 'react-three-renderer';
var OrbitControls = require('three-orbit-controls')(THREE)


class GreenCube extends Component {
    render() {
        return <mesh>
            <boxGeometry width={200} height={200} depth={200} />
            <meshBasicMaterial color={0x00ee00} />
        </mesh>
    }
}

export default GreenCube;

/*https://stackoverflow.com/questions/41248287/how-to-connect-threejs-to-react*/