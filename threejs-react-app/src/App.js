import React from "react";
//import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartingPage from "./StartingPage";
import Roompage from "./roompage";
import Flipbook from "./objects/Flipbook";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/room" element={<Roompage />} />
        <Route path="/flipbook" element={<Flipbook />} />
      </Routes>
    </>
  );
}
export default App;
