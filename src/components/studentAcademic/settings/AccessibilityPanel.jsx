const AccessibilityPanel = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-6">
      <h2 className="text-xl font-bold mb-2">Accessibility</h2>

      {/* Contrast */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Contrast Level
        </label>
        <input
          type="range"
          min="1"
          max="3"
          step="1"
          className="w-full accent-slate-500"
          defaultValue="1"
          onChange={(e) => {
            document.body.style.filter =
              e.target.value === "2"
                ? "contrast(1.2)"
                : e.target.value === "3"
                ? "contrast(1.5)"
                : "contrast(1)";
          }}
        />
        <p className="text-sm text-slate-500 mt-1">1: Normal, 2: Medium, 3: High</p>
      </div>

      {/* Font Size */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          Font Size
        </label>
        <input
          type="range"
          min="14"
          max="20"
          step="1"
          className="w-full accent-slate-500"
          defaultValue="16"
          onChange={(e) => {
            document.documentElement.style.setProperty("--base-font-size", `${e.target.value}px`);
            document.body.style.fontSize = `${e.target.value}px`;
          }}
        />
        <p className="text-sm text-slate-500 mt-1">Adjust the base font size of the application</p>
      </div>
    </div>
  );
};

export default AccessibilityPanel;