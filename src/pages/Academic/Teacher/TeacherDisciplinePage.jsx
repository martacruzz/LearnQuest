import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DisciplineChat from "../../../components/teacherAcademic/DisciplineChat";
import DisciplineTasks from "../../../components/teacherAcademic/DisciplineTasks";
import DisciplineResources from "../../../components/teacherAcademic/DisciplineResources";

const TeacherDisciplinePage = () => {
  const { disciplinaId } = useParams();
  const [tab, setTab] = useState("chat");

  return (
    <div className="p-0 ml-15 text-gray-800 mh-screen overflow-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-1">
        {decodeURIComponent(disciplinaId)}
      </h1>
      <div className="h-px bg-slate-400 w-full mb-4"></div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setTab("chat")}
          className={`px-4 py-2 rounded-full ${
            tab === "chat"
              ? "bg-slate-800 text-white"
              : "bg-white border text-gray-800"
          }`}
        >
          Chat
        </button>
        <button
          onClick={() => setTab("tasks")}
          className={`px-4 py-2 rounded-full ${
            tab === "tasks"
              ? "bg-slate-800 text-white"
              : "bg-white border text-gray-800"
          }`}
        >
          Tasks
        </button>
        <button
          onClick={() => setTab("resources")}
          className={`px-4 py-2 rounded-full ${
            tab === "resources"
              ? "bg-slate-800 text-white"
              : "bg-white border text-gray-800"
          }`}
        >
          Resources
        </button>
      </div>

      {/* Conteúdo da aba */}
      {tab === "chat" && <DisciplineChat />}
      {tab === "tasks" && <DisciplineTasks />}
      {tab === "resources" && <DisciplineResources />}
    </div>
  );
};

export default TeacherDisciplinePage;
