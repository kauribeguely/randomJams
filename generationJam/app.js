
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

  const canvasWidth = 1;

  const camera = new THREE.PerspectiveCamera( 30, canvasWidth*window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 5;

  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize( canvasWidth*window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const controls = new OrbitControls( camera, renderer.domElement );
  controls.enableDamping = true;
  controls.update();

  const lightGroup = new THREE.Group();
  // lightGroup.position.z = 1;
  scene.add(lightGroup);

  const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
  // lightGroup.add( directionalLight );

  const objGroup = new THREE.Group();
  scene.add(objGroup);


  // var spiral = function(segLength, size)
  function spiral(segLength, size)
  {
     var geometry = new THREE.BufferGeometry();
     for(var t = 0; t < parseInt(size); t+= parseFloat(segLength))
     {
       var _x = Math.pow(t, .5) * Math.cos(t);
       var _y = Math.pow(t, .5) * Math.sin(t);
       geometry.vertices.push(new THREE.Vector3(_x, _y, 10));
     }
     return geometry;
  }

  const lineGeo = spiral(10, 10);
  // dotGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0,0,0]), 3));
  const lineMaterial = new THREE.PointsMaterial({color: 0xff0000 });

  const line = new THREE.Points(lineGeo, lineMaterial);
  scene.add(line);


  function toRad(deg)
  {
    return 0.0175*deg;
  }


  function animate()
  {
  	requestAnimationFrame( animate );

  	renderer.render( scene, camera );
  }
  animate();
