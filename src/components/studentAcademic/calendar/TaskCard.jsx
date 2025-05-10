import React from "react";

function TaskCard({ title, subject, priority, onClick }) {
  return (
    <div
      className="flex flex-col bg-gray-500 hover:bg-slate-600 text-white px-2 py-1 rounded-md cursor-pointer transition-all text-xs"
      title={title}
      onClick={onClick}
    >
      <div className="truncate font-semibold">{title}</div>
      <div className="flex flex-col justify-between text-slate-300 text-[10px] mt-1">
        <span className="truncate">Subject: {subject}</span>
        <span className="truncate">Priority: {priority}</span>
      </div>
    </div>
  );
}

export default TaskCard;