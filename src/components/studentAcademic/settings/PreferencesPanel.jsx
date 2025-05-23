const PreferencesPanel = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold mb-2">Theme</h2>
        <div className="flex gap-4">
          <button className="px-4 py-2 bg-slate-200 rounded hover:bg-slate-300">Light</button>
          <button className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700">Dark</button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Compact Mode</h2>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 accent-slate-500" /> Use reduced spacing
        </label>
      </div>
    </div>
  );
};

export default PreferencesPanel;