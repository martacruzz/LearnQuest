import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const PersonalMiniLeaderboard = () => {
  const loggedInUser = "Leonor Ferreira";

  // Dummy leaderboard data with weekly progress
  const users = [
    { name: "Leonor Ferreira", level: 7, xp: 580, trend: "up" },
    { name: "Rui Silva", level: 7, xp: 520, trend: "down" },
    { name: "Mariana Costa", level: 6, xp: 480, trend: "up" },
    { name: "Tiago Lopes", level: 6, xp: 460, trend: "up" },
    { name: "Inês Martins", level: 5, xp: 430, trend: "down" },
    { name: "João Pinto", level: 5, xp: 410, trend: "up" },
    { name: "Beatriz Rocha", level: 4, xp: 390, trend: "up" },
    { name: "Carlos Nunes", level: 4, xp: 360, trend: "down" },
    { name: "Ana Reis", level: 4, xp: 330, trend: "up" },
    { name: "Pedro Lopes", level: 4, xp: 325, trend: "down" },
    { name: "Liliana Antunes", level: 3, xp: 312, trend: "up" },
    { name: "Guilherme Ribeiro", level: 3, xp: 307, trend: "down" },
    { name: "Henrique Marques", level: 3, xp: 296, trend: "up" },
    { name: "Bruno Oliveira", level: 3, xp: 283, trend: "down" },
    { name: "Camila Sousa", level: 3, xp: 271, trend: "up" },
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
    <div className="bg-white p-10 rounded-xl text-gray-800 w-full mt-6 max-h-130 overflow-y-auto">
      <h3 className="text-3xl lg:text-4xl font-bold font-bold mb-4">🏆 Leaderboard 🏆</h3>
      <ul className="divide-y divide-gray-200">
        {users.map((user, index) => {
          const isCurrentUser = user.name === loggedInUser;
          const TrendIcon =
            user.trend === "up" ? ArrowUpRight : ArrowDownRight;
          const trendColor = user.trend === "up" ? "text-green-500" : "text-red-500";

          return (
            <li
              key={index}
              className={`flex justify-between items-center py-2 px-3 rounded-lg transition ${isCurrentUser
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
