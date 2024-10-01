import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyle = {
  position: 'absolute',
  top: '50%',                  
  left: '50%',                  
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0)',
  border: 'none',
  cursor: 'pointer',
  fontSize: '30px',
  //borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'translate(-50%, -50%)',
}

const textStyle = {
  color: 'white',
  //backgroundColor: 'rgba(0, 0, 0, 0.5)',
  //width: "100%",
  textShadow: 'black 0 0 20px',
}

const ToggleButton = ({ isRotating, handleToggleRotation }) => {
  
  return (
    <Link to="./Page1">
    <button
      onClick={handleToggleRotation}
      className="absolute top-1/2 left-1/2 w-full h-full bg-transparent border-none cursor-pointer text-2xl flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
    >
      <h1 className="text-6xl text-white font-bold drop-shadow animate-pulse">{isRotating ? 'Press anywhere to start' : 'Entering now'}</h1>
      
    </button>
    </Link>
  );
};

export default ToggleButton;