import { useRef, useState } from "react";
import {
  Folder,
  FolderOpen,
  File,
  FileType2,
  FileText,
  Plus,
} from "lucide-react";

function DisciplineResources() {
  const [resources, setResources] = useState([
    {
      id: 1,
      type: "folder",
      name: "Fichas_de_trabalho",
      open: false,
      contents: [
        { id: 4, type: "pdf", name: "Exemplo.pdf" },
        { id: 5, type: "word", name: "Notas.docx" },
      ],
    },
    { id: 2, type: "pdf", name: "Aula1.pdf" },
    { id: 3, type: "word", name: "Resumo.docx" },
  ]);

  const [draggedItem, setDraggedItem] = useState(null); // NOVO
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const [folderName, setFolderName] = useState("");
  const fileInputRef = useRef(null);

  const renderIcon = (type, isOpen = false) => {
    if (type === "folder") {
      return isOpen ? (
        <FolderOpen className="w-16 h-16 text-yellow-500" />
      ) : (
        <Folder className="w-16 h-16 text-yellow-500" />
      );
    }
    if (type === "pdf") return <File className="w-16 h-16 text-red-600" />;
    if (type === "word")
      return <FileType2 className="w-16 h-16 text-blue-600" />;
    return <FileText className="w-16 h-16 text-gray-600" />;
  };

  const toggleFolder = (id) => {
    setResources((prev) =>
      prev.map((r) => (r.id === id ? { ...r, open: !r.open } : r))
    );
  };

  const handleAddFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const ext = file.name.split(".").pop().toLowerCase();
    const type = ext === "pdf" ? "pdf" : ext === "docx" ? "word" : "file";
    const newFile = {
      id: Date.now(),
      type,
      name: file.name,
      file, // NOVO
    };
    setResources((prev) => [...prev, newFile]);
  };

  const handleCreateFolder = () => {
    if (!folderName.trim()) return;
    const newFolder = {
      id: Date.now(),
      type: "folder",
      name: folderName.trim(),
      contents: [],
      open: false,
    };
    setResources((prev) => [...prev, newFolder]);
    setFolderName("");
    setShowCreateFolder(false);
  };

  const handleDrop = (e, folderId) => {
    e.preventDefault();

    if (draggedItem) {
      // mover ficheiro ou pasta já existente
      setResources((prev) => {
        const filtered = prev.filter((r) => r.id !== draggedItem.id);
        return filtered.map((r) =>
          r.id === folderId
            ? {
                ...r,
                contents: [...r.contents, draggedItem],
              }
            : r
        );
      });
      setDraggedItem(null);
    } else {
      // drop de ficheiro do PC
      const file = e.dataTransfer.files[0];
      if (!file) return;

      const ext = file.name.split(".").pop().toLowerCase();
      const type = ext === "pdf" ? "pdf" : ext === "docx" ? "word" : "file";

      const newFile = {
        id: Date.now(),
        type,
        name: file.name,
        file, // NOVO
      };

      setResources((prev) =>
        prev.map((item) =>
          item.id === folderId
            ? { ...item, contents: [...item.contents, newFile] }
            : item
        )
      );
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleOpenFile = (file) => {
    if (file?.file) {
      const url = URL.createObjectURL(file.file);
      window.open(url, "_blank");
    }
  };

  const renderFiles = (list) => (
    <div className="grid grid-cols-4 gap-8">
      {list.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center w-40"
          draggable
          onDragStart={() => setDraggedItem(item)} // NOVO
        >
          <div
            className="p-1 flex flex-col items-center gap-2 cursor-pointer hover:scale-105 transition"
            onClick={() => {
              if (item.type === "folder") toggleFolder(item.id);
              else handleOpenFile(item); // NOVO
            }}
            onDrop={(e) => handleDrop(e, item.id)}
            onDragOver={handleDragOver}
          >
            {renderIcon(item.type, item.open)}
            <span className="text-center font-medium break-words w-full text-sm">
              {item.name}
            </span>
          </div>
          {item.type === "folder" && item.open && (
            <div className="ml-4 mt-3 space-y-2">
              {item.contents.length === 0 ? (
                <p className="text-sm text-gray-500">Empty folder</p>
              ) : (
                item.contents.map((subItem) => (
                  <div
                    key={subItem.id}
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => handleOpenFile(subItem)} // NOVO
                  >
                    {renderIcon(subItem.type)}
                    <span className="text-sm break-words">{subItem.name}</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden text-gray-800">
      {/* Botão adicionar */}
      <div className="flex justify-end mb-3">
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-14 h-14 bg-slate-700 text-white rounded-full flex items-center justify-center hover:scale-105 transition"
          >
            <Plus />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
              <button
                className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                onClick={() => {
                  setShowDropdown(false);
                  setShowCreateFolder(true);
                }}
              >
                Create folder
              </button>
              <button
                className="block w-full px-4 py-2 hover:bg-gray-100 text-left"
                onClick={() => {
                  setShowDropdown(false);
                  fileInputRef.current.click();
                }}
              >
                Add file
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Lista */}
      {renderFiles(resources)}

      {/* Modal criar pasta */}
      {showCreateFolder && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">New folder name</h3>
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder="Folder name"
              className="border px-3 py-2 w-full rounded"
            />
            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => setShowCreateFolder(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-red-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFolder}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-green-300"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Input invisível */}
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={handleAddFile}
      />
    </div>
  );
}

export default DisciplineResources;
