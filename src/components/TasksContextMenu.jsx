import { Trash2, Pencil } from "lucide-react";
import React, { forwardRef } from "react";

const ContextMenu = forwardRef(({ x, y, onDelete, onEdit }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute z-50 bg-slate-800 text-white rounded-lg shadow-lg p-2 w-40"
      style={{ top: y, left: x }}
    >
      <button
        onClick={onEdit}
        className="flex items-center gap-2 w-full text-left px-2 py-1 rounded hover:bg-slate-600 group"
      >
        <Pencil
          size={16}
        />
        <span>Edit</span>
      </button>
      <button
        onClick={onDelete}
        className="flex items-center gap-2 w-full text-left px-2 py-1 rounded hover:bg-slate-600 group"
      >
        <Trash2
          size={16}
          className="group-hover:text-red-500 transition-colors duration-150"
        />
        <span className="group-hover:text-red-500 transition-colors duration-150">Delete</span>
      </button>
    </div>
  );
});

export default ContextMenu;
