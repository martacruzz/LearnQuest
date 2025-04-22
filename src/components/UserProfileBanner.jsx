import React from "react";

const UserProfileBanner = () => {
  const user = {
    name: "Leonor Ferreira",
    level: 7,
    current_xp: 580,
    xp_to_next_level: 800,
    avatar: "src/assets/images/leonor.jpg",
  };

  const xpPercent = (user.current_xp / user.xp_to_next_level) * 100;

  return (
    <div className="bg-slate-800 p-6 rounded-xl flex flex-col sm:flex-row items-end sm:justify-left gap-6 shadow-xl text-white w-full max-w-100">

      {/* Avatar and Basic Info */}
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <div className="relative w-40 h-40">
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full animate-pulse bg-cyan-500 blur-md opacity-30" />

          {/* Avatar */}
          <img
            src={user.avatar}
            alt={user.name}
            className="relative w-full h-full rounded-full border-4 border-slate-700 object-cover z-10"
          />
        </div>
      </div>

      {/* Level + XP */}
      <div className="flex flex-col">
        <div className="flex items-center justify-center text-white font-bold">
          <p>Level: {user.level}</p>
        </div>
        <div className="relative w-35 h-35">
          <svg className="transform -rotate-90" width="100%" height="100%" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="gray"
              strokeWidth="8.5"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="seagreen"
              strokeWidth="8.5"
              fill="none"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * xpPercent) / 100}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <p className="text-xs">
              {user.current_xp}/{user.xp_to_next_level} XP
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserProfileBanner;