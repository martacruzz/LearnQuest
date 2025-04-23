import React, { useState } from "react";
import CreateTaskModal from "./CreateTaskModal";
import TaskDetailsModal from "./TaskDetailsModal";
import TaskFilterBar from "./TaskFilterBar";

const initialTasks = {
  review: [
    { title: "review C lectures", date: "April 22, 2025", done: true },
    { title: "catch up on cd lectures - flashcards for lec 7 forward", date: "April 24, 2025", done: true },
  ],
  ihc: [
    { title: "implement personal home", date: "April 23, 2025", done: true },
    { title: "implement personal tasks interface", date: "April 23, 2025", done: true },
    { title: "implement personal calendar", date: "April 23, 2025", done: true },
    { title: "implement personal clans interface", date: "April 23, 2025", done: true },
    { title: "implement clan chat", date: "April 23, 2025", done: true },
  ],
  bd: [
    { title: "check out how to implement forms with flask + python", date: "", done: false },
  ],
  cd: [
    { title: "implement p2p network", date: "April 21, 2025", done: false },
    { title: "connect http server with p2p network", date: "April 21, 2025", done: false },
    { title: "finish http server endpoint implementation (abstract)", date: "April 21, 2025", done: false },
  ],
  labs: [
    { title: "finish C lab", date: "April 22, 2025", done: true },
  ],
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeColumn, setActiveColumn] = useState(null);
  const [newTask, setNewTask] = useState({ title: "", date: "" });
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const toggleDone = (column, index) => {
    const updated = { ...tasks };
    updated[column][index].done = !updated[column][index].done;
    setTasks(updated);
  };

  const isToday = (dateStr) => {
    const today = new Date();
    const date = new Date(dateStr);
    return date.toDateString() === today.toDateString();
  };

  const isDueSoon = (dateStr) => {
    if (!dateStr) return false;
    const today = new Date();
    const date = new Date(dateStr);
    const diff = (date - today) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 3;
  };

  const filteredTasks = (column) => {
    return tasks[column].filter((task) => {
      if (selectedFilter === "all") return true;
      if (selectedFilter === "done") return task.done;
      if (selectedFilter === "today") return task.date && isToday(task.date);
      if (selectedFilter === "due soon") return task.date && isDueSoon(task.date);
      return true;
    });
  };

  const columns = [
    { key: "review", title: "🧠 review" },
    { key: "ihc", title: "🛠️ IHC - PROJECT" },
    { key: "bd", title: "🗃️ BD project" },
    { key: "cd", title: "🔧 CD final project" },
    { key: "labs", title: "🧪 labs" },
  ];

  return (
    <div className="min-h-screen p-6 text-white max-w-screen-lg mx-auto overflow-x-auto">
      <TaskFilterBar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />

      <div className="mt-4 flex gap-4 overflow-x-auto">
        {columns.map((col) => (
          <div key={col.key} className="bg-slate-800 rounded-lg p-4 w-72 flex-shrink-0 shadow-lg">
            <h2 className="text-lg font-semibold mb-3">
              {col.title}
              <span className="text-sm text-gray-400 ml-2">0%</span>
            </h2>
            <div className="flex flex-col gap-3">
              {filteredTasks(col.key).map((task, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedTask(task)}
                  className="bg-slate-700 rounded-md p-3 text-sm shadow flex flex-col gap-1"
                >
                  <p className="font-medium">{task.title}</p>
                  {task.date && <p className="text-xs text-gray-300">{task.date}</p>}
                  <label
                    className="flex items-center gap-2 text-xs"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => toggleDone(col.key, index)}
                      className="accent-green-500"
                    />
                    Done
                  </label>
                </div>
              ))}
              <button
                className="bg-slate-600 text-xs text-white px-2 py-1 rounded mt-2 hover:bg-slate-500"
                onClick={() => {
                  setActiveColumn(col.key);
                  setNewTask({ title: "", date: "" });
                  setIsModalOpen(true);
                }}
              >
                + New page
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <CreateTaskModal
          columnTitle={activeColumn}
          onClose={() => setIsModalOpen(false)}
          onSave={(taskData) => {
            const formattedDate = taskData.date
              ? new Date(taskData.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
              : new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

            const newTask = {
              ...taskData,
              date: formattedDate,
              done: false,
            };

            const updated = { ...tasks };
            updated[activeColumn].push(newTask);
            setTasks(updated);
            setIsModalOpen(false);
          }}
        />
      )}

      {selectedTask && (
        <TaskDetailsModal task={selectedTask} onClose={() => setSelectedTask(null)} />
      )}
    </div>
  );
};

export default TaskBoard;
