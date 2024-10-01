import React, { Suspense, useRef, useState } from 'react'; 
import { Canvas, useFrame } from '@react-three/fiber';
import Room from './Room'

function Roompage() {
  const [isRotating, setIsRotating] = useState(true); 
  const handleToggleRotation = () => {
    setIsRotating(!isRotating);
  };

  return (
    <>
      <button onClick={handleToggleRotation}>
        {isRotating ? "Stop Rotation" : "Start Rotation"}
      </button>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} />
        <Suspense fallback={null}>
          <Room isRotating={isRotating} />
        </Suspense>
      </Canvas>
    </>
  );
}

export default Roompage;
