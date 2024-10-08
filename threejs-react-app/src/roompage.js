import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { useNavigate } from 'react-router-dom';

function Room() {
  const texture = new TextureLoader().load('/room/textures/theroomviewfinal.jpg');

  return (
    <Sphere args={[500, 60, 40]} scale={[-1, 1, 1]}>
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </Sphere>
  );
}

function BookModel({ onClick }) {
  const { scene } = useGLTF('/old_book/scene.gltf');
  return (
    <primitive 
      object={scene} 
      scale={[10, 10, 10]}
      position={[200, -100, 100]}
      rotation={[0, Math.PI/2, 0]}
      onClick={onClick}
      className="cursor-pointer"
    />);
}

function RoomPage() {
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/flipbook');
  };

  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full h-screen bg-white z-50">
      <div
        className={`absolute inset-0 bg-white transition-opacity duration-[5000] ease-out ${
          fade ? 'opacity-100' : 'opacity-0'
        } pointer-events-none z-50`}
      />

      <Canvas
        className="w-full h-full bg-white"
        camera={{ position: [-60, 20, 5] }}
        style={{ backgroundColor: 'white' }}
      >
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={4} /> 
        <Room />
        <BookModel onClick={handleBookClick}/>
      </Canvas>
    </div>
  );
}


export default RoomPage;
