import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DisciplineChat from "../../../components/teacherAcademic/DisciplineChat";
import DisciplineTasks from "../../../components/teacherAcademic/DisciplineTasks";
import DisciplineResources from "../../../components/teacherAcademic/DisciplineResources";

// Content per subject (fixed or initial)
const disciplinaData = {
  "historia-a": {
    disciplina: "História A",
    ano: "12th",
    turma: "B",
    chat: [
      {
        autor: "Beatriz",
        texto:
          "Hello teacher, I have a question about the topic of World War II!",
      },
      {
        autor: "João",
        texto:
          "Me too, teacher. Could you explain the reason why trenches were created and used?",
      },
    ],
    tasks: [
      {
        id: 1,
        date: "2024-04-10",
        name: "Exercises",
        description: "Complete worksheet 3",
        submission: "Submit on Teams",
        hour: "23:59",
        xp: 20,
        visible: true,
      },
      {
        id: 2,
        date: "2024-05-27",
        name: "Trench Document",
        description: "Final presentation",
        submission: "Via email",
        hour: "23:59",
        xp: 50,
        visible: false,
      },
    ],
    resources: [
      {
        id: 1,
        type: "folder",
        name: "Worksheets",
        open: false,
        contents: [
          { id: 4, type: "pdf", name: "Example.pdf" },
          { id: 5, type: "word", name: "Notes.docx" },
        ],
      },
      { id: 2, type: "pdf", name: "Class1.pdf" },
      { id: 3, type: "word", name: "Summary.docx" },
    ],
  },
  "matematica-a": {
    disciplina: "Matemática A",
    ano: "11th",
    turma: "A",
    chat: [
      {
        autor: "André",
        texto:
          "Teacher, in question 3 of the derivatives worksheet, how do you solve item c)?",
      },
      { autor: "Catarina", texto: "Will we have a review class before the test?" },
    ],
    tasks: [
      {
        id: 1,
        date: "2024-05-15",
        name: "Derivatives Worksheet",
        description: "Complete solution of Worksheet 5",
        submission: "",
        hour: "22:00",
        xp: 25,
        visible: true,
      },
      {
        id: 2,
        date: "2024-05-20",
        name: "Functions - Extra",
        description: "Explore quadratic functions using Geogebra",
        submission: "",
        hour: "18:00",
        xp: 15,
        visible: true,
      },
    ],
    resources: [
      {
        id: 1,
        type: "folder",
        name: "Solved Tests",
        open: false,
        contents: [],
      },
      {
        id: 2,
        type: "folder",
        name: "Formulas",
        open: false,
        contents: [],
      },
    ],
  },
};

const TeacherDisciplinePage = () => {
  const { disciplinaId } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState("chat");

  const normalizado = disciplinaId.toLowerCase().replace(/\s+/g, "-");
  const conteudo = disciplinaData[normalizado];

  const nome = conteudo
    ? `${conteudo.ano}${conteudo.turma} ${conteudo.disciplina}`
    : decodeURIComponent(disciplinaId)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="p-0 ml-15 text-gray-800 mh-screen overflow-auto">
      <div className="flex items-center gap-4 mb-1">
        <button
          onClick={() => navigate("/academic/teacher/classes")}
          className="text-slate-800 text-2xl hover:underline"
        >
          ←
        </button>
        <h1 className="text-3xl font-bold text-slate-800">{nome}</h1>
      </div>
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

      {/* Tab content */}
      {tab === "chat" && <DisciplineChat initialChat={conteudo?.chat || []} />}
      {tab === "tasks" && (
        <DisciplineTasks initialTasks={conteudo?.tasks || []} />
      )}
      {tab === "resources" && (
        <DisciplineResources initialResources={conteudo?.resources || []} />
      )}
    </div>
  );
};

export default TeacherDisciplinePage;