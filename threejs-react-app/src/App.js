import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import StartingPage from './StartingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartingPage />} />
      </Routes>
    </>
  );
}
export default App;