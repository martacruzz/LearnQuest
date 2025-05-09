import { useState } from "react";

export default function TaskTabs({ activeTab, setActiveTab }) {
  const tabs = ["Upcoming", "Overdue", "Completed"];

  return (
    <div className="flex gap-6 border-b border-slate-300 mb-4 text-slate-600 font-medium">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`py-2 px-1 border-b-2 transition-all duration-200 ${
            activeTab === tab
              ? "border-slate-500 text-slate-600"
              : "border-transparent hover:text-slate-800"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
