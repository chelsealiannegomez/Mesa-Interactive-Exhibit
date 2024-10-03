import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';


function Room() {
  const texture = new TextureLoader().load('/room/textures/theroomviewfinal.jpg');

  return (
    <Sphere args={[500, 60, 40]} scale={[-1, 1, 1]}>
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </Sphere>
  );
}

function RoomPage() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <Room />
    </Canvas>
  );
}

export default RoomPage;
