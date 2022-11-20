import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Home />} />
        <Route path="/crew" element={<Home />} />
        <Route path="/technology" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
