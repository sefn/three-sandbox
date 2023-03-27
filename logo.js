

import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { AsciiEffect } from 'three/addons/effects/AsciiEffect.js';

let camera, scene, renderer, controls, effect, logoObject;
var asciiSwitch = parent.document.getElementById("asciiSwitch"); 

if (localStorage.getItem('ascii') === 'true') {
    init(true);
    animateAscii();
    render(true);
} else {
    init(false);
    animateNormal();
    render(false);
}

asciiSwitch.addEventListener('click', function () {
    if (asciiSwitch.checked) {
        localStorage.setItem('ascii', true);
        window.location.reload();
    }
    else {
        localStorage.setItem('ascii', false);
        window.location.reload();
    }
    
});

function init(asciiMode) {
    // const container = document.getElementById('hero');
    const container = document.createElement( 'div' );

    document.body.appendChild(container);
    camera = new THREE.PerspectiveCamera(22, window.innerWidth / window.innerHeight, 0.2, 20);
    camera.position.set(-0.0, 1, 0.0);
    scene = new THREE.Scene();

    // const pointLight1 = new THREE.PointLight(0xffffff);
    // pointLight1.position.set(500, 500, 500);
    // scene.add(pointLight1);

    // const pointLight2 = new THREE.PointLight( 0xffffff, 0.25 );
    // pointLight2.position.set( - 500, - 500, - 500 );
    // scene.add( pointLight2 );

    new GLTFLoader()
        .setPath('./assets/')
        .load('Company404_logo_3d_v2.gltf', function (gltf) {
            logoObject = gltf.scene;
            scene.add(gltf.scene);
        });

    renderer = new THREE.WebGLRenderer({ antialias: true });


    if (asciiMode == true) {
        // effect = new AsciiEffect( renderer, ' .:-+*=%@#', { invert: true } );
        // effect = new AsciiEffect( renderer, " .,:ilwW", { invert: true } );
        effect = new AsciiEffect(renderer, " .:-+*#%@", { invert: true });
        effect.setSize(window.innerWidth, window.innerHeight);
        effect.domElement.style.color = 'white';
        effect.domElement.style.backgroundColor = 'black';
        container.appendChild(effect.domElement);
    }
    else {
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild(renderer.domElement);
    }

    const environment = new RoomEnvironment();
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    if (asciiMode == false) {
        scene.background = new THREE.Color( 0xeeeeee );
    }

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
    document.addEventListener('mousemove', onMouseMove, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    effect.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    // calculate the rotation based on the mouse position
    const rotationX = (event.clientX / window.innerWidth) * 2 - 1;
    const rotationY = (event.clientY / window.innerHeight) * 2 - 1;

    logoObject.rotation.x = rotationY;
    logoObject.rotation.y = rotationX;
}

function animateNormal() {
    requestAnimationFrame(animateNormal);

    if (logoObject) {
    // logoObject.rotation.z += 0.0005;
    logoObject.rotation.y = Math.sin(Date.now() * 0.0003) * Math.PI * 0.05;
    logoObject.rotation.z = Math.sin(Date.now() * 0.0003) * Math.PI * 0.08;

    }

    controls.update();
    renderer.render(scene, camera);

    // render(asciiMode);
}

function animateAscii() {
    requestAnimationFrame(animateAscii);

    if (logoObject) {
        // logoObject.rotation.z += 0.0005;
        logoObject.rotation.y = Math.sin(Date.now() * 0.0003) * Math.PI * 0.05;
        logoObject.rotation.z = Math.sin(Date.now() * 0.0003) * Math.PI * 0.08;

    }

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

