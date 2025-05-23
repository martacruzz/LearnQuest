const IntegrationsPanel = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-6">
      <h2 className="text-xl font-bold mb-2">Connections & Integrations</h2>
      <p className="text-sm text-slate-500">No active integrations at this time.</p>
      <button className="px-4 py-2 bg-slate-200 rounded hover:bg-slate-300 w-fit">
        Explore integrations
      </button>
    </div>
  );
};

export default IntegrationsPanel;