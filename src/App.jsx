import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Report from './pages/Report';
import Education from './pages/Education';
import ProblemRegistration from './pages/ProblemRegistration'; // Importe aqui

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/relatorio" element={<Report />} />
        <Route path="/educacao" element={<Education />} />
        <Route path="/registrar-problema" element={<ProblemRegistration />} /> {/* Rota adicionada */}
      </Routes>
    </Router>
  );
}

export default App;