import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Report from './pages/Report';
import Education from './pages/Education'; // Importe a nova página

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/relatorio" element={<Report />} />
        <Route path="/educacao" element={<Education />} />
      </Routes>
    </Router>
  );
}

export default App;