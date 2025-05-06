const AccountPanel = () => {
    return (
      <div className="flex flex-col gap-6">
        {/* Nome e Avatar */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Perfil</h2>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-slate-700 text-white flex items-center justify-center text-2xl font-bold">
              L
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                defaultValue="Leonor Ferreira"
                className="px-3 py-2 rounded bg-slate-100 text-sm w-60"
              />
              <a href="#" className="text-slate-600 text-sm hover:underline">
                Alterar fotografia
              </a>
            </div>
          </div>
        </div>
  
        {/* Segurança */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Segurança</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="text-sm text-slate-600">E-mail</p>
                <p className="text-sm">leonorferreira03@gmail.com</p>
              </div>
              <button className="px-3 py-1 text-sm rounded bg-slate-200 hover:bg-slate-300">
                Alterar e-mail
              </button>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="text-sm text-slate-600">Palavra-passe</p>
                <p className="text-sm text-slate-500">Define uma palavra-passe para proteger a conta.</p>
              </div>
              <button className="px-3 py-1 text-sm rounded bg-slate-200 hover:bg-slate-300">
                Definir palavra-passe
              </button>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="text-sm text-slate-600">Verificação em duas etapas</p>
                <p className="text-sm text-slate-500">Adiciona uma camada extra de segurança.</p>
              </div>
              <button className="px-3 py-1 text-sm rounded bg-slate-100 text-slate-400 cursor-not-allowed">
                Em breve
              </button>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-slate-600">Chaves de acesso</p>
                <p className="text-sm text-slate-500">Autenticação por biometria ou dispositivo.</p>
              </div>
              <button className="px-3 py-1 text-sm rounded bg-slate-100 text-slate-400 cursor-not-allowed">
                Em breve
              </button>
            </div>
          </div>
        </div>
  
        {/* Reestabelecer Definições */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Definições do Sistema</h2>
          <p className="text-sm text-slate-600 mb-4">
            Esta opção reverte todas as preferências de sistema para os valores por omissão. Não afecta os teus dados ou conteúdos.
          </p>
          <button className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-500">
            Reestabelecer definições
          </button>
        </div>
      </div>
    );
  };
  
  export default AccountPanel;