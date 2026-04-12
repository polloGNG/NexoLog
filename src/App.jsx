function App() {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
      <main className="w-full max-w-[1100px] flex justify-center">
        <div className="bg-[#1c1c1c] w-full max-w-[450px] rounded-3xl p-10 shadow-2xl border border-white/5 flex flex-col items-center">
          
          {/* Logo */}
          <div className="w-16 h-16 bg-black rounded-xl mb-6 flex items-center justify-center border border-yellow-500/50">
             <span className="text-yellow-500 font-bold text-xs text-center px-1">NEXO</span>
          </div>

          <h1 className="text-white text-3xl font-semibold tracking-[0.2em] mb-10">
            NEXOLOG
          </h1>

          <div className="w-full space-y-6">
            
            {/* Campo Email */}
            <div className="space-y-2">
              <label className="text-gray-400 text-xs font-bold uppercase ml-1">Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Seu email"
                  className="w-full bg-[#2a2a2a] border border-gray-700/50 rounded-2xl py-4 px-5 text-gray-200 focus:outline-none focus:border-yellow-500/50 transition"
                />
                {/* Ícone neutro (círculo vazio) em vez do check verde */}
                <span className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-gray-600 rounded-full"></span>
              </div>
            </div>

            {/* Campo Senha */}
            <div className="space-y-2">
              <label className="text-gray-400 text-xs font-bold uppercase ml-1">Senha</label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="Sua senha"
                  className="w-full bg-[#2a2a2a] border border-gray-700/50 rounded-2xl py-4 px-5 text-gray-200 focus:outline-none focus:border-yellow-500/50 transition"
                />
                {/* Ícone neutro (olho riscado ou simples ponto) em vez do alerta vermelho */}
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-xs">•••</span>
              </div>
              <p className="text-right text-[10px] text-gray-500 font-bold uppercase cursor-pointer hover:text-gray-300 transition-colors">
                Esqueci minha senha
              </p>
            </div>

            {/* Botão Entrar */}
            <button className="w-full bg-[#ffb800] hover:bg-[#e6a600] text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] mt-4 shadow-lg shadow-yellow-500/10">
              ENTRAR <span className="text-xl">→</span>
            </button>
          </div>



        </div>
      </main>
    </div>
  );
}

export default App;