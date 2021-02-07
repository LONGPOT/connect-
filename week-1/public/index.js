import * as THREE from '/build/three.module.js';
// import { gltfLoader } from '/json/loaders/gltfLoader.js';
import { GLTFLoader } from '/json/loaders/GLTFLoader.js';

let mouseX = 0, mouseY = 0;
const scene = new THREE.Scene();
scene.background = new THREE.Color('white');
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

// const camera = new THREE.OrthographicCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 10;

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.z = 150;
camera.position.y = 550;

const light = new THREE.AmbientLight(0xffffff, 10); // soft white light
const point_light = new THREE.PointLight(0xffffff, 100, 150);
point_light.position.set(60, 120, 100);
scene.add(light);
scene.add(point_light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
document.addEventListener( 'mousemove', onDocumentMouseMove );

const loader = new GLTFLoader();
let truck = new THREE.Scene();

// load: function (url, onLoad, onProgress, onError)
loader.load('/Assets/car.gltf',
    function (gltf) {
        console.log(gltf)
        gltf.scene.scale.set(10, 10, 10);
        truck = gltf.scene;
        scene.add(truck);
        console.log("object added")
    },
    // undefined,
    function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    },
    function (error) {
        console.log('Error when loading models');
    }
)

// const box = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({
//     color: 0x00ff00,
// });
// const cube = new THREE.Mesh(box, material);
// scene.add(cube);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
})


const animate = function () {
    requestAnimationFrame(animate);

    // truck.rotation.x += 0.01;
    // truck.rotation.y += 0.01;
    camera.position.x += ( mouseX - camera.position.x ) * .05;
	camera.position.y =50;

	camera.lookAt( scene.position );
    renderer.render(scene, camera);
};

function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX ) / 2;
				//mouseY = ( event.clientY - windowHalfY ) / 2;

			}

			// function animate() {
			// 	requestAnimationFrame( animate );
			// 	render();
			// }

			function render() {

				// camera.position.x += ( mouseX - camera.position.x ) * .05;
				// camera.position.y += ( - mouseY - camera.position.y ) * .05;

				// camera.lookAt( scene.position );

				// renderer.render( scene, camera );

			}


animate();