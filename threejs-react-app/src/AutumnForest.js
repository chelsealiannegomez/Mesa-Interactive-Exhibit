import React, { Suspense } from 'react';
import { useGLTF } from '@react-three/drei';

export function AutumnForest() {
  const { scene } = useGLTF('/free_-_skybox_autumn_forest/scene.gltf');
  
  return <primitive object={scene} scale={1} />;
}
