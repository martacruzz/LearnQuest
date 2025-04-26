import React from "react";

function TaskCard({ title, project, priority, onClick }) {
  return (
    <div
      className="flex flex-col bg-slate-600 hover:bg-slate-500 text-white px-2 py-1 rounded-md cursor-pointer transition-all text-xs"
      title={title}
      onClick={onClick}
    >
      {/* Title */}
      <div className="truncate font-semibold">{title}</div>

      {/* Project and Priority Info */}
      <div className="flex flex-col justify-between text-slate-300 text-[10px] mt-1">
        <span className="truncate">Project: {project}</span>
        <span className="truncate">Priority: {priority}</span>
      </div>
    </div>
  );
}

export default TaskCard;
