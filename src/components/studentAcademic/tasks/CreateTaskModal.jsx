import React, { useState, useEffect } from "react";

const CreateTaskModal = ({ onClose, onSave, columnTitle }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [xp, setXp] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [priority, setPriority] = useState("chill"); // default value
  const [customPriority, setCustomPriority] = useState("");
  const [customPriorities, setCustomPriorities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedPriorities = JSON.parse(localStorage.getItem("customPriorities")) || [];
    setCustomPriorities(savedPriorities);
  }, []);

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
      priority,
    };

    onSave(task);
  };

  const handleCustomPrioritySave = () => {
    if (customPriority.trim()) {
      const updatedPriorities = [...customPriorities, customPriority];
      setCustomPriorities(updatedPriorities);
      localStorage.setItem("customPriorities", JSON.stringify(updatedPriorities));
      setPriority(customPriority);
      setCustomPriority("");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-96 shadow-xl relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-gray-700 hover:text-red-400 text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-gray-800 text-lg mb-4 font-semibold">Add task to {columnTitle}</h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Task title"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full mb-1 p-2 rounded bg-gray-100 text-gray-800 placeholder-gray-400 border border-gray-300"
        />
        {errors.title && <p className="text-red-400 text-xs mb-2">{errors.title}</p>}

        {/* Date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mb-1 p-2 rounded bg-gray-100 text-gray-800 border border-gray-300"
        />

        {/* XP */}
        <input
          type="number"
          placeholder="XP"
          value={xp}
          onChange={(e) => setXp(e.target.value)}
          className="w-full mb-1 p-2 rounded bg-gray-100 text-gray-800 placeholder-gray-400 border border-gray-300"
        />
        {errors.xp && <p className="text-red-400 text-xs mb-2">{errors.xp}</p>}

        {/* Priority */}
        <div className="relative mb-1">
          <div
            className="w-full p-2 rounded bg-gray-100 text-gray-800 flex items-center justify-between border border-gray-300"
            onClick={() => setIsOpen(!isOpen)} // Toggle isOpen state
          >
            <span>{priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
            <span className="text-gray-400">{isOpen ? "▲" : "▼"}</span>
          </div>

          {isOpen && (
            <ul className="absolute w-full bg-white text-gray-800 mt-1 rounded shadow-lg z-10 border border-gray-300">
              <li
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setPriority("chill"); setIsOpen(false); }}
              >
                Chill
              </li>
              <li
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => { setPriority("urgent"); setIsOpen(false); }}
              >
                Urgent
              </li>

              {/* Render custom priorities */}
              {customPriorities.map((custom, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => { setPriority(custom); setIsOpen(false); }}
                >
                  {custom}
                </li>
              ))}

              <li
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setIsOpen(false)} // Close the dropdown if selecting custom priority
              >
                <input
                  type="text"
                  value={customPriority}
                  onChange={(e) => setCustomPriority(e.target.value)}
                  placeholder="Custom Priority"
                  className="w-full p-2 rounded bg-gray-100 text-gray-800 placeholder-gray-400 border border-gray-300"
                  onClick={(e) => e.stopPropagation()} // Prevent dropdown from closing when clicking inside
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent dropdown from closing when clicking the Add button
                    handleCustomPrioritySave();
                  }}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-1 rounded"
                >
                  Add
                </button>

              </li>
            </ul>
          )}
        </div>

        {/* Description */}
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-4 p-2 rounded bg-gray-100 text-gray-800 placeholder-gray-400 resize-none border border-gray-300"
          rows={3}
        />

        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-red-400 text-gray-800 px-4 py-1 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-gray-200 hover:bg-green-400 text-black px-4 py-1 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
