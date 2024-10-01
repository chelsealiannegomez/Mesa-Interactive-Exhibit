import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

export function Room() {
  const { scene } = useGLTF('threejs-react-app/public/room/theroomfinal.glb');
  
  return <primitive object={scene} scale={1} />;
}

export default Room;
