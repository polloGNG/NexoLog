import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  // Estado para controlar se o cadastro foi concluído
  const [isRegistered, setIsRegistered] = useState(false);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você simula o sucesso do cadastro
    setIsRegistered(true);
  };

  // Tela de Sucesso
  if (isRegistered) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6 font-sans text-white">
        <div className="bg-[#1c1c1c] w-full max-w-[500px] rounded-[40px] p-12 shadow-2xl border border-[#ffb800]/20 text-center space-y-8 animate-in fade-in zoom-in duration-300">
          <div className="w-24 h-24 bg-[#ffb800]/10 rounded-full flex items-center justify-center mx-auto border-2 border-[#ffb800]">
            <span className="text-5xl text-[#ffb800]">✓</span>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Conta Criada!</h2>
            <p className="text-gray-400 text-sm">Seu perfil operacional foi configurado com sucesso no sistema NexoLog.</p>
          </div>

          <button 
            onClick={() => navigate('/')}
            className="w-full bg-[#ffb800] text-black font-black py-5 rounded-2xl hover:bg-[#ffcc33] transition-all shadow-[0_10px_20px_rgba(255,184,0,0.1)] active:scale-95"
          >
            ACESSAR PAINEL →
          </button>
        </div>
      </div>
    );
  }

  // Formulário Original
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6 font-sans text-white">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-center gap-12">
        
        {/* Lado Esquerdo */}
        <div className="flex-1 space-y-8">
          <div className="space-y-2">
            <h2 className="text-5xl font-black leading-tight uppercase">
              CRIAR<br />
              <span className="text-[#ffb800]">CONTA</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm mt-4">
              Configure seu perfil operacional e acesse o centro de comando logístico da próxima geração.
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-4">
              <span className="bg-[#ffb800]/10 p-3 rounded-lg text-[#ffb800]">📈</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Monitoramento em tempo real</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-[#ffb800]/10 p-3 rounded-lg text-[#ffb800]">🛡️</span>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Segurança de dados camada 4</p>
            </div>
          </div>
        </div>

        {/* Lado Direito */}
        <div className="bg-[#1c1c1c] w-full max-w-[550px] rounded-[40px] p-10 shadow-2xl border border-white/5">
          
          <div className="flex items-center gap-4 mb-8">
            <label htmlFor="avatar-upload" className="cursor-pointer">
              <div className="w-20 h-20 rounded-2xl bg-[#242424] border-2 border-dashed border-gray-600 flex items-center justify-center overflow-hidden hover:border-[#ffb800] transition-colors">
                {avatar ? (
                  <img src={avatar} alt="Avatar Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl">👤</span>
                )}
              </div>
            </label>
            <input 
              id="avatar-upload" 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleAvatarChange} 
            />
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-widest">Foto de Perfil</p>
              <p className="text-gray-500 text-[10px]">Clique no ícone para fazer upload.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div className="col-span-1 space-y-1">
              <label className="text-gray-500 text-[9px] font-bold uppercase">Nome Completo</label>
              <input required className="w-full bg-[#242424] border border-gray-800 rounded-xl py-4 px-4 text-white outline-none focus:border-[#ffb800]" placeholder="Seu nome" />
            </div>
            <div className="col-span-1 space-y-1">
              <label className="text-gray-500 text-[9px] font-bold uppercase">Email</label>
              <input required type="email" className="w-full bg-[#242424] border border-gray-800 rounded-xl py-4 px-4 text-white outline-none focus:border-[#ffb800]" placeholder="seu@email.com" />
            </div>
            <div className="col-span-2 space-y-1">
              <label className="text-gray-500 text-[9px] font-bold uppercase">Senha</label>
              <input required type="password" className="w-full bg-[#242424] border border-gray-800 rounded-xl py-4 px-4 text-white outline-none focus:border-[#ffb800]" placeholder="••••••••" />
            </div>
            <div className="col-span-2 space-y-1">
              <label className="text-gray-500 text-[9px] font-bold uppercase">Descrição</label>
              <textarea className="w-full bg-[#242424] border border-gray-800 rounded-xl py-4 px-4 text-white outline-none focus:border-[#ffb800] h-24 resize-none" placeholder="Conte um pouco sobre você..."></textarea>
            </div>
            
            <button type="submit" className="col-span-2 bg-[#ffb800] text-black font-black py-4 rounded-xl mt-4 hover:bg-[#ffcc33] transition-all transform active:scale-95">
              FINALIZAR REGISTRO →
            </button>
          </form>

          <p className="text-center text-gray-500 text-[10px] font-bold uppercase mt-6">
            Já tenho uma conta. <span onClick={() => navigate('/')} className="text-[#ffb800] cursor-pointer hover:underline">Entrar</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;