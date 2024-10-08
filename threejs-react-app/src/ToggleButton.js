import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ToggleButton = ({ isRotating, handleToggleRotation }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    handleToggleRotation();  
    setFadeOut(true);       

    setTimeout(() => {
      navigate('./room');
    }, 3000); 
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-colors duration-[3000ms] ${
        fadeOut ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <button
        onClick={handleClick}
        className="absolute top-1/2 left-1/2 w-screen h-screen bg-transparent border-none cursor-pointer flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
      >
        <h1
          className={`text-8xl font-Cormorant text-white drop-shadow transition-opacity duration-[3000ms] ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {isRotating ? 'Press anywhere to start' : 'Entering now'}
        </h1>
      </button>
    </div>
  );
};

export default ToggleButton;
