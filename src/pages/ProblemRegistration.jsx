import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProblemRegistration() {
  const navigate = useNavigate();
  const [isSent, setIsSent] = useState(false);
  const [problemImage, setProblemImage] = useState(null);

  // Função para lidar com a imagem do problema (igual ao cadastro)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProblemImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  if (isSent) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center p-6 text-white font-sans">
        <div className="bg-[#1c1c1c] w-full max-w-[500px] rounded-[40px] p-12 border border-[#ffb800]/20 text-center space-y-6">
          <div className="w-20 h-20 bg-[#ffb800]/10 rounded-full flex items-center justify-center mx-auto border border-[#ffb800]">
            <span className="text-4xl text-[#ffb800]">📡</span>
          </div>
          <h2 className="text-3xl font-black uppercase">Relato Enviado!</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Sua solicitação foi encaminhada para a Secretaria de Trânsito. Você pode acompanhar o status em "Meus Relatos".
          </p>
          <button 
            onClick={() => navigate('/home')}
            className="w-full bg-[#ffb800] text-black font-black py-4 rounded-2xl hover:bg-[#ffcc33] transition-all"
          >
            VOLTAR AO INÍCIO
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans p-6">
      {/* Header com a identidade NexoLog */}
      <header className="max-w-4xl mx-auto flex items-center gap-4 mb-12 py-4">
        <button 
          onClick={() => navigate('/home')}
          className="bg-[#1c1c1c] hover:bg-white/10 p-3 rounded-xl border border-white/5 transition-all"
        >
          ←
        </button>
        <h1 className="text-xl font-black uppercase tracking-tighter">
          NEXO<span className="text-[#ffb800]">LOG</span> <span className="text-gray-500 text-sm font-bold">REPORTAR</span>
        </h1>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl font-bold mb-2">Reportar Problema</h2>
          <p className="text-gray-400">Ajude a melhorar a sinalização e segurança das vias do Piauí.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Categoria do Problema com a opção "Outro" incluída */}
          <div className="col-span-2 space-y-2">
            <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-1">O que está acontecendo?</label>
            <div className="relative">
              <select 
                required 
                className="w-full bg-[#1c1c1c] border border-white/5 rounded-2xl py-4 px-6 text-white outline-none focus:border-[#ffb800] appearance-none cursor-pointer"
              >
                <option value="">Selecione uma categoria...</option>
                <option value="placa">Falha nas Placas (Danificada/Ausente)</option>
                <option value="faixa">Faixa de Pedestre Apagada</option>
                <option value="semaforo">Semáforo com Defeito</option>
                <option value="outro">Outro</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">▼</div>
            </div>
          </div>

          {/* Localização */}
          <div className="col-span-2 space-y-2">
            <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-1">Localização (Rua, Bairro ou Ponto de Ref.)</label>
            <input 
              required
              type="text" 
              className="w-full bg-[#1c1c1c] border border-white/5 rounded-2xl py-4 px-6 text-white outline-none focus:border-[#ffb800]" 
              placeholder="Ex: Av. Getúlio Vargas, próximo ao Sest Senat" 
            />
          </div>

          {/* Descrição */}
          <div className="col-span-2 space-y-2">
            <label className="text-gray-500 text-[10px] font-black uppercase tracking-widest ml-1">Descrição Breve</label>
            <textarea 
              required
              className="w-full bg-[#1c1c1c] border border-white/5 rounded-3xl py-4 px-6 text-white outline-none focus:border-[#ffb800] h-32 resize-none" 
              placeholder="Descreva o problema observado..."
            ></textarea>
          </div>

          {/* Área de Anexo de Foto funcional (Estilo Cadastro) */}
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="problem-photo" className="cursor-pointer group">
              <div className="border-2 border-dashed border-white/10 rounded-3xl p-4 h-44 flex flex-col items-center justify-center text-center group-hover:border-[#ffb800]/50 transition-all overflow-hidden relative">
                {problemImage ? (
                  <img src={problemImage} alt="Preview" className="w-full h-full object-cover rounded-2xl animate-in fade-in zoom-in duration-300" />
                ) : (
                  <>
                    <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">📸</span>
                    <p className="text-[10px] font-bold uppercase text-gray-500 group-hover:text-[#ffb800]">Anexar Foto do Local</p>
                    <p className="text-[9px] text-gray-600 mt-1 uppercase font-medium">Clique para selecionar</p>
                  </>
                )}
              </div>
            </label>
            <input 
              id="problem-photo" 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleImageChange} 
            />
          </div>

          {/* Botão de Envio */}
          <div className="col-span-2 md:col-span-1 flex items-end">
            <button 
              type="submit"
              className="w-full bg-[#ffb800] text-black font-black py-5 rounded-[24px] hover:bg-[#ffcc33] transition-all shadow-xl shadow-[#ffb800]/5 active:scale-95"
            >
              ENVIAR RELATO →
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default ProblemRegistration;