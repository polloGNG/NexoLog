import React from 'react';
import { useNavigate } from 'react-router-dom';

function Education() {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Placas de Regulamentação",
      items: [
        { name: "Pare", desc: "Parada obrigatória antes de entrar na via.", icon: "🛑" },
        { name: "Velocidade", desc: "Respeite o limite indicado para evitar multas.", icon: "⚠️" }
      ]
    },
    {
      title: "Infrações e Boas Práticas",
      items: [
        { name: "Celular ao Volante", desc: "Infração gravíssima. Mantenha o foco na pista.", icon: "📱" },
        { name: "Prioridade Pedestre", desc: "Sempre dê preferência na faixa de segurança.", icon: "🚶" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans p-6">
      {/* Header com botão de voltar */}
      <header className="max-w-6xl mx-auto flex items-center gap-4 mb-12 py-4">
        <button 
          onClick={() => navigate('/home')}
          className="bg-[#1c1c1c] hover:bg-white/10 p-3 rounded-xl border border-white/5 transition-all"
        >
          ←
        </button>
        <h1 className="text-xl font-black uppercase tracking-tighter">
          NEXO<span className="text-[#ffb800]">LOG</span> <span className="text-gray-500">Educação</span>
        </h1>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-3 text-[#ffb800]">Educação de Trânsito</h2>
          <p className="text-gray-400 max-w-2xl">
            Aprenda sobre as leis e sinalizações para um trânsito mais seguro em Picos e todo o Piauí.
          </p>
        </div>

        {/* Categorias e Cards conforme o Trello */}
        <div className="space-y-12">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 mb-6 flex items-center gap-4">
                {cat.title}
                <div className="h-px bg-white/5 flex-1"></div>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.items.map((item, i) => (
                  <div key={i} className="bg-[#1c1c1c] p-6 rounded-[24px] border border-white/5 flex items-center gap-6 hover:border-[#ffb800]/20 transition-all cursor-default">
                    <div className="text-4xl w-16 h-16 flex items-center justify-center bg-[#252525] rounded-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{item.name}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Education;