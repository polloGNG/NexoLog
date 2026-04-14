import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4 font-sans text-white">
      <main className="w-full max-w-[1100px] flex justify-center">
        <div className="bg-[#1c1c1c] w-full max-w-[450px] rounded-3xl p-10 shadow-2xl border border-white/5 flex flex-col items-center">
          
          {/* Identidade Visual em Texto */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-black tracking-tighter text-[#ffb800]">
              NEXO<span className="text-white">LOG</span>
            </h1>
            <p className="text-[10px] tracking-[0.3em] text-gray-500 font-bold uppercase mt-1">
              Piauí
            </p>
          </div>

          <div className="w-full space-y-6">
            {/* Campo de Email */}
            <div className="space-y-2">
              <label className="text-gray-400 text-xs font-bold uppercase ml-1">Email</label>
              <input 
                type="email" 
                placeholder="Seu email" 
                className="w-full bg-[#2a2a2a] border border-gray-700/50 rounded-2xl py-4 px-5 text-gray-200 focus:outline-none focus:border-yellow-500/50 transition outline-none" 
              />
            </div>

            {/* Campo de Senha */}
            <div className="space-y-2">
              <label className="text-gray-400 text-xs font-bold uppercase ml-1">Senha</label>
              <input 
                type="password" 
                placeholder="Sua senha" 
                className="w-full bg-[#2a2a2a] border border-gray-700/50 rounded-2xl py-4 px-5 text-gray-200 focus:outline-none focus:border-yellow-500/50 transition outline-none" 
              />
              <p className="text-right text-[10px] text-gray-500 font-bold uppercase cursor-pointer hover:text-gray-300 transition-colors">
                Esqueci minha senha
              </p>
            </div>

            {/* Botão de Entrar - Agora com a função de navegar para /home */}
            <button 
              onClick={() => navigate('/home')}
              className="w-full bg-[#ffb800] hover:bg-[#e6a600] text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] mt-4 shadow-lg shadow-yellow-500/10"
            >
              ENTRAR <span className="text-xl">→</span>
            </button>

            {/* Botão de Cadastrar - Navega para /cadastrar */}
            <button 
              onClick={() => navigate('/cadastrar')}
              className="w-full bg-transparent border border-white/10 hover:bg-white/5 text-gray-400 font-bold py-4 rounded-2xl transition-all mt-2 text-xs uppercase tracking-widest"
            >
              Criar nova conta
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;