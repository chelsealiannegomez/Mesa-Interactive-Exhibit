import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import StartingPage from './StartingPage';
import RoomPage from './RoomPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/room" element={<RoomPage />} />
      </Routes>
    </>
  );
}
export default App;