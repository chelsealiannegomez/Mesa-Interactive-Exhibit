import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import StartingPage from './StartingPage';
import Page1 from './Page1';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </>
  );
}
export default App;