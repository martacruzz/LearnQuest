import React, { useState, useEffect } from "react";

const EditTaskModal = ({ task, onClose, onSave }) => {
  const [title, setTitle] = useState(task?.title || "");
  const [date, setDate] = useState(task?.date || "");
  const [xp, setXp] = useState(task?.xp?.toString() || "");
  const [description, setDescription] = useState(task?.description || "");
  const [priority, setPriority] = useState(task?.priority || "chill");
  const [errors, setErrors] = useState({});
  const [customPriority, setCustomPriority] = useState("");
  const [customPriorities, setCustomPriorities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedPriorities = JSON.parse(localStorage.getItem("customPriorities")) || [];
    setCustomPriorities(savedPriorities);
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) {
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

    const updatedTask = {
      ...task,
      title,
      date,
      xp: Number(xp),
      description,
      priority,
    };

    onSave(updatedTask);
  };

  const handleCustomPrioritySave = () => {
    if (customPriority.trim()) {
      const updated = [...customPriorities, customPriority];
      setCustomPriorities(updated);
      localStorage.setItem("customPriorities", JSON.stringify(updated));
      setPriority(customPriority);
      setCustomPriority("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-slate-800 rounded-lg p-6 w-96 shadow-xl relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-white hover:text-red-400 text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>

        <h2 className="text-white text-lg mb-4 font-semibold">Edit Task</h2>

        {/* Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
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
          value={xp}
          onChange={(e) => setXp(e.target.value)}
          placeholder="XP"
          className="w-full mb-1 p-2 rounded bg-slate-700 text-white placeholder-gray-300"
        />
        {errors.xp && <p className="text-red-400 text-xs mb-2">{errors.xp}</p>}

        {/* Priority */}
        <div className="relative mb-1">
          <div
            className="w-full p-2 rounded bg-slate-700 text-white flex items-center justify-between"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>{priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
            <span className="text-gray-300">{isOpen ? "▲" : "▼"}</span>
          </div>

          {isOpen && (
            <ul className="absolute w-full bg-slate-700 text-white mt-1 rounded shadow-lg z-10">
              <li className="p-2 hover:bg-slate-600 cursor-pointer" onClick={() => { setPriority("chill"); setIsOpen(false); }}>
                Chill
              </li>
              <li className="p-2 hover:bg-slate-600 cursor-pointer" onClick={() => { setPriority("urgent"); setIsOpen(false); }}>
                Urgent
              </li>

              {customPriorities.map((custom, index) => (
                <li key={index} className="p-2 hover:bg-slate-600 cursor-pointer" onClick={() => { setPriority(custom); setIsOpen(false); }}>
                  {custom}
                </li>
              ))}

              <li className="p-2 hover:bg-slate-600 cursor-pointer" onClick={() => setIsOpen(false)}>
                <input
                  type="text"
                  value={customPriority}
                  onChange={(e) => setCustomPriority(e.target.value)}
                  placeholder="Custom Priority"
                  className="w-full p-2 rounded bg-slate-700 text-white placeholder-gray-300"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCustomPrioritySave();
                  }}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1 mt-1 rounded"
                >
                  Add
                </button>
              </li>
            </ul>
          )}
        </div>

        {/* Description */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows={3}
          className="w-full mb-4 p-2 rounded bg-slate-700 text-white placeholder-gray-300 resize-none"
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

export default EditTaskModal;
