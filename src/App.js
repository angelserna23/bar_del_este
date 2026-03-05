import React from "react";
import { Route, Routes } from "react-router-dom"; 

// Paginas
import Experience from './pages/Experience/index';
import Gallery from './pages/Gallery/index';
import Home from './pages/Home/index';
import Notfound from './pages/NotFound/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/experience" element={<Experience/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/notfound" element={<Notfound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
