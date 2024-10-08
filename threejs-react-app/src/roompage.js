import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
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
  const { scene } = useGLTF('/book/scene.gltf');
  const bookRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  // Initial and final positions for the animation
  const initialPosition = useRef(new THREE.Vector3(370, -250, 90));
  const finalPosition = new THREE.Vector3(40, 0, 0);

  const initialRotation = useRef([Math.PI / 2, -Math.PI / 2, Math.PI / 2]);
  const finalRotation = [Math.PI / 2, 0, Math.PI / 2];

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    // If the book is clicked, animate the transition to the final position
    if (isAnimating) {
      bookRef.current.position.lerp(finalPosition, delta * 2); // Speed of transition
      bookRef.current.rotation.x = THREE.MathUtils.lerp(bookRef.current.rotation.x, finalRotation[0], delta * 2);
      bookRef.current.rotation.y = THREE.MathUtils.lerp(bookRef.current.rotation.y, finalRotation[1], delta * 2);
      bookRef.current.rotation.z = THREE.MathUtils.lerp(bookRef.current.rotation.z, finalRotation[2], delta * 2);

      // Check if the book has reached close to the final position
      if (bookRef.current.position.distanceTo(finalPosition) < 0.1) {
        onClick(); // Trigger navigation once the animation completes
      }
    } else {
      // Apply the floating effect before the book is clicked
      bookRef.current.position.y += Math.sin(time * 3) * 1; // Floating effect
    }
  });

  const handleClick = () => {
    setIsAnimating(true); // Start animation when the book is clicked
  };

  return (
    <primitive
      ref={bookRef}
      object={scene}
      scale={[0.75, 0.4, 0.75]}
      position={initialPosition.current}
      rotation={initialRotation.current}
      onClick={handleClick}
      className="cursor-pointer"
    />
  );
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

      <Canvas className="w-full h-full bg-white" camera={{ position: [-60, 20, 5] }} style={{ backgroundColor: 'white' }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={10} />
        <Room />
        <BookModel onClick={handleBookClick} />
      </Canvas>
    </div>
  );
}

export default RoomPage;