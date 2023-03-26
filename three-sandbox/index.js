

import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';

let camera, scene, renderer, controls, effect, logoObject1, logoObject2, logoObject3, logoObject4, logoObject5, logoObject6, logoObject7, logoObject8, logoObject9, logoObject10, logoObject11;

init();
animate();

function init() {

    const container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 0.2, 20 );
    camera.position.set( -0.0, 1, 0.0 );

    scene = new THREE.Scene();

    const pointLight1 = new THREE.PointLight( 0xffffff );
    pointLight1.position.set( 500, 500, 500 );
    scene.add( pointLight1 );

    // const pointLight2 = new THREE.PointLight( 0xffffff, 0.25 );
    // pointLight2.position.set( - 500, - 500, - 500 );
    // scene.add( pointLight2 );

    new GLTFLoader()
        .setPath( 'assets/' )
        .load( 'Company404_logo_3d.gltf', function ( gltf ) {
            scene.add( gltf.scene );
            logoObject1 = gltf.scene.children[0];
            logoObject2= gltf.scene.children[1];
            logoObject3 = gltf.scene.children[2];
            logoObject4 = gltf.scene.children[3];
            logoObject5 = gltf.scene.children[4];
            logoObject6 = gltf.scene.children[5];
            logoObject7 = gltf.scene.children[6];
            logoObject8 = gltf.scene.children[7];
            logoObject9 = gltf.scene.children[8];
            logoObject10 = gltf.scene.children[9];
            logoObject11 = gltf.scene.children[10];
        } );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;


    // effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
    // effect = new AsciiEffect( renderer, " .,:ilwW", { invert: true } );
    effect = new AsciiEffect( renderer, " .:-=+*#%@", { invert: true } );

    effect.setSize( window.innerWidth, window.innerHeight );
    effect.domElement.style.color = 'white';
    effect.domElement.style.backgroundColor = 'black';

    container.appendChild( effect.domElement );

    const environment = new RoomEnvironment();
    const pmremGenerator = new THREE.PMREMGenerator( renderer );

    // scene.background = new THREE.Color( 0xbbbbbb );
    scene.environment = pmremGenerator.fromScene( environment ).texture;

    controls = new OrbitControls( camera, effect.domElement );
    controls.enableDamping = true;
    controls.minDistance = 1;
    controls.maxDistance = 10;
    controls.target.set( 0, 0.0, 0 );
    controls.update();

    window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    effect.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );

    // if (logoObject) {
        // logoObject1.rotation.z += 0.0005;
        // logoObject2.rotation.z += 0.0005;
        // logoObject3.rotation.z += 0.0005;
        // logoObject4.rotation.z += 0.0005;
        // logoObject5.rotation.z += 0.0005;
        // logoObject6.rotation.z += 0.0005;
        // logoObject7.rotation.z += 0.0005;
        // logoObject8.rotation.z += 0.0005;
        // logoObject9.rotation.z += 0.0005;
        // logoObject10.rotation.z += 0.0005;
        // logoObject11.rotation.z += 0.0005;
    // }

    controls.update();

    render();

}

function render() {
    effect.render( scene, camera );
}

