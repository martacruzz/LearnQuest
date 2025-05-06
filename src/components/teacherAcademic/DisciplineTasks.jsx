import { useState } from "react";
import { Plus, Trash2, Pencil, Eye, EyeOff } from "lucide-react";

function DisciplineTasks() {
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(null); // id da tarefa a visualizar
  const [editMode, setEditMode] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      date: "2024-04-10",
      name: "Exercícios",
      description: "Resolver ficha 3",
      submission: "Submeter no Teams",
      hour: "23:59",
      xp: 20,
      visible: true,
    },
    {
      id: 2,
      date: "2024-05-27",
      name: "Documento trincheiras",
      description: "Apresentação final",
      submission: "Via email",
      hour: "23:59",
      xp: 50,
      visible: false,
    },
  ]);

  const [newTask, setNewTask] = useState({
    date: "",
    name: "",
    description: "",
    submission: "",
    hour: "",
    xp: "",
    visible: true,
  });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleCreateOrEditTask = () => {
    if (!newTask.name || !newTask.date || !newTask.hour) return;

    if (editMode !== false) {
      // Edição
      const updated = tasks.map((task) =>
        task.id === editMode ? { ...task, ...newTask } : task
      );
      setTasks(updated);
    } else {
      // Criação
      const taskToAdd = { ...newTask, id: Date.now() };
      setTasks([...tasks, taskToAdd]);
    }

    setNewTask({
      date: "",
      name: "",
      description: "",
      submission: "",
      hour: "",
      xp: "",
      visible: true,
    });

    setEditMode(false);
    setShowModal(false);
  };

  const handleEdit = (task) => {
    setNewTask({ ...task });
    setEditMode(task.id);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleVisibility = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, visible: !t.visible } : t))
    );
  };

  return (
    <div className="overflow-auto text-gray-800">
      {/* Header */}
      <div className="flex justify-end items-center mb-6">
        <button
          onClick={() => {
            setShowModal(true);
            setEditMode(false);
            setNewTask({
              date: "",
              name: "",
              description: "",
              submission: "",
              hour: "",
              xp: "",
              visible: true,
            });
          }}
          className="w-14 h-14 bg-slate-700 text-white rounded-full flex items-center justify-center shadow hover:scale-105 transition"
        >
          <Plus />
        </button>
      </div>

      {/* Lista de Tarefas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => setShowViewModal(task.id)}
            className="bg-white border rounded-xl p-4 flex flex-col justify-between shadow cursor-pointer"
          >
            <div>
              <p className="text-sm text-gray-500 mb-1">
                {new Date(task.date).toLocaleDateString("pt-PT")}
              </p>
              <p className="font-semibold text-lg">{task.name}</p>
              <p className="text-sm text-gray-600">Due at {task.hour}</p>
            </div>
            <div
              className="flex justify-end gap-3 mt-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button title="Editar" onClick={() => handleEdit(task)}>
                <Pencil className="w-5 h-5 text-gray-600 hover:text-blue-500" />
              </button>
              <button title="Eliminar" onClick={() => handleDelete(task.id)}>
                <Trash2 className="w-5 h-5 text-gray-600 hover:text-red-500" />
              </button>
              <button
                title="Visibilidade"
                onClick={() => toggleVisibility(task.id)}
              >
                {task.visible ? (
                  <Eye className="w-5 h-5 text-gray-600 hover:text-slate-500" />
                ) : (
                  <EyeOff className="w-5 h-5 text-gray-400 hover:text-slate-500" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Criar/Editar */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-xl text-black shadow-lg">
            <h3 className="text-xl font-bold mb-4">
              {editMode ? "Editar Tarefa" : "Nova Tarefa"}
            </h3>

            <div className="space-y-3">
              <input
                type="text"
                name="name"
                value={newTask.name}
                onChange={handleChange}
                placeholder="Task Name"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                name="description"
                value={newTask.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                name="submission"
                value={newTask.submission}
                onChange={handleChange}
                placeholder="Submission Details"
                className="w-full border rounded px-3 py-2"
              />

              <div className="flex gap-2">
                <input
                  type="date"
                  name="date"
                  value={newTask.date}
                  onChange={handleChange}
                  className="w-1/2 border rounded px-2 py-1"
                />
                <input
                  type="time"
                  name="hour"
                  value={newTask.hour}
                  onChange={handleChange}
                  className="w-1/2 border rounded px-2 py-1"
                />
              </div>

              <div className="flex gap-4 items-center">
                <label className="text-sm">XP</label>
                <input
                  type="number"
                  name="xp"
                  value={newTask.xp}
                  onChange={handleChange}
                  className="w-24 border rounded px-2 py-1"
                />
                <label className="ml-6 text-sm">Recursos</label>
                <input type="file" className="text-sm" />
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-red-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateOrEditTask}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-green-400"
              >
                {editMode ? "Save" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Visualizar */}
      {showViewModal !== null && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-xl text-black shadow-lg">
            <h3 className="text-xl font-bold mb-4">Task details</h3>
            {(() => {
              const task = tasks.find((t) => t.id === showViewModal);
              if (!task) return null;
              return (
                <div className="space-y-2">
                  <p>
                    <strong>Name:</strong> {task.name}
                  </p>
                  <p>
                    <strong>Description:</strong> {task.description}
                  </p>
                  <p>
                    <strong>Submission:</strong> {task.submission}
                  </p>
                  <p>
                    <strong>Date:</strong> {task.date}
                  </p>
                  <p>
                    <strong>Hour:</strong> {task.hour}
                  </p>
                  <p>
                    <strong>XP:</strong> {task.xp}
                  </p>
                  <p>
                    <strong>Visible to students:</strong>{" "}
                    {task.visible ? "Yes" : "No"}
                  </p>
                </div>
              );
            })()}
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowViewModal(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-slate-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisciplineTasks;
