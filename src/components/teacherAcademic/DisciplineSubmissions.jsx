import React from "react";

const mockSubmissions = [
  { id: 1, student: "Lucas Pereira", task: "Worksheet", date: "2024-05-15", status: "Delivered", xp: 1750 },
  { id: 2, student: "Leonor Ferreira", task: "Worksheet", date: "2024-05-15", status: "Delivered", xp: 1514 },
  { id: 3, student: "Sofia Almeida", task: "Worksheet", date: "2024-05-15", status: "Pending",   xp: 1423 },
  { id: 4, student: "Pedro Martins", task: "Worksheet", date: "2024-05-15", status: "Delivered", xp: 1369 },
  { id: 5, student: "Raquel Costa", task: "Worksheet", date: "2024-05-15", status: "Pending",   xp: 1245 },
  { id: 6, student: "Bruno Oliveira", task: "Worksheet", date: "2024-05-15", status: "Delivered", xp: 1183 },
  { id: 7, student: "Camila Sousa", task: "Worksheet", date: "2024-05-15", status: "Delivered", xp: 1151 },
  { id: 8, student: "Daniela Gomes", task: "Worksheet", date: "2024-05-15", status: "Pending",   xp: 1136 },
  { id: 9, student: "Fábio Rocha", task: "Worksheet", date: "2024-05-15", status: "Delivered", xp: 1119 },
  { id:10, student: "Rui Silva", task: "Worksheet", date: "2024-05-15", status: "Pending",   xp: 1100 },
  { id:11, student: "Mariana Costa", task: "Worksheet", date: "2024-05-15", status: "Delivered", xp:  950 },
  { id:12, student: "Tiago Lopes", task: "Worksheet", date: "2024-05-15", status: "Delivered", xp:  900 },
  { id:13, student: "Inês Martins", task: "Worksheet", date: "2024-05-15", status: "Pending",   xp:  870 },
  { id:14, student: "João Pinto", task: "Worksheet", date: "2024-05-15", status: "Delivered", xp:  830 },
  { id:15, student: "Beatriz Rocha", task: "Worksheet", date: "2024-05-15", status: "Delivered", xp:  780 },
  { id:16, student: "Carlos Nunes", task: "Worksheet", date: "2024-05-15", status: "Pending",   xp:  740 },
  { id:17, student: "Ana Reis", task: "Worksheet", date: "2024-05-15", status: "Delivered", xp:  680 },
  { id:18, student: "Liliana Antunes", task: "Worksheet", date: "2024-05-15", status: "Delivered", xp:  634 },
  { id:19, student: "Guilherme Ribeiro", task: "Worksheet", date: "2024-05-15", status: "Pending",   xp:  597 },
  { id:20, student: "Henrique Marques", task: "Worksheet", date: "2024-05-15", status: "Delivered", xp:  548 },
];

const DisciplineSubmissions = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Student Submissions</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-slate-100 text-left">
            <th className="p-2 border">Student</th>
            <th className="p-2 border">Task</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">XP</th>
          </tr>
        </thead>
        <tbody>
          {mockSubmissions.map(({ id, student, task, date, status, xp }) => (
            <tr key={id} className="hover:bg-slate-50">
              <td className="p-2 border">{student}</td>
              <td className="p-2 border">{task}</td>
              <td className="p-2 border">{date}</td>
              <td className="p-2 border">{status}</td>
              <td className="p-2 border">{xp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisciplineSubmissions;
