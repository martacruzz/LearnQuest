import { Plus, GraduationCap } from "lucide-react";
import { useState } from "react";

function TeacherClasses() {
  const [turmas, setTurmas] = useState(["11ºA", "12ºB", "10ºC"]);

  return (
    <div className="text-white p-6">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-6">Minhas Turmas</h1>

      {/* Botão para adicionar nova turma */}
      <div className="flex justify-end mb-10">
        <button className="w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center shadow-md transition">
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* Lista de turmas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {turmas.map((turma) => (
          <div
            key={turma}
            className="bg-slate-700 rounded-lg p-5 flex flex-col items-center justify-center hover:scale-105 transition"
          >
            <GraduationCap className="w-10 h-10 mb-2" />
            <p className="text-lg font-semibold">{turma}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherClasses;
