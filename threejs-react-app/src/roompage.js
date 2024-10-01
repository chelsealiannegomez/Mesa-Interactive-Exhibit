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
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.3} />
        <Suspense fallback={null}>
          <Room/>
        </Suspense>
      </Canvas>
    </>
  );
}

export default Roompage;
