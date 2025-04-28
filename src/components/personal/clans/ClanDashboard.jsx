import React from "react";
import ClanNavBar from "./ClanNavbar";

function ClanDashboard({ clan }) {
  const {
    name,
    level,
    avatarUrl,
    currentXp,
    nextLevelXp,
    memberCount,
    avgTasksPerWeek,
    completedTasksThisWeek,
  } = clan;

  const xpPercentage = Math.min((currentXp / nextLevelXp) * 100, 100);
  const weeklyProgress = Math.min(
    (completedTasksThisWeek / avgTasksPerWeek) * 100,
    100
  );

  return (

    <div className="ml-16 p-6 flex flex-col">

      <ClanNavBar></ClanNavBar>

      <h1 className="text-slate-800 mt-4 mb-4 text-2xl font-semibold">{name}</h1>

      <div className="flex gap-6">
        <div className="bg-slate-800 p-6 shield-effect clip-shield overflow-hidden">

          <div className="relative w-[350px] h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-visible">

            {/* Shield Container */}
            <div className="relative w-full h-full bg-slate-800 shield-effect clip-shield border-8 border-slate-800 overflow-hidden">
              <img
                src={avatarUrl}
                alt="Clan Avatar"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Diagonal Level Banner */}
              <div className="absolute bottom-0 w-[150%] h-1/2 overflow-hidden flex items-end justify-center pb-4 z-10 transform rotate-[-45deg] bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent">
                {/* Diagonal Background */}
                <div className="w-full h-full bg-slate-900"></div>

                {/* Rotated and Larger Level Text */}
                <div className="absolute bottom-2/3 left-2/5 text-slate-200 text-4xl font-bold drop-shadow-md">
                  Lv {level}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6">

          <h1 className="text-slate-800 mb-2 text-2xl border-b font-semibold">Clan Stats</h1>

          {/* XP Progress */}
          <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
            <h1 className="text-slate-400 mb-2 font-semibold">Clan XP</h1>
            <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden mb-2">
              <div
                className="bg-green-500 h-4"
                style={{ width: `${xpPercentage}%` }}
              ></div>
            </div>
            <div className="text-slate-400 text-sm">
              {currentXp} / {nextLevelXp} XP
            </div>
            <div className="text-slate-400 text-sm">
              Level: {level}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Members */}
            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-slate-200">{memberCount}</div>
              <div className="text-slate-400 text-sm mt-2">Members</div>
            </div>

            {/* Average Tasks */}
            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-slate-200">{avgTasksPerWeek}</div>
              <div className="text-slate-400 text-sm mt-2">Avg Tasks/Week</div>
            </div>

            {/* Weekly Progress */}
            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center">
              <div className="relative w-24 h-24">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="white"
                    strokeWidth="8"
                    fill="transparent"
                    className="opacity-20"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#22c55e"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - weeklyProgress / 100)}
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-slate-300">
                  {Math.round(weeklyProgress)}%
                </div>
              </div>
              <div className="text-slate-400 text-sm mt-2">Weekly Progress</div>
            </div>

          </div>
        </div>
      </div>

    </div>

  );
}

export default ClanDashboard;
