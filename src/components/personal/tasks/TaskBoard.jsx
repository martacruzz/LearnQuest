import { v4 as uuidv4 } from 'uuid';
import React, { useState, useEffect, useRef } from "react";
import CreateTaskModal from "./CreateTaskModal";
import TaskDetailsModal from "./TaskDetailsModal";
import TaskFilterBar from "./TaskFilterBar";
import ContextMenu from './TasksContextMenu';
import EditTaskModal from './EditTaskModal';
import CreateProjectModal from './CreateProjectModal';
import EditProjectModal from './EditProjectModal';

const initialTasks = {
  review: [
    { id: uuidv4(), title: "review C lectures", date: "April 22, 2025", done: true },
    { id: uuidv4(), title: "catch up on cd lectures - flashcards for lec 7 forward", date: "April 24, 2025", done: true },
  ],
  ihc: [
    { id: uuidv4(), title: "implement personal home", date: "April 23, 2025", done: true },
    { id: uuidv4(), title: "implement personal tasks interface", date: "April 23, 2025", done: true },
    { id: uuidv4(), title: "implement personal calendar", date: "April 23, 2025", done: true },
    { id: uuidv4(), title: "implement personal clans interface", date: "April 23, 2025", done: true },
    { id: uuidv4(), title: "implement clan chat", date: "April 23, 2025", done: true },
  ],
  bd: [
    { id: uuidv4(), title: "check out how to implement forms with flask + python", date: "", done: false },
  ],
  cd: [
    { id: uuidv4(), title: "implement p2p network", date: "April 21, 2025", done: false },
    { id: uuidv4(), title: "connect http server with p2p network", date: "April 21, 2025", done: false },
    { id: uuidv4(), title: "finish http server endpoint implementation (abstract)", date: "April 21, 2025", done: false },
  ],
  labs: [
    { id: uuidv4(), title: "finish C lab", date: "April 22, 2025", done: true },
  ],
};

