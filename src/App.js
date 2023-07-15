import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.js";
import Screen from "./Routes/Screen.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/screen" element={<Screen />} />
    </Routes>
  );
}

export default App;
