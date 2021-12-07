import * as THREE from '/three/src/Three.js';
import { OrbitControls } from '/three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

camera.position.setX(10);
camera.position.setZ(25);
camera.position.y = 5;
camera.lookAt(0,0,0);

const geometry = new THREE.TorusGeometry(10,3,16,100);
const material = new THREE.MeshStandardMaterial( {color:0x2986CC});
const torus = new THREE.Mesh(geometry,material);
scene.add(torus);

//LIGHTS
const myplight = new THREE.PointLight(0xffffff);
myplight.position.set(20,20,20);

const amblight = new THREE.AmbientLight(0x9586a3);
scene.add(myplight,amblight);

//HELPERS
/*const lighthelper = new THREE.PointLightHelper(myplight);
const gridhelp = new THREE.GridHelper(200,50);
scene.add(lighthelper,gridhelp);*/

//CONTROLS
//const controls = new OrbitControls(camera, renderer.domElement);

function addStar(){
    const geometry = new THREE.SphereGeometry(0.25,24,24);
    const material = new THREE.MeshStandardMaterial({color: 0xdddddd});
    const star = new THREE.Mesh(geometry,material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 150 ) );

    star.position.set(x,y,z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

const spaceTex = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTex;

//Monster Hunter

const monsterTex = new THREE.TextureLoader().load('monstHunter.png');

const monstCube = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial({ map: monsterTex})
);

scene.add(monstCube);

//Moon
const moonTex = new THREE.TextureLoader().load('moon.jpg');
const normalMoonTex = new THREE.TextureLoader().load('moonNormal.jpg');

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3,32,32),
    new THREE.MeshStandardMaterial({
        map: moonTex,
        normalMap: normalMoonTex
    })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);

//ANIMATION
function animate(){//gameloop
    requestAnimationFrame(animate);

    torus.rotateX(0.01);
    torus.rotateY(0.0005);
    torus.rotateZ(0.01);

    //controls.update();

    renderer.render(scene,camera);
}

animate();

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function moveCamera(){
    const t = document.body.getBoundingClientRect().top;
    moon.rotateX(0.05);

    monstCube.rotateZ(0.01);

    camera.lookAt(0,0,0);
    camera.position.z = t * -0.01;
    camera.position.x = t * -0.002;
    camera.position.y = y * -0.0002;
}
document.body.onscroll = moveCamera;