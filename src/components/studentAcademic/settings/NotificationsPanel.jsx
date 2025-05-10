const NotificationsPanel = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-2">Notification Preferences</h2>
      <label className="flex items-center gap-2">
        <input type="checkbox" className="w-4 h-4 accent-slate-500" /> Tasks
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" className="w-4 h-4 accent-slate-500" /> Events & Calendar
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" className="w-4 h-4 accent-slate-500" /> Weekly Progress
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" className="w-4 h-4 accent-slate-500" /> Clan Messages
      </label>
    </div>
  );
};

export default NotificationsPanel;