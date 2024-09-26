import React from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const Box = () => {
  const meshRef = useRef();

  // Rotate the box every frame
  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} scale={[1, 1, 1]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};
