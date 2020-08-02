import React, { Component } from "react";
import * as THREE from 'three'
interface VisualizerProps {

}

interface VisualizerStats {

}

class Visualizer extends Component<VisualizerProps, VisualizerStats> {
    renderer = new THREE.WebGLRenderer();
    mount: HTMLDivElement | null = null;
    componentDidMount = () => {
        this.mount!.appendChild(this.renderer.domElement);

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    render = () => {
        return (
            <div className={`Canvas `} ref={(mount) => { this.mount = mount }}>
            
            </div>
        )
    }
}

export default Visualizer;
