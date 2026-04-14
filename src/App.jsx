import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importação das páginas que criamos
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota inicial: Se o usuário acessar apenas '/', abre o Login */}
        <Route path="/" element={<Login />} />
        
        {/* Rota de Cadastro */}
        <Route path="/cadastrar" element={<Register />} />
        
        {/* Rota do Menu Principal (Projeto Trânsito Consciente) */}
        <Route path="/home" element={<Home />} />

        {/* Rota de "Segurança": Se o usuário digitar qualquer link doido, 
            ele é mandado de volta para o Login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;