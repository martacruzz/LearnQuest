const NotificationsPanel = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-2">Preferências de Notificação</h2>
      <label className="flex items-center gap-2">
        <input type="checkbox" className="w-4 h-4 accent-slate-500" /> Tarefas
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" className="w-4 h-4 accent-slate-500" /> Eventos e Calendário
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" className="w-4 h-4 accent-slate-500" /> Progresso semanal
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" className="w-4 h-4 accent-slate-500" /> Mensagens de clãs
      </label>
    </div>
  );
};

export default NotificationsPanel;