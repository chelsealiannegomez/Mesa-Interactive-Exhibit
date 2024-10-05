import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, useGLTF } from '@react-three/drei';
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

function BookModel() {
  const { scene } = useGLTF('/paladins_book/scene.gltf');
  return (
    <primitive 
      object={scene} 
      scale={[400, 400, 400]}
      position={[300, -100, 130]}
      rotation={[0, -Math.PI/2, 0]}
    />);
}

function RoomPage() {
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full h-screen bg-white">
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-5000 ease-out ${
          fade ? 'opacity-100' : 'opacity-0'
        } pointer-events-none z-20`}
      />

      <Canvas
        className="w-full h-full bg-white"
        camera={{ position: [-60, 20, 5] }}
        style={{ backgroundColor: 'white' }}
      >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={4} /> 
        <Room />
        <BookModel />
      </Canvas>
    </div>
  );
}

export default RoomPage;
