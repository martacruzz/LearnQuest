import React, { useEffect, useState } from "react";
import ClanNavBar from "./ClanNavbar";
import WeeklyProgressCircle from "./WeeklyProgressCircle";

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

  // ➡️ Add these new animated states
  const [animatedXpPercentage, setAnimatedXpPercentage] = useState(0);
  const [displayedXp, setDisplayedXp] = useState(0);

  // Animate XP bar width
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedXpPercentage(xpPercentage);
    }, 100);

    return () => clearTimeout(timeout);
  }, [xpPercentage]);

  // Animate XP number (counting from 0 to currentXp)
  useEffect(() => {
    let frame;
    const duration = 1000;
    const start = performance.now();

    function animate(now) {
      const elapsed = now - start;
      const progressRatio = Math.min(elapsed / duration, 1);
      const value = Math.round(progressRatio * currentXp);
      setDisplayedXp(value);

      if (progressRatio < 1) {
        frame = requestAnimationFrame(animate);
      }
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [currentXp]);

  return (
    <div className="ml-16 p-6 flex flex-col">

      <ClanNavBar />

      <h1 className="text-gray-800 mt-4 mb-4 text-2xl font-semibold">{name}</h1>

      <div className="flex gap-6">
        <div className="bg-gray-100 p-6 shield-effect clip-shield overflow-hidden">

          <div className="relative w-[350px] h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-visible">

            {/* Shield Container */}
            <div className="relative w-full h-full bg-gray-100 shield-effect clip-shield overflow-hidden">
              <img
                src={avatarUrl}
                alt="Clan Avatar"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Diagonal Level Banner */}
              <div className="absolute bottom-0 w-[150%] h-1/2 overflow-hidden flex items-end justify-center pb-4 z-10 transform rotate-[-45deg] level-banner">
                <div className="w-full h-full bg-gray-700"></div>
                <div className="absolute bottom-2/3 left-2/5 text-gray-100 text-4xl font-bold drop-shadow-md">
                  Lv {level}
                </div>
              </div>

            </div>
          </div>

        </div>


        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-6">

          <h1 className="text-gray-800 mb-2 text-2xl border-b font-semibold">Clan Stats</h1>

          {/* 🛠 Animated XP Progress with Glow Effect on Full XP */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
            <h1 className="text-gray-600 mb-2 font-semibold">Clan XP</h1>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden mb-2">
              <div
                className={`bg-green-500 h-4 transition-all duration-1000 ease-out ${xpPercentage === 100 ? "shadow-md shadow-green-400" : ""
                  }`}
                style={{ width: `${animatedXpPercentage}%` }}
              ></div>
            </div>
            <div className="text-gray-600 text-sm">
              {displayedXp} / {nextLevelXp} XP
            </div>
            <div className="text-gray-600 text-sm">
              Level: {level}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Members */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-gray-800">{memberCount}</div>
              <div className="text-gray-600 text-sm mt-2">Members</div>
            </div>

            {/* Average Tasks */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-gray-800">{avgTasksPerWeek}</div>
              <div className="text-gray-600 text-sm mt-2">Avg Tasks/Week</div>
            </div>

            {/* Weekly Progress */}
            <div className="bg-gray-100 p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center">
              <WeeklyProgressCircle weeklyProgress={weeklyProgress} />
              <div className="text-gray-600 text-sm mt-2">Weekly Progress</div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default ClanDashboard;
