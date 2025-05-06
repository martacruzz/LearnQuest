const LanguagePanel = () => {
    return (
      <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-6">
        <h2 className="text-xl font-bold mb-2">Idioma e Região</h2>
  
        {/* Idioma */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Idioma</label>
          <select className="bg-slate-100 p-2 rounded w-64">
            <option>Português</option>
            <option>Inglês</option>
            <option>Espanhol</option>
            <option>Alemão</option>
            <option>Francês</option>
            <option>Italiano</option>
          </select>
        </div>
  
        {/* Formato de hora */}
        <div>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 accent-slate-500" /> Usar formato 24h
          </label>
        </div>
  
        {/* Fuso Horário */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Fuso Horário</label>
          <select className="bg-slate-100 p-2 rounded w-64">
            <option>(UTC-08:00) Los Angeles</option>
            <option>(UTC-05:00) Nova Iorque</option>
            <option>(UTC+00:00) Lisboa</option>
            <option>(UTC+01:00) Berlim</option>
            <option>(UTC+02:00) Helsínquia</option>
            <option>(UTC+03:00) Moscovo</option>
            <option>(UTC+05:30) Nova Deli</option>
            <option>(UTC+08:00) Pequim</option>
            <option>(UTC+09:00) Tóquio</option>
            <option>(UTC+10:00) Sydney</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default LanguagePanel;