import React, { useState } from "react";
import { Home, Trophy, Users, MessageCircle } from "lucide-react"; // Updated icons

const pages = [
  { key: "hq", label: "Clan HQ", icon: Home },
  { key: "lb", label: "Leader Board", icon: Trophy },
  { key: "members", label: "Members", icon: Users },
  { key: "chat", label: "Chat", icon: MessageCircle },
];

function ClanNavBar() {
  const [selectedPage, setSelectedPage] = useState("hq"); // Default selected page

  return (
    <div className="flex gap-6 border-b border-slate-700 px-4 pb-2 text-sm font-medium items-center">
      {pages.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => setSelectedPage(key)}
          className={`capitalize transition-colors flex items-center gap-1 ${selectedPage === key
              ? "border-b-2 border-white text-slate-800"
              : "text-slate-400 hover:text-slate-800"
            }`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </button>
      ))}
    </div>
  );
}

export default ClanNavBar;
