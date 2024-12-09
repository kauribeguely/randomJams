
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

  const canvasWidth = 1;

  const camera = new THREE.PerspectiveCamera( 30, canvasWidth*window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 5;

  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
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

  // Create an empty geometry







  // Create an array to hold the line's vertices
  // const vertices = [];

  // let vertexCont = 300;
  // // Generate vertices in a loop
  // for (let i = 0; i < vertexCont; i++) {
  //   const percent = i / vertexCont;
  //   // const x = Math.pow(i, .5) * Math.cos(toRad(percent*360));; // Incremental x positions
  //   // const y = Math.pow(i, .5) * Math.sin(toRad(percent*360)); // Example: y based on a sine wave
  //   const x = percent * 2 * Math.cos(toRad(percent*360*6));; // Incremental x positions
  //   const y = percent * 2 * Math.sin(toRad(percent*360*6)); // Example: y based on a sine wave
  //   // const x = Math.cos(toRad(percent*360*3));; // Incremental x positions
  //   // const y = Math.sin(toRad(percent*360*3)); // Example: y based on a sine wave
  //   const z = (percent - 0.5) * 2 ; // Keep z constant
  //   vertices.push(x, y, z);
  // }
  //
  // // Convert the vertices array into a Float32Array and set it as the geometry's position attribute
  // geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  //
  // // Create a line material
  // const material = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 0.21,});
  //
  // // Create the line object
  // const line = new THREE.Line(geometry, material);
  //
  // // Add the line to the scene
  // scene.add(line);

  // makeSpiral(6, 0.5, 0x000000, 0);
  // makeSpiral(6, 0.5, 0x000000, 45);
  // makeSpiral(6, 0.5, 0x000000, 90);
  // makeSpiral(6, 0.5, 0x000000, 135);
  // makeSpiral(6, 0.5, 0x000000, 180);
  // makeSpiral(6, 0.5, 0x000000, 225);
  // manySpirals(10);

  let sine1 = sine(100, 4, offset);

  // goal, a sine that waves over time
    // add offset in animate, remove and add new sine each time (less intensive way? ask gpt)

  function sine(vertexCount, length, offset)
  {

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    // Generate vertices in a loop
    for (let i = 0; i < vertexCount; i++)
    {
      const percent = i / vertexCount;
      const x = (percent-0.5) * length; // Incremental x positions
      const y = Math.sin(toRad(percent*360));
      const z = 0; // Keep z constant
      vertices.push(x, y, z);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const material = new THREE.LineBasicMaterial({ color: 0x000000});
    const line = new THREE.Line(geometry, material);
    objGroup.add(line);
    return line;
  }


  function manySpirals(spiralCount)
  {
    for(let i = 0; i < spiralCount; i++)
    {
      let percent = i/spiralCount;
      // let angle = i * 15;
      let angle = percent * 360;
      // let color = colorFromPercent(percent);
      let color = col(percent);
      // let angle = Math.sin(toRad(percent*180)) * 90;
      // makeSpiral(6, 0.5, parseInt('0x'+color), angle);
      makeSpiralDot(6, 0.5, parseInt('0x'+color), angle);

    }
  }

  function col(percent)
  {
    let color = '000000';
    if(Math.round(percent*10) % 3 == 0)
    {
      color = '1a628c';
    }
    else if(Math.round(percent*10) % 2 == 0)
    {
      color = 'ffb400';
    }
    else if(Math.round(percent*10) % 4 == 0)
    {
      color = '0051b5';
    }
    return color;
  }

  function colorFromPercent(percent)
  {
    // Calculate the color components (R, G, B)
    let r = Math.floor(percent * 255); // Red goes from 0 to 255
    let g = Math.floor(percent * 255); // Green goes from 0 to 255
    let b = Math.floor(percent * 255); // Blue goes from 0 to 255

    // Convert RGB to a hex color
    let color = (r << 16) | (g << 8) | b; // Combine RGB to hex format
    return color;
  }

    // makeSpiral(6, 0.5, 0xff0000);
    // makeSpiral(12, 0.5, 0x00ff00);
    // makeSpiral(18, 0.5, 0x0000ff);
  // function makeSpiral(repeats, size, color)
  function makeSpiral(repeats, size, color, offset)
  {

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    let vertexCont = 600;
    // Generate vertices in a loop
    for (let i = 0; i < vertexCont; i++) {
      const percent = i / vertexCont;
      // const x = Math.pow(i, .5) * Math.cos(toRad(percent*360));; // Incremental x positions
      // const y = Math.pow(i, .5) * Math.sin(toRad(percent*360)); // Example: y based on a sine wave
      const x = percent * size * Math.cos(toRad(percent*360*repeats+offset));; // Incremental x positions
      const y = percent * size * Math.sin(toRad(percent*360*repeats+offset)); // Example: y based on a sine wave
      // const x = Math.cos(toRad(percent*360*3));; // Incremental x positions
      // const y = Math.sin(toRad(percent*360*3)); // Example: y based on a sine wave
      const z = (percent - 0.5) * size ; // Keep z constant
      vertices.push(x, y, z);
    }

    // Convert the vertices array into a Float32Array and set it as the geometry's position attribute
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Create a line material
    const material = new THREE.LineBasicMaterial({ color: color, linewidth: 0.21,});

    // Create the line object
    const line = new THREE.Line(geometry, material);

    // Add the line to the scene
    // scene.add(line);
    objGroup.add(line);
  }

  function makeSpiralDot(repeats, size, color, offset)
  {

    // const vertices = [];

    let vertexCont = 600;
    // Generate vertices in a loop
    for (let i = 0; i < vertexCont; i++)
    {

      const percent = i / vertexCont;
      const x = percent * size * Math.cos(toRad(percent * 360 * repeats + offset));
      const y = percent * size * Math.sin(toRad(percent * 360 * repeats + offset));
      const z = (percent - 0.5) * size; // Incremental z

      // Create vertices array for geometry
      const pos = [x, y, z];
      const dot = makeDot(pos, color, 0.01);

      objGroup.add(dot);

    }


    // Convert the vertices array into a Float32Array and set it as the geometry's position attribute
    // geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    // Create a line material

  }

  function makeDot(pos, color, size)
  {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));

    // Use PointsMaterial for a single point
    const material = new THREE.PointsMaterial({ color: color, size: size }); // Adjust size as needed
    const dot = new THREE.Points(geometry, material);
    return dot
  }






  var percentX, percentY, mouseX, mouseY;

  document.onmousemove = function(evt)
  {
    mouseX = evt.clientX;
    mouseY = evt.clientY;

    percentX = mouseX/window.innerWidth;
    percentY = mouseY/window.innerHeight;

    // objGroup.rotation.z = percentX * toRad(360);
  }




  function toRad(deg)
  {
    return 0.0175*deg;
  }

  let delta, perSecond;
  let timeLastFrame = new Date().getTime();
  function animate()
  {
    delta = new Date().getTime() - timeLastFrame;
    perSecond = delta / 1000;
    timeLastFrame = new Date().getTime();

    // objGroup.rotation.z += toRad(1);

  	requestAnimationFrame( animate );
  	renderer.render( scene, camera );
  }
  animate();
