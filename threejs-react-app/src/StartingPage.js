import React, { Suspense, useRef, useState } from 'react'; 
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { AutumnForest } from './AutumnForest';
import ToggleButton from './ToggleButton';  


function StartingPage() {
    const [isRotating, setIsRotating] = useState(true); 
    const handleToggleRotation = () => {
      setIsRotating(!isRotating);
    };
  
    return (
      <>
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.3} />
          <Suspense fallback={null}>
            <AutumnForest />
          </Suspense>
          <RotatingCamera isRotating={isRotating} />  {}
        </Canvas>
        <ToggleButton
          isRotating={isRotating}                   
          handleToggleRotation={handleToggleRotation}
        />
      </>
    );
  }
  
  function RotatingCamera({ isRotating }) { 
    const groupRef = useRef();
    const cameraRef = useRef();
    const controlsRef = useRef();
  
    useFrame(() => {
      if (groupRef.current && controlsRef.current && isRotating) {
        groupRef.current.rotation.y += 0.001; 
        controlsRef.current.update();
      }
    });
  
    return (
      <group ref={groupRef}>
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 2, 10]} 
        />
        <OrbitControls ref={controlsRef} enableDamping={true} dampingFactor={0.05} />
      </group>
    );
  }
  
  export default StartingPage;