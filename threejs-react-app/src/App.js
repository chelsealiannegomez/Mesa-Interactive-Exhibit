import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import StartingPage from './StartingPage';
import Roompage from './roompage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/room" element={<Roompage />} />
      </Routes>
    </>
  );
}
export default App;