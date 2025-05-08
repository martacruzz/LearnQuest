import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import JoanaImage from "../../../assets/images/joana-magalhaes.jpg";
import PersonalMiniLeaderboard from "../../../components/personal/home/PersonalMiniLeaderBoard";

const turmaXPData = {
  "10ºA": [
    { month: "Jan", xp: 50 },
    { month: "Feb", xp: 200 },
    { month: "Mar", xp: 100 },
    { month: "Apr", xp: 300 },
    { month: "May", xp: 350 },
  ],
  "11ºC": [
    { month: "Jan", xp: 100 },
    { month: "Feb", xp: 150 },
    { month: "Mar", xp: 250 },
    { month: "Apr", xp: 450 },
    { month: "May", xp: 200 },
  ],
  "12ºB": [
    { month: "Jan", xp: 200 },
    { month: "Feb", xp: 150 },
    { month: "Mar", xp: 250 },
    { month: "Apr", xp: 450 },
    { month: "May", xp: 100 },
  ],
};

const leaderboard = [
  { name: "Leonor Ferreira", xp: 580, level: 7 },
  { name: "Rui Silva", xp: 520, level: 6 },
  { name: "Mariana Costa", xp: 480, level: 5 },
  { name: "Tiago Lopes", xp: 460, level: 5 },
];

const tarefasStats = {
  total: 30,
  concluidas: 13,
  porConcluir: 17,
};

const barColors = {
  "10ºA": "#60a5fa",
  "11ºC": "#10b981",
  "12ºB": "#facc15",
};

function TeacherHome() {
  const [selectedTurma, setSelectedTurma] = useState(
    Object.keys(turmaXPData)[0]
  );

  return (
    <div className="p-0 ml-8 grid grid-cols-2 grid-rows-2 gap-2 text-slate-800">
      {/* PERFIL */}
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Joana Magalhães
        </h2>
        <img
          src={JoanaImage}
          alt="Joana Magalhães"
          className="w-50 h-50 rounded-full object-cover border-4 border-slate-300"
        />
        <p className="text-slate-500 mt-3">Teacher</p>
      </div>

      {/* GRÁFICO XP */}
      <div className="self-end">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold text-slate-700">
            Class Progress
          </h2>
          <select
            value={selectedTurma}
            onChange={(e) => setSelectedTurma(e.target.value)}
            className="..."
          >
            {Object.keys(turmaXPData).map((turma) => (
              <option key={turma}>{turma}</option>
            ))}
          </select>
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={turmaXPData[selectedTurma]}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="xp" fill={barColors[selectedTurma]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* TAREFAS STATS */}
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold p-3 ml-15 flex items-center gap-2">
          📋 Tarefas Criadas
        </h2>

        <div className="grid grid-rows-2 grid-cols-2 gap-10 place-items-center">
          {/* Topo da pirâmide */}
          <div className="row-start-1 col-span-2 text-center">
            <p className="text-4xl font-bold text-slate-800">
              {tarefasStats.total}
            </p>
            <p className="text-sm text-slate-500">Created</p>
          </div>

          {/* Base da pirâmide */}
          <div className="text-center">
            <p className="text-4xl font-bold text-green-600">
              {tarefasStats.concluidas}
            </p>
            <p className="text-sm text-slate-500">Done</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-yellow-500">
              {tarefasStats.porConcluir}
            </p>
            <p className="text-sm text-slate-500">Not Done</p>
          </div>
        </div>
      </div>

      {/* LEADERBOARD */}
      <div className="self-start">
        <PersonalMiniLeaderboard />
      </div>
    </div>
  );
}

export default TeacherHome;
