import React from "react";
import { Home, Trophy, Users, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom"; // <-- useLocation added

const pages = [
  { key: "hq", label: "Clan HQ", icon: Home, path: "/personal/teacher/clans" },
  { key: "lb", label: "Leader Board", icon: Trophy, path: "/personal/teacher/clans/leaderboard" },
  { key: "members", label: "Members", icon: Users, path: "/personal/teacher/clans/members" },
  { key: "chat", label: "Chat", icon: MessageCircle, path: "/personal/teacher/clans/chat" },
];

function ClanNavBar() {
  const location = useLocation();

  return (
    <div className="flex gap-6 border-b border-slate-700 px-4 pb-2 text-sm font-medium items-center">
      {pages.map(({ key, label, icon: Icon, path }) => {
        const isActive = location.pathname === path;

        return (
          <Link
            key={key}
            to={path}
            className={`capitalize transition-colors flex items-center gap-1 ${isActive
              ? "border-b-2 border-white text-slate-800"
              : "text-slate-400 hover:text-slate-800"
              }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </Link>
        );
      })}
    </div>
  );
}

export default ClanNavBar;
