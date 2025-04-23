import React, { useState } from "react";

const CreateTaskModal = ({ onClose, onSave, columnTitle }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [xp, setXp] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!text.trim()) {
      newErrors.title = "Title is required.";
    }

    if (!xp || isNaN(xp) || !Number.isInteger(Number(xp)) || Number(xp) === 0) {
      newErrors.xp = "XP must be a non-zero integer.";
    }

    return newErrors;
  };

  const handleSave = () => {
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const task = {
      title: text,
      date,
      xp: xp ? Number(xp) : 0,
      description,
    };

    onSave(task);
  };

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

        <h2 className="text-white text-lg mb-4 font-semibold">
          Add task to {columnTitle}
        </h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Task title"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full mb-1 p-2 rounded bg-slate-700 text-white placeholder-gray-300"
        />
        {errors.title && <p className="text-red-400 text-xs mb-2">{errors.title}</p>}

        {/* Date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-1 p-2 rounded bg-slate-700 text-white"
        />

        {/* XP */}
        <input
          type="number"
          placeholder="XP"
          value={xp}
          onChange={(e) => setXp(e.target.value)}
          className="w-full mb-1 p-2 rounded bg-slate-700 text-white placeholder-gray-300"
        />
        {errors.xp && <p className="text-red-400 text-xs mb-2">{errors.xp}</p>}

        {/* Description */}
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-slate-700 text-white placeholder-gray-300 resize-none"
          rows={3}
        />

        {/* Buttons */}
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

export default CreateTaskModal;
