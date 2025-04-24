import React, { useState, useEffect } from "react";

const EditProjectModal = ({ project, onClose, onSave }) => {
  const [name, setName] = useState(project?.title || "");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!name.trim()) {
      setError("Project name is required.");
      return;
    }

    onSave({ ...project, title: name });
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-lg p-6 w-96 shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-white hover:text-red-400 text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>

        <h2 className="text-white text-lg mb-4 font-semibold">Edit Project</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project Name"
          className="w-full mb-2 p-2 rounded bg-slate-700 text-white placeholder-gray-300"
        />
        {error && <p className="text-red-400 text-xs mb-2">{error}</p>}

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-1 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProjectModal;
