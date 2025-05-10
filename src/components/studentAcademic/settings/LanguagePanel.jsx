const LanguagePanel = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-6">
      <h2 className="text-xl font-bold mb-2">Language & Region</h2>

      {/* Language */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Language</label>
        <select className="bg-slate-100 p-2 rounded w-64">
          <option>English</option>
          <option>Portuguese</option>
          <option>Spanish</option>
          <option>German</option>
          <option>French</option>
          <option>Italian</option>
        </select>
      </div>

      {/* Time Format */}
      <div>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 accent-slate-500" /> Use 24-hour format
        </label>
      </div>

      {/* Time Zone */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Time Zone</label>
        <select className="bg-slate-100 p-2 rounded w-64">
          <option>(UTC-08:00) Los Angeles</option>
          <option>(UTC-05:00) New York</option>
          <option>(UTC+00:00) Lisbon</option>
          <option>(UTC+01:00) Berlin</option>
          <option>(UTC+02:00) Helsinki</option>
          <option>(UTC+03:00) Moscow</option>
          <option>(UTC+05:30) New Delhi</option>
          <option>(UTC+08:00) Beijing</option>
          <option>(UTC+09:00) Tokyo</option>
          <option>(UTC+10:00) Sydney</option>
        </select>
      </div>
    </div>
  );
};

export default LanguagePanel;