// TaskDetailsModal.js
import React from "react";

const TaskDetailsModal = ({ task, onClose }) => {
  if (!task) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}>
      <div className="bg-slate-800 rounded-lg p-6 w-96 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}>

        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-white hover:text-red-400 text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-white text-xl font-semibold mb-4">Task Details</h2>

        <div className="text-white text-sm space-y-2">
          <p><span className="font-semibold">Title:</span> {task.title}</p>
          <p><span className="font-semibold">Date:</span> {task.date || "No date"}</p>
          <p><span className="font-semibold">XP:</span> {task.xp || "—"}</p>
          <p><span className="font-semibold">Priority:</span> {task.priority || "—"}</p>
          <p><span className="font-semibold">Description:</span> {task.description || "No description"}</p>
          <p><span className="font-semibold">Done:</span> {task.done ? "✅ Yes" : "❌ No"}</p>
        </div>

      </div>

    </div>
  );
};

export default TaskDetailsModal;
