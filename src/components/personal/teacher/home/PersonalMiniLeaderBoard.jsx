import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const PersonalMiniLeaderboard = () => {
  const loggedInUser = "Joana Magalhães";

  // Dummy leaderboard data with weekly progress
  const users = [
    { name: "Bruno Carvalho", level: 5, xp: 540, trend: "down" },
    { name: "Matilde Fonseca", level: 5, xp: 530, trend: "up" },
    { name: "Joana Magalhães", level: 5, xp: 490, trend: "up" },
    { name: "Filipe Gomes", level: 5, xp: 470, trend: "up" },
    { name: "Tiago Moreira", level: 4, xp: 440, trend: "down" },
    { name: "Beatriz Correia", level: 4, xp: 430, trend: "down" },
    { name: "João Ribeiro", level: 4, xp: 420, trend: "up" },
    { name: "Marta Lopes", level: 4, xp: 410, trend: "up" },
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
    <div className="bg-white p-10 rounded-xl text-gray-800 w-full mt-6 h-130 overflow-y-auto">
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
