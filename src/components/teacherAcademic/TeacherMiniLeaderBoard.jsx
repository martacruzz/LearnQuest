import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const PersonalMiniLeaderboard = () => {
  const loggedInUser = "12B"; // Exemplo: turma atualmente "logada"

  // Leaderboard data with class groups and realistic level/xp values
  const users = [
    { name: "12B", level: 13, xp: 2587, trend: "up" },
    { name: "11A", level: 12, xp: 2456, trend: "down" },
    { name: "12A", level: 12, xp: 2349, trend: "up" },
    { name: "10C", level: 12, xp: 2318, trend: "up" },
    { name: "11B", level: 12, xp: 2182, trend: "down" },
    { name: "10A", level: 12, xp: 2096, trend: "up" },
    { name: "12C", level: 11, xp: 1974, trend: "up" },
    { name: "11C", level: 11, xp: 1906, trend: "down" },
    { name: "10B", level: 11, xp: 1825, trend: "up" },
  ];

  const getMedal = (index) => {
    return index === 0
      ? "🥇"
      : index === 1
        ? "🥈"
        : index === 2
          ? "🥉"
          : `${index + 1}.`;
  };

  return (
    <div className="bg-white p-10 rounded-xl text-gray-800 w-full mt-6 max-h-80 overflow-y-auto">
      <h3 className="text-3xl lg:text-4xl font-bold mb-4">🏆 Leaderboard 🏆</h3>
      <ul className="divide-y divide-gray-200">
        {users.map((user, index) => {
          const isCurrentUser = user.name === loggedInUser;
          const TrendIcon =
            user.trend === "up" ? ArrowUpRight : ArrowDownRight;
          const trendColor = user.trend === "up" ? "text-green-500" : "text-red-500";

          return (
            <li
              key={index}
              className={`flex justify-between items-center py-2 px-3 rounded-lg transition ${
                isCurrentUser
                  ? "bg-cyan-100 border border-cyan-300"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{getMedal(index)}</span>
                <span className={`font-medium ${isCurrentUser ? "text-cyan-700" : ""}`}>
                  {user.name}
                  {isCurrentUser && " ⭐"}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Lvl {user.level}</span>
                <span className="flex items-center gap-1 text-sm font-medium">
                  {user.xp} XP
                  <TrendIcon className={`w-4 h-4 ${trendColor}`} />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PersonalMiniLeaderboard;
