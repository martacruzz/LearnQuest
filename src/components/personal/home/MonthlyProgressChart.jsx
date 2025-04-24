import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";

const MonthlyProgressChart = () => {
  const data = [
    { month: 'Jan', xp: 100 },
    { month: 'Feb', xp: 200 },
    { month: 'Mar', xp: 320 },
    { month: 'Apr', xp: 460 },
    { month: 'May', xp: 580 },
    { month: 'Jun', xp: 710 },
  ];

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-xl text-white w-full">
      <h3 className="text-xl font-bold mb-4">Monthly Stats</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
          <XAxis dataKey="month" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip />
          <Line type="monotone" dataKey="xp" stroke="#22d3ee" strokeWidth={3} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyProgressChart;
