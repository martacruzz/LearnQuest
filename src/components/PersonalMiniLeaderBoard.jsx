import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const PersonalMiniLeaderboard = () => {
  const loggedInUser = "Leonor Ferreira";

  // Dummy leaderboard data with weekly progress
  const users = [
    { name: "Leonor Ferreira", level: 7, xp: 580, trend: "up" },
    { name: "Rui Silva", level: 6, xp: 520, trend: "down" },
    { name: "Mariana Costa", level: 5, xp: 480, trend: "up" },
    { name: "Tiago Lopes", level: 5, xp: 460, trend: "up" },
    { name: "Inês Martins", level: 4, xp: 430, trend: "down" },
    { name: "João Pinto", level: 4, xp: 410, trend: "up" },
    { name: "Beatriz Rocha", level: 3, xp: 390, trend: "up" },
    { name: "Carlos Nunes", level: 3, xp: 360, trend: "down" },
    { name: "Ana Reis", level: 2, xp: 330, trend: "up" },
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
    <div className="bg-slate-800 p-6 rounded-xl shadow-xl text-white w-full mt-6 max-h-80 overflow-y-auto">
      <h3 className="text-xl font-bold mb-4">🏆 Leaderboard</h3>
      <ul className="divide-y divide-slate-600">
        {users.map((user, index) => {
          const isCurrentUser = user.name === loggedInUser;
          const TrendIcon =
            user.trend === "up" ? ArrowUpRight : ArrowDownRight;
          const trendColor = user.trend === "up" ? "text-green-400" : "text-red-400";

          return (
            <li
              key={index}
              className={`flex justify-between items-center py-2 px-3 rounded-lg ${isCurrentUser
                ? "bg-cyan-700/30 border border-cyan-500"
                : "hover:bg-slate-700/50"
                } transition`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{getMedal(index)}</span>
                <span className={`font-medium ${isCurrentUser ? "text-cyan-300" : ""}`}>
                  {user.name}
                  {isCurrentUser && " ⭐"}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm">Lvl {user.level}</span>
                <span className="flex items-center gap-1">
                  {user.xp} XP{" "}
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
