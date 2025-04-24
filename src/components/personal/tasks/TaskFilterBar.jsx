import React from "react";
import { ListFilter, Calendar, AlarmClock, CheckCircle, Plus } from "lucide-react";

const filters = [
  { key: "all", label: "All", icon: ListFilter },
  { key: "today", label: "Today", icon: Calendar },
  { key: "dueSoon", label: "Due Soon", icon: AlarmClock },
  { key: "done", label: "Done", icon: CheckCircle },
];

function TaskFilterBar({ selectedFilter, setSelectedFilter, onAddProject }) {
  return (
    <div className="flex gap-6 border-b border-slate-700 px-4 pb-2 text-sm font-medium items-center">
      {filters.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => setSelectedFilter(key)}
          className={`capitalize transition-colors flex items-center gap-1 ${selectedFilter === key
            ? "border-b-2 border-white text-slate-800"
            : "text-slate-400 hover:text-slate-800"
            }`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </button>
      ))}

      {/* Add Task Button */}
      <button
        onClick={onAddProject}
        className="ml-auto text-slate-400 hover:text-slate-800 transition-colors flex items-center gap-1"
      >
        <Plus className="w-4 h-4" />
        Add Project
      </button>
    </div>
  );
}

export default TaskFilterBar;
