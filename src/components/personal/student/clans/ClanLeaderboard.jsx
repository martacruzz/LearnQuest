import React from "react";
import ClanNavBar from "./ClanNavbar";

function ClanLeaderboard({ clans }) {
  return (
    <div className="ml-16 p-6 flex flex-col">
      <ClanNavBar />

      {/* Leaderboard Table */}
      <div className="bg-gray-200 rounded-2xl p-6 mt-4 mb-4 shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead>
              <tr>
                <th className="text-gray-800 px-6 py-3">Rank</th>
                <th className="text-gray-800 px-6 py-3">Clan Name</th>
                <th className="text-gray-800 px-6 py-3">Level</th>
                <th className="text-gray-800 px-6 py-3">XP</th>
                <th className="text-gray-800 px-6 py-3">Members</th>
                <th className="text-gray-800 px-6 py-3">Tasks Completed</th>
              </tr>
            </thead>
            <tbody>
              {clans.map((clan, index) => (
                <tr
                  key={clan.id}
                  className="hover:bg-gray-300 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-800">{index + 1}</td>
                  <td className="px-6 py-4 text-gray-800 font-semibold flex items-center gap-3">
                    <img
                      src={clan.avatarUrl}
                      alt={clan.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    {clan.name}
                  </td>
                  <td className="px-6 py-4 text-gray-800">{clan.level}</td>
                  <td className="px-6 py-4 text-gray-800">
                    {clan.currentXp} / {clan.nextLevelXp}
                  </td>
                  <td className="px-6 py-4 text-gray-800">{clan.memberCount}</td>
                  <td className="px-6 py-4 text-gray-800">{clan.completedTasksThisWeek}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ClanLeaderboard;
