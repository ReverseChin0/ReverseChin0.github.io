import { forwardRef,useImperativeHandle} from 'react';

import './ThreeJSApp.css'
import * as THREE from 'three';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

const whiteBgndCol = new THREE.Color(0.9,0.95,1.0);
// const blackBgndCol = new THREE.Color(0.01,0.02,0.04);
// const currentColor = new THREE.Color(0.5,0.5,0.5);
const startPos = new THREE.Vector3(0,-2.5,0);
// let swappingMode = false;
// let darkmode = false;
// let tbackgnd = 0;
let currentSection=0;
const queueSections: number[] = [];  

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//   darkmode = event.matches;  
//   swappingMode = true;
//   tbackgnd = 0
// });


function doThree (){

  const animActions =    ['Chicken','Idle','Backflip','Mad','Shuffle','walkingDance','Chicken'];
  
  let canBeInterrupted = [false    , true , true    , true   , true  , true  , true  ];
  let previousAction:THREE.AnimationAction, activeAction : THREE.AnimationAction;
  let character: THREE.Object3D<THREE.Event> | null;
  let mixer: THREE.AnimationMixer | null;
  let clips: THREE.AnimationClip[] =[];
  let currentAnimstate = 0;
  let desiredState = 1;  

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  
  scene.background = whiteBgndCol;    

  const spotLight = new THREE.SpotLight(whiteBgndCol);
  scene.add(spotLight);
  spotLight.position.set(-10,30,0);
  // spotLight.castShadow = true;
  spotLight.angle = Math.PI / 4;  

  scene.fog = new THREE.Fog(whiteBgndCol,10,19);

  const ambientLight = new THREE.AmbientLight(whiteBgndCol,0.1);
  scene.add(ambientLight);

  const renderer = new THREE.WebGLRenderer();
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize( window.innerWidth, window.innerHeight );
  // renderer.shadowMap.enabled = true;

  const hdriloader = new RGBELoader();

  hdriloader.load('enviroments/brown_photostudio_02_1k.hdr', function(texture){
    texture.mapping = THREE.EquirectangularReflectionMapping;
    // scene.background = texture; //esto  nomas lo pone pero lo mapea a las coordenadas de la pantalla
    scene.environment = texture; //esto hace que  sea global el environment, todos los materiales standard se actualizarian con esto como su refleccion
  });

  const texloader = new THREE.TextureLoader();
  texloader.load('enviroments/brown_photostudio_02.jpg' , function(texture){
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;  
  });


  document.body.appendChild( renderer.domElement );

  // const planeGeometry = new THREE.PlaneGeometry(50,50,2,2);
  // const planeMaterial = new THREE.MeshPhongMaterial( {color:0xffffff})
  // const plane = new THREE.Mesh(planeGeometry,planeMaterial);
  // // plane.receiveShadow = true;
  // plane.rotateX(-90*(Math.PI/180))
  // plane.position.set(0,-3,0);
  // scene.add(plane);  


  const loader = new GLTFLoader();
  let characterMaterial: { emissiveIntensity: number; };

  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
  loader.setDRACOLoader( dracoLoader );

  setTimeout(() => {
    loader.load(    
      'models/webchar/character_And_Materials.gltf',    
       ( gltf ) => {
        
        gltf.parser.getDependencies( 'material' ).then( ( materials ) => {
          characterMaterial = materials[0];                  
          characterMaterial.emissiveIntensity=0.5;          
        } );

        clips = gltf.animations;
        character = gltf.scene;
   
        // character.children.map((child)=>{
        //   child.castShadow=true;          
        // });

        character.position.copy(startPos);
        scene.add(character);
                
        mixer = new THREE.AnimationMixer( character );
        mixer.addEventListener( 'finished', function(e){          
          // console.log('finished',desiredState);
          if(e.action._clip.name === animActions[0]){            
            e.action.reset();
            desiredState=1;
            currentAnimstate=desiredState;
            fadeToAction(animActions[currentAnimstate],0.05);
          }         
          else
          {
            currentAnimstate=desiredState;
            e.action.reset();
            fadeToAction(animActions[currentAnimstate],0.05);            
          }
          
          queueSections.shift();                      
        });

        const clip = THREE.AnimationClip.findByName( clips, animActions[currentAnimstate] );
        const action = mixer.clipAction( clip );                
        activeAction = action;
        activeAction.loop = THREE.LoopOnce;
        fadeToAction(animActions[currentAnimstate],0);
   
      },
      function(progress){
        console.log( ( progress.loaded / progress.total * 100 ) + '% loaded' );
      },    
      function ( error ) {
         console.log( 'An error happened',error);  
      }
    );
  }, 500);
  
  setTimeout(() => {
    character?.traverse((child:any)=>{      
      if(child.isMesh)
      {
        child.material = characterMaterial;
      }      
    })
  }, 2500);
    
  // window.addEventListener('keydown',(e)=>{
  //   console.log(e.key);
  // })
  const cameraLookPos = new THREE.Vector3(0,-2,0);
  const LookPosTarget = new THREE.Vector3(0,-2,0);
  const cameraTargetPos = new THREE.Vector3(0,0,5);
  const mousePosition = new THREE.Vector2(0,0);

  window.addEventListener('mousemove',(e)=>{
    mousePosition.x =   ( e.clientX / window.innerWidth ) * 2 - 1;
    mousePosition.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
    mousePosition.x *= 0.5;
    mousePosition.y *= 0.5;
  })

  const clock = new THREE.Clock();

  // function swapBackgroundColor(color1:THREE.Color,color2:THREE.Color, delta:number)
  // {
  //   tbackgnd+=delta/0.5;    
  //   currentColor.lerpColors(color1,color2,tbackgnd);   
  //   ambientLight.color = currentColor;
  //   scene.background = currentColor;
  //   scene.fog!.color = currentColor;
  //   spotLight.color = currentColor;

  //   if(tbackgnd >= 1)
  //   {
  //     swappingMode = false;
  //     tbackgnd = 0;
  //   }      
  // }
  
  let dt=0;
  
  function update()//============================================================================================UPDATE
  {
    // requestAnimationFrame(update);
    dt = clock.getDelta();

    cameraLookPos.lerp(LookPosTarget,0.05);
    camera.lookAt(cameraLookPos);    
    camera.position.lerp(cameraTargetPos,0.05);

    // if(swappingMode)
    // {
    //   // console.log("swapping",t);
    //   if(darkmode)
    //     swapBackgroundColor(whiteBgndCol,blackBgndCol,dt);
    //   else
    //     swapBackgroundColor(blackBgndCol,whiteBgndCol,dt);
    // }

    if(characterMaterial){      
      characterMaterial.emissiveIntensity = (Math.sin(clock.elapsedTime*2)+1)*0.5;
    }

    if(character && mixer!=null){
      mixer.update(dt);
      manageAnimState();
      manageCamPos();
    }    

    renderer.render( scene, camera );
  }

  window.addEventListener( 'resize', onWindowResize, false );
  
  function onWindowResize(){ //funcion para redimensionar ventana si el usuario le anda moviendo
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
  }

  function fadeToAction( actionName: string, durationSeconds: number ) {

    const clip = THREE.AnimationClip.findByName( clips, actionName );
    const action = mixer!.clipAction( clip );    

    previousAction = activeAction;
    activeAction = action;

    if ( previousAction !== activeAction ){
      previousAction.fadeOut( durationSeconds );
    }

    activeAction
      .reset()
      .setEffectiveTimeScale( 1 )
      .setEffectiveWeight( 1 )
      .fadeIn( durationSeconds )
      .play();

  }

  function manageAnimState() {
    //0- Hola, 1- About, 2- Web, 3-5 games der, 6-7 arte izq
    //Siempre que inicie debe empezar en standup
    //Posteriormente debe pasar a Idle
    //Si vuelve a llegar a 0 despues de haber estado por encima de 2 alguna vez debera ejecutar backflip
    //si pasa de 1 a 2 || o || de 3 a 2 deberá hacer el hiphop indefinidamente
    //si esta en 3-5 debera hacer pose1
    //si esta en 6-7 debera hacer pose2

    if(queueSections.length>0) //si tengo estados en el queue
    {
      if(canBeInterrupted[currentAnimstate] == true)//si se puede interrumpir, cambiamos de accion
      { 
        const oldestSection = queueSections.shift();
        if(oldestSection == 0) { desiredState = Math.floor(Math.random() * 2 + 1)}
        if(oldestSection == 1) { desiredState = 1;}
        if(oldestSection == 2) desiredState = 3;
        if(oldestSection! == 4) { desiredState = 4;}
        if(oldestSection! == 6 || oldestSection! > 6) desiredState = 5;
        if(oldestSection! == 8) desiredState = 3;

        if(desiredState!=currentAnimstate){
          currentAnimstate = desiredState;
          fadeToAction(animActions[currentAnimstate],0.1);
        }        
      }
       else  //si no, solo actualizamos el desiredState para que cuando termine, se cambie sola
      {
        const oldestSection = queueSections[0] //obtengo estado mas viejo sin sacarlo, como el shift          
        if(oldestSection == 1 || oldestSection == 0) desiredState = 1;
        if(oldestSection == 2) desiredState = 3;
        if(oldestSection! == 4) desiredState = 4;
        if(oldestSection! == 6 || oldestSection! > 6) desiredState = 5;
        if(oldestSection! == 8) desiredState = 6;
     
      }
            
    }
  }


  function manageCamPos(){    

    const largeWindow = window.innerWidth>640;
    if(currentSection == 0 || currentSection == 1)
    {
      LookPosTarget.set(0,-2,0);          
      cameraTargetPos.set(0,0,5);
    }

    if(currentSection == 2)
    {
      LookPosTarget.set(0,-1.5,0);
      cameraTargetPos.set(0,0,3);
    }

    if(currentSection == 4) {
      LookPosTarget.set(1,-1.5,0);
      if(largeWindow) cameraTargetPos.set(1.5,-1,2); 
      else
        cameraTargetPos.set(0.12,-0.5,2.5);      
    }    

    if(currentSection >= 6 && currentSection <= 7)
    {
      LookPosTarget.set(-1,-1.5,0);
      if(largeWindow) cameraTargetPos.set(-1.5,-1,2);
      else
        cameraTargetPos.set(-0.12,-0.5,2.5);
    }

    if(currentSection == 8)
    {
      LookPosTarget.set(0,-1.5,0);
      cameraTargetPos.set(0,-1.5,2);      
    }
    
  }

  renderer.setAnimationLoop( update );
  // update(); //Iniciamos el loop
}

export const ThreeJSApp = forwardRef((_props, ref) => {   

  // const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  // darkmode = darkThemeMq.matches;  
  // swappingMode = true;  

  useImperativeHandle(ref, () => ({    
    childFunction(arg:number) {
      currentSection = arg;
      queueSections.push(arg);      
      
      if(queueSections.length>3){
        queueSections.shift(); //regresa el mas viejo, mientras que pop el mas nuevo
      }      
    },
  }));

  return (
    <>
      {doThree()} 
    </>    
  )
});


