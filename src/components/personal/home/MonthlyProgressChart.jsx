import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
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
    <div className="bg-white p-10 rounded-xl text-gray-800 w-full">
      <h3 className="text-3xl lg:text-4xl font-bold font-bold mb-4">Monthly Stats</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" /> {/* Tailwind gray-200 */}
          <XAxis dataKey="month" stroke="#6b7280" /> {/* Tailwind gray-500 */}
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              borderColor: "#e5e7eb",
              color: "#1f2937", // gray-800
              fontSize: "0.875rem"
            }}
            itemStyle={{ color: "#0e7490" }} // cyan-700
          />
          <Line
            type="monotone"
            dataKey="xp"
            stroke="#0ea5e9" // cyan-500
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyProgressChart;
