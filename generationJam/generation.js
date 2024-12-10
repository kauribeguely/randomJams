
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
const loader = new GLTFLoader();


  const canvasWidth = 1;
  const orthographicAdapt = 1000;

  const camera = new THREE.PerspectiveCamera( 30, canvasWidth*window.innerWidth / window.innerHeight, 0.1, 1000 );


  // const camera = new THREE.OrthographicCamera( window.innerWidth / - orthographicAdapt, window.innerWidth / orthographicAdapt, window.innerHeight / orthographicAdapt, window.innerHeight / - orthographicAdapt, 1, 1000 );

  camera.position.z = 5;

  let allSrc = ['obj/starThick.glb', 'obj/heart.glb', 'obj/laptopIso.glb', 'obj/phoneIso.glb']

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
  lightGroup.add( directionalLight );

  const ambLight = new THREE.AmbientLight( 0xffffff, 0.5);
  lightGroup.add( ambLight );

  const objGroup = new THREE.Group();
  scene.add(objGroup);


  let loopedGroup = [];
  // Create an empty geometry

  class AnimatableObj
  {
    constructor(src, scale, sineHeight, wavePerSec, waveOffset, xSpeed)
    {
      //load from src?
      loadGlb(src, scale, this);
      this.sineHeight = sineHeight;
      this.wavePerSec = wavePerSec;
      this.waveOffset = waveOffset;
      this.xSpeed = xSpeed;
      this.animProgress = 0;
    }

    animate(delta)
    {
      //sine height, wave per second, x speed
      this.animProgress += delta/1000/3;
      if(this.obj)
      {
        // this.obj.rotation.z += 0.2;
        let test = this.sineHeight * Math.sin(toRad(this.animProgress*(this.wavePerSec*360+this.waveOffset)));
        this.obj.position.y = test;
        // console.log(test);
        this.obj.position.x = this.animProgress * this.xSpeed;
        this.obj.rotation.z = this.animProgress * toRad(-360);
      }
    }
  }






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

  // // let sine1 = sine(100, 20, offset, 10);
  // let sine1 = sine(500, 100, 0, 10);
  // // let sine1 = sine(500, 100, '1a628c', 0, 10);
  // objGroup.add(sine1);
  // let sine2 = sine(500, 100, 45, 10);
  // // let sine2 = sine(500, 100, 'ffb400', 45, 10);
  // objGroup.add(sine2);
  // sineLoop(3);


  // loadStar();

  let star1 = new AnimatableObj('obj/starThick.glb', 0.05, 1, 1, 0, 2);
  let star2 = new AnimatableObj('obj/starThick.glb', 0.05, 1, 1, 45, 2);



  // loadThenSpiral('obj/heart.glb', 0.3, 6, 11, 0);
  // loadThenSpiral('obj/starThick.glb', 0.3, 6, 11, 180);

  // manyLoadSpiral('obj/starThick.glb', 4, 0.3, 3, 10);
  // manyLoadSpiral('obj/laptopIso.glb', 4, 0.3, 3, 10);

  // makeSpiral(3, 10, 0x1a628c, 180);

  function makeManyRandomAnimatables(count)
  {

  }

  let allAnim = [];
  function makeRandomAnimatable()
  {
    // const randomHeight = Math.random()*0.5+0.5; //between 0.5 and 2?
    const randomHeight = Math.random()*0.2+0.2; //between 0.5 and 2?
    const randWavePS = Math.random()*0.5+0.25; //between 0.5 and 2?
    const randOffset = Math.random()*360;
    const randSpeed = Math.random()*3+1;
    const constSpeed = 1;
    const randSrc = allSrc[Math.floor(Math.random()*allSrc.length)];

    // let random = new AnimatableObj('obj/starThick.glb', 0.05, randomHeight, randWavePS, randOffset, randSpeed);
    let random = new AnimatableObj(randSrc, 0.2, 0.3, 1, 0, 3);
    allAnim.push(random);
  }

  function manyLoadSpiral(src, spiralCount, objScale, spiralRepeats, size)
  {
    loader.load(src,	function ( gltf )
    {
      // deskObj
      const obj = gltf.scene;
      obj.scale.set(objScale, objScale, objScale);
      for (let i = 0; i < spiralCount; i++)
      {
        let percent = i / spiralCount;
        objectSpiral(obj, spiralRepeats, size, percent*360);
      }
    });
  }

  // goal, a sine that waves over time
    // add offset in animate, remove and add new sine each time (less intensive way? ask gpt)

  // function sine(vertexCount, length, offset, color, waveCount)
  function sine(vertexCount, length, offset, waveCount)
  {

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    // Generate vertices in a loop
    for (let i = 0; i < vertexCount; i++)
    {
      const percent = i / vertexCount;
      const x = (percent-0.5) * length; // Incremental x positions
      // const x = percent * length; // Incremental x positions
      const y = Math.sin(toRad(waveCount*percent*360+offset));
      const z = Math.cos(toRad(waveCount*percent*360+offset)); // Keep z constant
      // const z = 0; // Keep z constant
      vertices.push(x, y, z);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    // const material = new THREE.LineBasicMaterial({ color: parseInt('0x'+color)});
    const material = new THREE.LineBasicMaterial({ color: 0xffb400});
    const line = new THREE.Line(geometry, material);
    objGroup.add(line);
    return line;
  }


  function sineLoop(loopMax)
  {
    for (let i = 0; i < loopMax; i++)
    {
      let percent = i / loopMax;
      let sineThis = sine(500, 100, percent*360, 10);

      objGroup.add(sineThis);
    }
    // loop(20, () =>
    // {
    //
    // });
  }

  function loop(loopMax, toDo)
  {
    for (let i = 0; i < loopMax; i++)
    {
      toDo();
    }
  }


  let star;
  let starScale = 0.05;
  function loadStar()
  {
    // loader.load('obj/deskcartoon.glb',	function ( gltf )
    // loader.load('obj/star1.glb',	function ( gltf )
    // loader.load('obj/heart.glb',	function ( gltf )
    loader.load('obj/starThick.glb',	function ( gltf )
    {
      // deskObj
      star = gltf.scene;
      star.scale.set(starScale, starScale, starScale);
      scene.add(star);
      // objectSpiral(star, 6, 10, 0);
      // objectSpiral(star, 3, 10, 180);
      // objGroup.add( star );
      // rowLoop(star, 10);
      // rowLoopGroup(star, 40, 80, objGroup, [2, 0, 0]);


      // star.position.set(-1, 0, -1);

      // rowLoopGroup(star, 10, objGroup2, [1, 0, 0]);
      // randomAllLoop(star, 1000);
      // rowLoopGroup(star, 10, objGroup2);
    });
  }

  function loadGlb(url, scale, animObj)
  {
    loader.load(url,	function ( gltf )
    {
      // deskObj
      let obj = gltf.scene;
      obj.scale.set(scale, scale, scale);
      scene.add(obj);
      animObj.obj = obj;
      // return obj;
    });
  }

  function loadThenSpiral(src, objScale, repeats, size, offset)
  {
    loader.load(src,	function ( gltf )
    {
      // deskObj
      star = gltf.scene;
      star.scale.set(objScale, objScale, objScale);
      objectSpiral(star, repeats, size, offset);
      // objectSpiral(star, 3, 10, 180);
      // objGroup.add( star );
      // rowLoop(star, 10);
      // rowLoopGroup(star, 40, 80, objGroup, [2, 0, 0]);


      // star.position.set(-1, 0, -1);

      // rowLoopGroup(star, 10, objGroup2, [1, 0, 0]);
      // randomAllLoop(star, 1000);
      // rowLoopGroup(star, 10, objGroup2);
    });
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
      makeSpiral(6, 0.5, parseInt('0x'+color), angle);
      // makeSpiralDot(6, 0.5, parseInt('0x'+color), angle);

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

  function objectSpiral(obj, repeats, size, offset)
  {
    // const geometry = new THREE.BufferGeometry();
    // const vertices = [];

    let objCount = 100;
    // Generate vertices in a loop
    for (let i = 0; i < objCount; i++) {
      const percent = i / objCount;
      // const x = Math.pow(i, .5) * Math.cos(toRad(percent*360));; // Incremental x positions
      // const y = Math.pow(i, .5) * Math.sin(toRad(percent*360)); // Example: y based on a sine wave
      const x = percent * size * Math.cos(toRad(percent*360*repeats+offset));; // Incremental x positions
      const y = percent * size * Math.sin(toRad(percent*360*repeats+offset)); // Example: y based on a sine wave
      // const x = Math.cos(toRad(percent*360*3));; // Incremental x positions
      // const y = Math.sin(toRad(percent*360*3)); // Example: y based on a sine wave
      const z = (percent - 0.5) * size ; // Keep z constant
      // vertices.push(x, y, z);
      const newObj = obj.clone();
      newObj.position.set(x, y, z);
      objGroup.add(newObj);
      loopedGroup.push(newObj);
    }
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
    return dot;
  }



document.onkeydown = function(evt)
{
  switch(evt.key)
    {
      case " ":
        // preventDefault
        makeRandomAnimatable();

        break;



    }
  // if(evt.key == " ")
  // {
  //   console.log
  //   // let star1 = new AnimatableObj('obj/starThick.glb', 0.05, 1, 1, 0, 2);
  //   makeRandomAnimatable();
  // }
}


  var percentX, percentY, mouseX, mouseY;

  document.onmousemove = function(evt)
  {
    mouseX = evt.clientX;
    mouseY = evt.clientY;

    percentX = mouseX/window.innerWidth;
    percentY = mouseY/window.innerHeight;

    // objGroup.rotation.z = percentX * toRad(90);

    // objGroup.position.x = percentX * -18;
    // objGroup.rotation.x = toRad(percentX * 360);


    // sine1.position.x = percentX * -28;
    // sine2.position.x = percentX * -20;

    let objectCount = 0;
    loopedGroup.forEach((child) => {
        // if (child.isMesh) { // Check if the object is a Mesh
        // child.rotation.y = toRad(180) * percentX + objectCount * toRad(15); // Adjust the rotation speed as needed
        // child.rotation.x = toRad(90) * -percentY + objectCount * toRad(15); // Adjust the rotation speed as needed
        // child.rotation.y = toRad(180) * percentX; // Adjust the rotation speed as needed
        // child.rotation.x = toRad(90) * -percentY; // Adjust the rotation speed as needed

        // child.rotation.z = toRad(90) * -percentX + objectCount * toRad(15); // Adjust the rotation speed as needed
        // child.rotation.z = toRad(90) * -percentX + objectCount * toRad(90); // Adjust the rotation speed as needed

        // child.rotation.z = toRad(percentX*90-45); // Adjust the rotation speed as needed

      });
  }




  function toRad(deg)
  {
    return 0.0175*deg;
  }

  let delta, perSecond;
  let timeLastFrame = new Date().getTime();

  let startTime = new Date().getTime();
  let timePassed = 0;
  function animate()
  {
    delta = new Date().getTime() - timeLastFrame;
    perSecond = delta / 1000;
    timeLastFrame = new Date().getTime();

    // objGroup.rotation.x += toRad(perSecond * 100);
    objGroup.rotation.z += toRad(perSecond * 30);
    loopedGroup.forEach((child) => {
        child.rotation.z -= toRad(perSecond * 30);

      });

      timePassed = (new Date().getTime() - startTime)/1000;
      // if(star)
      // {
      //   star.position.y = 0.5* Math.sin(toRad(timePassed*360));
      //   star.position.x = timePassed*3 - 5;
      // }

      // if(star1)
      // {
        star1.animate(delta);
        star2.animate(delta);
      // }


      allAnim.forEach(animatable => animatable.animate(delta));


    // objGroup.rotation.z += toRad(1);
    // sine1.position.x += perSecond * -3;
    // sine2.position.x += perSecond * -4;

    // sine1.rotation.x += toRad(perSecond * 100);
    // sine2.rotation.x += toRad(perSecond * 60);


  	requestAnimationFrame( animate );
  	renderer.render( scene, camera );
  }
  animate();
