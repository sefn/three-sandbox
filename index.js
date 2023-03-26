

import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';

let camera, scene, renderer, controls, effect, logoObject1, logoObject2, logoObject3, logoObject4, logoObject5, logoObject6, logoObject7, logoObject8, logoObject9, logoObject10, logoObject11;
// let asciiMode = false;

// init();
// animate();


var asciiEnabled = document.getElementById("asciiBtn");
var asciiDisabled = document.getElementById("noAsciiBtn");

if (localStorage.getItem('ascii') === 'true') {
    init(true);
    animateAscii();
    render(true);
} else {
    init(false);
    animateNormal();
    render(false);
}

asciiEnabled.addEventListener('click', function () {
    localStorage.setItem('ascii', true);
    window.location.reload();
    // init(true);
    // animateAscii();
    // render(true);
});

asciiDisabled.addEventListener('click', function () {
    localStorage.setItem('ascii', false);
    window.location.reload();
    // init(false);
    // animateNormal();
    // render(false);
});



function init(asciiMode) {

    const container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.2, 20);
    camera.position.set(-0.0, 1, 0.0);

    scene = new THREE.Scene();

    const pointLight1 = new THREE.PointLight(0xffffff);
    pointLight1.position.set(500, 500, 500);
    scene.add(pointLight1);

    // const pointLight2 = new THREE.PointLight( 0xffffff, 0.25 );
    // pointLight2.position.set( - 500, - 500, - 500 );
    // scene.add( pointLight2 );

    new GLTFLoader()
        .setPath('./assets/')
        .load('Company404_logo_3d_v2.gltf', function (gltf) {
            scene.add(gltf.scene);
            logoObject1 = gltf.scene.children[0];
            logoObject2 = gltf.scene.children[1];
            logoObject3 = gltf.scene.children[2];
            logoObject4 = gltf.scene.children[3];
            logoObject5 = gltf.scene.children[4];
            logoObject6 = gltf.scene.children[5];
            logoObject7 = gltf.scene.children[6];
            logoObject8 = gltf.scene.children[7];
            logoObject9 = gltf.scene.children[8];
            logoObject10 = gltf.scene.children[9];
            logoObject11 = gltf.scene.children[10];
        });

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;

    if (asciiMode == true) {
        // effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
        // effect = new AsciiEffect( renderer, " .,:ilwW", { invert: true } );
        effect = new AsciiEffect(renderer, " .:-=+*#%@", { invert: true });

        effect.setSize(window.innerWidth, window.innerHeight);
        effect.domElement.style.color = 'white';
        effect.domElement.style.backgroundColor = 'black';

        container.appendChild(effect.domElement);
    }
    else {
        container.appendChild(renderer.domElement);
    }

    const environment = new RoomEnvironment();
    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    // scene.background = new THREE.Color( 0xbbbbbb );
    scene.environment = pmremGenerator.fromScene(environment).texture;

    if (asciiMode == true) {
        controls = new OrbitControls(camera, effect.domElement);
    }
    else {
        controls = new OrbitControls(camera, renderer.domElement);
    }
    controls.enableDamping = true;
    controls.minDistance = 1;
    controls.maxDistance = 10;
    controls.target.set(0, 0.0, 0);
    controls.update();

    window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    effect.setSize(window.innerWidth, window.innerHeight);

}

function animateNormal() {
    requestAnimationFrame(animateNormal);

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
    renderer.render(scene, camera);

    // render(asciiMode);
}

function animateAscii() {
    requestAnimationFrame(animateAscii);

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
    effect.render(scene, camera);

    // render(asciiMode);
}

function render(asciiMode) {
    if (asciiMode == true) {
        effect.render(scene, camera);
    }
    else {
        renderer.render(scene, camera);
    }
}

