import React from "react";
import ClanNavBar from "./ClanNavbar";

function ClanMembers({ members }) {
  return (
    <div className="ml-16 p-6 flex flex-col">
      <ClanNavBar />

      <div className="bg-slate-800 rounded-2xl p-6 mt-4 shadow-lg">
        <h2 className="text-xl font-semibold text-white mb-4">Clan Members</h2>

        <div className="grid gap-4 max-h-[600px] overflow-y-auto">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between bg-slate-700 hover:bg-slate-600 transition-colors p-4 rounded-xl shadow-sm"
            >
              {/* Left: Avatar + Name */}
              <div className="flex items-center gap-4">
                <img
                  src={member.avatarUrl}
                  alt={member.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-medium">{member.name}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${member.role === "Leader"
                        ? "bg-yellow-500 text-black"
                        : member.role === "Elder"
                          ? "bg-purple-500 text-white"
                          : "bg-slate-500 text-white"
                      }`}
                  >
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Middle: XP Progress + Tasks */}
              <div className="flex-1 mx-6">
                <div className="text-sm text-slate-300 mb-1">
                  {member.xp} XP / {member.nextLevelXp} XP
                </div>
                <div className="w-full h-2 bg-slate-600 rounded">
                  <div
                    className="h-2 bg-green-500 rounded"
                    style={{ width: `${(member.xp / member.nextLevelXp) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Right: Join date + Tasks */}
              <div className="text-right text-slate-300 text-sm">
                <p>Joined: {new Date(member.joinDate).toLocaleDateString()}</p>
                <p>Tasks: {member.completedTasks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClanMembers;