const TaskBoard = () => {

  const [tasks, setTasks] = useState(initialTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeColumn, setActiveColumn] = useState(null);
  const [newTask, setNewTask] = useState({ id: uuidv4(), title: "", date: "" });
  const [selectedTask, setSelectedTask] = useState(null);
  const [rightClickSelectedTask, setRightClickSelectedTask] = useState(null);
  const [selectedTaskColumn, setSelectedTaskColumn] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [customPriorities, setCustomPriorities] = useState(["chill", "urgent"]);
  const [contextMenu, setContextMenu] = useState(null); // Track the context menu state
  const contextMenuRef = useRef(null); // reference to the context menu
  const [columnContextMenu, setColumnContextMenu] = useState(null);
  const columnContextMenuRef = useRef(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isEditProjectModalOpen, setIsEditProjectModalOpen] = useState(false);

  const [columns, setColumns] = useState([
    { key: "review", title: "🧠 review" },
    { key: "ihc", title: "🛠️ IHC - PROJECT" },
    { key: "bd", title: "🗃️ BD project" },
    { key: "cd", title: "🔧 CD final project" },
    { key: "labs", title: "🧪 labs" },
  ]);

  // track clicks outside of the context menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(e.target)) {
        closeContextMenu();
      }
      if (columnContextMenuRef.current && !columnContextMenuRef.current.contains(e.target)) {
        closeColumnContextMenu();
      }
    };

    if (contextMenu || columnContextMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [contextMenu, columnContextMenu]);


  // track delete key presses when context menu is active
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Delete" && selectedTask && selectedTaskColumn) {
        deleteTask(selectedTaskColumn, selectedTask.id);
        setRightClickSelectedTask(null);
        setSelectedTaskColumn(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedTask, selectedTaskColumn]);

  // handlers for projects
  const closeColumnContextMenu = () => {
    setColumnContextMenu(null);
  };

  const deleteColumn = (columnKey) => {
    setColumns((prev) => prev.filter((col) => col.key !== columnKey));
    setTasks((prev) => {
      const updated = { ...prev };
      delete updated[columnKey];
      return updated;
    });
    closeColumnContextMenu();
  };

  const updateProject = (updatedProject) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.key === updatedProject.key ? { ...col, title: updatedProject.title } : col
      )
    );
  };

  // handlers for task editing
  const handleEditSave = (updatedTask) => {
    const formattedDate = updatedTask.date
      ? new Date(updatedTask.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      : "";

    const updatedTaskWithFormattedDate = {
      ...updatedTask,
      date: formattedDate,
    };

    setTasks((prevTasks) => {
      const updatedColumn = prevTasks[selectedTaskColumn].map((task) =>
        task.id === updatedTask.id ? updatedTaskWithFormattedDate : task
      );
      return {
        ...prevTasks,
        [selectedTaskColumn]: updatedColumn,
      };
    });

    setIsEditModalOpen(false);
    setSelectedTask(null);
    setSelectedTaskColumn(null);
  };



  // Handle context menu for right-click
  const handleContextMenu = (e, task, column) => {
    e.preventDefault();
    e.stopPropagation();
    setRightClickSelectedTask(task);
    setSelectedTaskColumn(column);
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      task,
      column,
    });
  };

  // Close context menu
  const closeContextMenu = () => {
    setContextMenu(null);
  };

  // Delete task function
  const deleteTask = (column, taskId) => {
    setTasks((prev) => {
      const updatedColumn = prev[column].filter((task) => task.id !== taskId);
      return {
        ...prev,
        [column]: updatedColumn,
      };
    });
  };

  // handler for the done task checkbox
  const toggleDone = (column, id) => {
    setTasks((prev) => {
      const updatedColumn = prev[column].map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      );
      return {
        ...prev,
        [column]: updatedColumn,
      };
    });
  };

  // handlers for the filter bar
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
      if (selectedFilter === "today") return !task.done && task.date && isToday(task.date);
      if (selectedFilter === "dueSoon") return !task.done && task.date && isDueSoon(task.date);
      return true;
    });
  };

  // handler for calculating the percentage for each project
  const getCompletionPercentage = (columnKey) => {
    const columnTasks = tasks[columnKey];
    if (!columnTasks || columnTasks.length === 0) return 0;

    const completed = columnTasks.filter(task => task.done).length;
    return Math.round((completed / columnTasks.length) * 100);
  };


  return (
    <div className="min-h-screen p-6 text-white max-w-screen-xl mx-auto overflow-x-auto" onClick={closeContextMenu}>
      <TaskFilterBar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        onAddProject={() => setIsProjectModalOpen(true)}
      />


      <div className="mt-4 flex gap-4 overflow-x-auto">
        {columns.map((col) => (
          <div key={col.key}
            className="bg-slate-800 rounded-lg p-4 w-72 flex-shrink-0 shadow-lg"
            onContextMenu={(e) => {
              e.preventDefault();
              setColumnContextMenu({
                x: e.clientX,
                y: e.clientY,
                columnKey: col.key,
              });
            }}
          >
            <h2 className="text-lg font-semibold mb-3">
              {col.title}
              <span className="text-sm text-gray-400 ml-2">
                {getCompletionPercentage(col.key)}%
              </span>

            </h2>
            <div className="flex flex-col gap-3">
              {filteredTasks(col.key).map((task) => (
                <div
                  key={task.id}
                  onClick={(e) => {

                    if (e.button === 0) {
                      // left click only
                      setSelectedTask(task)
                    } else if (e.button === 2) {
                      // right click only
                      setRightClickSelectedTask(task)
                    }
                  }}
                  onContextMenu={(e) => handleContextMenu(e, task, col.key)} // Right-click for context menu
                  className={`bg-slate-700 rounded-md p-3 text-sm shadow flex flex-col gap-1 ${selectedTask?.id === task.id ? 'border-2 border-blue-500' : ''}`}
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
                      onChange={(e) => {
                        toggleDone(col.key, task.id)
                      }}
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
                  setNewTask({ id: uuidv4(), title: "", date: "" });
                  setIsModalOpen(true);
                }}
              >
                + New page
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CONDITIONAL RENDERINGS */}

      {/* Render create task modal */}
      {isModalOpen && (
        <CreateTaskModal
          columnTitle={columns.find(col => col.key === activeColumn)?.title || activeColumn}
          onClose={() => setIsModalOpen(false)}
          customPriorities={customPriorities}
          setCustomPriorities={setCustomPriorities}
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
              id: uuidv4(),
              priority: taskData.priority || "chill", // default for a task is chill
            };

            const updated = { ...tasks };
            updated[activeColumn].push(newTask);
            setTasks(updated);
            setIsModalOpen(false);
          }}
        />
      )}

      {/* Render Edit task modal */}
      {isEditModalOpen && selectedTask && (
        <EditTaskModal
          task={selectedTask}
          onClose={() => {
            setIsEditModalOpen(false);
            setSelectedTask(null);
            setSelectedTaskColumn(null);
          }}
          onSave={handleEditSave}
        />
      )}


      {/* Render Modal with task details */}
      {selectedTask && !isEditModalOpen && (
        <TaskDetailsModal task={selectedTask} onClose={() => setSelectedTask(null)} />
      )}

      {/* Render Context Menu if available */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          ref={contextMenuRef}
          onDelete={() => {
            deleteTask(contextMenu.column, contextMenu.task.id);
            closeContextMenu();
          }}
          onEdit={() => {
            setSelectedTask(contextMenu.task);
            setSelectedTaskColumn(contextMenu.column);
            setIsEditModalOpen(true);
            closeContextMenu();
          }}
        />
      )}

      {/* Render Context Menu for the columns - ADAPT THIS HERE */}
      {columnContextMenu && (
        <ContextMenu
          x={columnContextMenu.x}
          y={columnContextMenu.y}
          ref={columnContextMenuRef}
          onDelete={() => {
            deleteColumn(columnContextMenu.columnKey);
            closeContextMenu();
          }}
          onEdit={() => {
            setActiveColumn(columnContextMenu.columnKey); // <- assuming you have this
            setIsEditProjectModalOpen(true);
            closeContextMenu();
          }}
        />
      )}


      {/* Render create project modal if available */}
      {isProjectModalOpen && (
        <CreateProjectModal
          onClose={() => setIsProjectModalOpen(false)}
          onSave={(newProjectKey, newProjectTitle) => {
            setColumns(prev => [...prev, { key: newProjectKey, title: newProjectTitle }]);
            setTasks(prev => ({ ...prev, [newProjectKey]: [] }));
            setIsProjectModalOpen(false);
          }}
        />
      )}

      {/* Render edit project modal if available */}
      {isEditProjectModalOpen && activeColumn && (
        <EditProjectModal
          project={columns.find((col) => col.key === activeColumn)}
          onClose={() => setIsEditProjectModalOpen(false)}
          onSave={(updatedProject) => {
            updateProject(updatedProject);
            setIsEditProjectModalOpen(false);
          }}
        />
      )}


    </div>
  );
};

export default TaskBoard;
