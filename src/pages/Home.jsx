import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // Itens do menu integrados com as rotas do sistema NexoLog
  const menuItems = [
    {
      title: "Educação de Trânsito",
      desc: "Cards educativos sobre placas e boas práticas nas pistas.",
      icon: "📚",
      path: "/educacao",
      color: "border-blue-500/20"
    },
    {
      title: "Registrar Problema",
      desc: "Reporte falhas em placas, semáforos ou faixas apagadas.",
      icon: "⚠️",
      path: "/registrar-problema",
      color: "border-yellow-500/20"
    },
    {
      title: "Painel Administrativo",
      desc: "Acesso restrito para monitoramento de registros.",
      icon: "🏛️",
      path: "/admin",
      color: "border-purple-500/20"
    },
    {
      title: "Meus Relatos",
      desc: "Acompanhe o status das suas solicitações enviadas.",
      icon: "📋",
      path: "/meus-relatos",
      color: "border-green-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans p-6">
      {/* Header - Identidade NexoLog Piauí */}
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12 py-4">
        <h1 className="text-2xl font-black tracking-tighter text-[#ffb800]">
          NEXO<span className="text-white">LOG</span> <span className="text-xs font-light text-gray-500 ml-2">Piauí</span>
        </h1>
        <div className="flex items-center gap-4">
          <div className="text-right hidden md:block">
            <p className="text-xs font-bold uppercase tracking-widest">Arthur César</p>
            <p className="text-[10px] text-gray-500 font-medium tracking-wide">Cidadão</p>
          </div>
          {/* Avatar circular estilizado */}
          <div className="w-10 h-10 rounded-full bg-[#ffb800] flex items-center justify-center text-black font-black text-xs shadow-[0_0_15px_rgba(255,184,0,0.3)] border border-yellow-400/20">
            AC
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* Saudação Personalizada */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2 tracking-tight">Olá, Arthur César</h2>
          <p className="text-gray-400 font-medium italic opacity-80">Trânsito Consciente (NexoLog Piauí)</p>
        </div>

        {/* Grid de Funções Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              onClick={() => navigate(item.path)}
              className={`bg-[#1c1c1c] p-8 rounded-[32px] border ${item.color} hover:border-[#ffb800]/50 transition-all cursor-pointer group hover:-translate-y-2 shadow-xl hover:shadow-[#ffb800]/5`}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#ffb800] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {item.desc}
              </p>
              <span className="text-[#ffb800] text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                Acessar <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          ))}
        </div>

        {/* Banner de Estatística - Link para Relatório Completo */}
        <div className="mt-12 bg-gradient-to-br from-[#1c1c1c] to-[#161616] p-8 rounded-[32px] border border-white/5 flex flex-col md:flex-row justify-between items-center group shadow-2xl">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-[#ffb800] font-bold text-[10px] uppercase tracking-[0.3em] mb-2">Status do Município</p>
            <h4 className="text-2xl font-bold tracking-tight">85% das vias sinalizadas</h4>
          </div>
          <button 
            onClick={() => navigate('/relatorio')}
            className="w-full md:w-auto bg-white/5 hover:bg-[#ffb800] hover:text-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-lg active:scale-95 border border-white/10 hover:border-[#ffb800]"
          >
            VER RELATÓRIO COMPLETO
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;