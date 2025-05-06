const SecurityPanel = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold mb-2">Sessões activas</h2>
        <p className="text-sm text-slate-600 mb-2">3 dispositivos ligados</p>
        <button className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-500">
          Terminar todas as sessões
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Autenticação em dois factores</h2>
        <p className="text-sm text-slate-500 mb-2">Melhora a segurança da tua conta</p>
        <button className="px-4 py-2 bg-slate-200 rounded hover:bg-slate-300 text-sm">
          Activar 2FA
        </button>
      </div>
    </div>
  );
};

export default SecurityPanel;