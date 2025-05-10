import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const PersonalMiniLeaderboard = () => {
  const loggedInUser = "Leonor Ferreira";

  // Dummy leaderboard data with weekly progress
  const users = [
  { name: "Lucas Pereira", level: 9, xp: 1750, trend: "up" },
  { name: "Leonor Ferreira", level: 9, xp: 1514, trend: "up" },
  { name: "Sofia Almeida", level: 8, xp: 1423, trend: "down" },
  { name: "Pedro Martins", level: 8, xp: 1369, trend: "up" },
  { name: "Raquel Costa", level: 7, xp: 1245, trend: "down" },
  { name: "Bruno Oliveira", level: 7, xp: 1183, trend: "up" },
  { name: "Camila Sousa", level: 7, xp: 1151, trend: "up" },
  { name: "Daniela Gomes", level: 7, xp: 1136, trend: "down" },
  { name: "Fábio Rocha", level: 7, xp: 1119, trend: "up" },
  { name: "Rui Silva", level: 7, xp: 1100, trend: "down" },
  { name: "Mariana Costa", level: 6, xp: 950, trend: "up" },
  { name: "Tiago Lopes", level: 6, xp: 900, trend: "up" },
  { name: "Inês Martins", level: 5, xp: 870, trend: "down" },
  { name: "João Pinto", level: 5, xp: 830, trend: "up" },
  { name: "Beatriz Rocha", level: 4, xp: 780, trend: "up" },
  { name: "Carlos Nunes", level: 4, xp: 740, trend: "down" },
  { name: "Ana Reis", level: 3, xp: 680, trend: "up" },
  { name: "Liliana Antunes", level: 3, xp: 634, trend: "up" },
  { name: "Guilherme Ribeiro", level: 3, xp: 597, trend: "down" },
  { name: "Henrique Marques", level: 3, xp: 548, trend: "up" },
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
    <div className="bg-white p-10 rounded-xl text-gray-800 w-full mt-6 max-h-100 overflow-y-auto">
      <h3 className="text-3xl lg:text-4xl font-bold font-bold mb-4">🏆 Leaderboard - 12ºB 🏆</h3>
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
