import './MainApp.css'
import { ThreeJSApp } from './components/ThreeJSApp';
import { MainContent } from './components/MainContent';
import { useRef } from 'react';

function MainApp() {  

  const childRef = useRef<{childFunction:(arg:number)=>void}>(null);

  const setCurrentSection = (crrnt:number)=>{
    // console.log(crrnt);        
    childRef.current?.childFunction(crrnt);        
  }

  return (
    <>          
      <ThreeJSApp ref={childRef} />
      <MainContent currentSect={setCurrentSection} />
    </>
  )
}

export default MainApp
