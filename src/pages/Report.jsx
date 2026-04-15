import React from 'react';
import { useNavigate } from 'react-router-dom';

function Report() {
  const navigate = useNavigate();

  const stats = [
    { label: "Vias Sinalizadas", value: "85%", change: "+2% este mês", color: "text-blue-500" },
    { label: "Relatos Resolvidos", value: "1.240", change: "92% de eficácia", color: "text-green-500" },
    { label: "Pontos Críticos", value: "14", change: "-5 desde janeiro", color: "text-red-500" },
    { label: "Cidadãos Educados", value: "+5k", change: "Acesso aos módulos", color: "text-[#ffb800]" }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans p-6">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12 py-4">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/home')} className="bg-white/5 hover:bg-white/10 p-3 rounded-xl">←</button>
          <h1 className="text-xl font-black uppercase tracking-tighter">Relatório <span className="text-[#ffb800]">Geral</span></h1>
        </div>
        <button className="bg-[#ffb800] text-black text-[10px] font-black px-4 py-2 rounded-lg uppercase">Exportar PDF</button>
      </header>

      <main className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#1c1c1c] p-6 rounded-[24px] border border-white/5">
              <p className="text-gray-500 text-[10px] font-bold uppercase mb-1">{stat.label}</p>
              <h3 className={`text-3xl font-black ${stat.color}`}>{stat.value}</h3>
              <p className="text-[9px] text-gray-400 mt-2">{stat.change}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-[#1c1c1c] p-8 rounded-[32px] border border-white/5">
            <h3 className="text-lg font-bold mb-6">Problemas por Categoria</h3>
            <div className="space-y-6">
              {[
                { label: "Semáforo com Defeito", width: "w-[70%]", color: "bg-red-500" },
                { label: "Faixa Apagada", width: "w-[45%]", color: "bg-yellow-500" },
                { label: "Placas Danificadas", width: "w-[30%]", color: "bg-blue-500" }
              ].map((bar, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase text-gray-400">
                    <span>{bar.label}</span>
                    <span>{bar.width.match(/\d+/)}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${bar.width} ${bar.color} rounded-full`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1c1c1c] p-8 rounded-[32px] border border-[#ffb800]/20 flex flex-col justify-between">
            <h3 className="text-2xl font-bold">Educação e Impacto</h3>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">Engajamento nos módulos de infrações e boas práticas.</p>
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-4xl font-black">94%</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase">Feedback Positivo</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Report;