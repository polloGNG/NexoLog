import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; // Importa o código que você salvou
import Register from './pages/Register'; // Importa a nova tela

function App() {
  return (
    <Router>
      <Routes>
        {/* Quando o link for vazio (/), ele abre seu Login */}
        <Route path="/" element={<Login />} />
        
        {/* Quando o link for /cadastrar, ele abre o Cadastro */}
        <Route path="/cadastrar" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;