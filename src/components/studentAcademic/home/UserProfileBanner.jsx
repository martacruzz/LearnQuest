import React from "react";

const UserProfileBanner = () => {
  const user = {
    name: "Leonor Ferreira",
    level: 7,
    current_xp: 580,
    xp_to_next_level: 800,
    avatar: "/src/assets/images/leonor.jpg",
  };

  const xpPercent = (user.current_xp / user.xp_to_next_level) * 100;

  return (
    <div className="bg-white p-10 lg:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-10 text-gray-900 w-full max-w-screen-lg">

      {/* Avatar and XP Circle Side by Side */}
      <div className="flex flex-col md:flex-row items-center md:items-center gap-10">
        {/* Avatar and Name */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="text-3xl lg:text-4xl font-bold">{user.name}</h2>
          <div className="relative w-48 h-48 lg:w-56 lg:h-56">
            <img
              src={user.avatar}
              alt={user.name}
              className="relative w-full h-full rounded-full border-4 border-gray-300 object-cover z-10"
            />
          </div>
        </div>

        {/* XP Circle */}
        <div className="flex flex-col items-center">
          <div className="text-lg lg:text-xl font-semibold text-gray-800 mb-2">
            <p>Level: {user.level}</p>
          </div>
          <div className="relative w-44 h-44 lg:w-52 lg:h-52">
            <svg className="transform -rotate-90" width="100%" height="100%" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#e5e7eb"
                strokeWidth="8.5"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#10b981"
                strokeWidth="8.5"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * xpPercent) / 100}
                strokeLinecap="round"
                className="transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-800">
              <p className="text-lg lg:text-xl font-medium">
                {user.current_xp}/{user.xp_to_next_level} XP
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default UserProfileBanner;