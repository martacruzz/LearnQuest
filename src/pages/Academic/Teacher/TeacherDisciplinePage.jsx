import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DisciplineChat from "../../../components/teacherAcademic/DisciplineChat";
import DisciplineTasks from "../../../components/teacherAcademic/DisciplineTasks";
import DisciplineResources from "../../../components/teacherAcademic/DisciplineResources";

// Conteúdo por disciplina (fixo ou inicial)
const disciplinaData = {
  "historia-a": {
    disciplina: "História A",
    ano: "12º",
    turma: "B",
    chat: [
      {
        autor: "Beatriz",
        texto:
          "Olá professora, tenho uma dúvida em relação à matéria da Segunda Guerra Mundial!",
      },
      {
        autor: "João",
        texto:
          "Eu também professora. Podia explicar a razão de terem criado e usado as trincheiras?",
      },
    ],
    tasks: [
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
    ],
    resources: [
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
    ],
  },
  "matematica-a": {
    disciplina: "Matemática A",
    ano: "11º",
    turma: "A",
    chat: [
      {
        autor: "André",
        texto:
          "Stor, na questão 3 da ficha de derivadas, como se faz a alínea c)?",
      },
      { autor: "Catarina", texto: "Vamos ter aula de revisão antes do teste?" },
    ],
    tasks: [
      {
        id: 1,
        date: "2024-05-15",
        name: "Ficha de Derivadas",
        description: "Resolução completa da Ficha 5",
        submission: "",
        hour: "22:00",
        xp: 25,
        visible: true,
      },
      {
        id: 2,
        date: "2024-05-20",
        name: "Funções - Extra",
        description: "Explorar funções quadráticas com Geogebra",
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
        name: "Testes Resolvidos",
        open: false,
        contents: [],
      },
      {
        id: 2,
        type: "folder",
        name: "Formulários",
        open: false,
        contents: [],
      },
    ],
  },
};

const TeacherDisciplinePage = () => {
  const { disciplinaId } = useParams();
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
      <h1 className="text-3xl font-bold text-slate-800 mb-1">{nome}</h1>
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
