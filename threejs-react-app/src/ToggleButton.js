import React from 'react';

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
    
    <button
      style={buttonStyle}
      onClick={handleToggleRotation}
    >
      <h1 style={textStyle}>{isRotating ? 'Press anywhere to start' : 'Entering now'}</h1>
      
    </button>
  );
};

export default ToggleButton;