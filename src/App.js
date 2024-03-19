import React from "react";
import './index.css';
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import KCommunicate from "./routes/KCommunicate";

// import TestPage from "./routes/TestPage";

import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Project" element={ <Project />} />
      {/* <Route path="/TestPage" element={ <TestPage />} /> */}
    </Routes>
    </>
  )
  
}

export default App;
