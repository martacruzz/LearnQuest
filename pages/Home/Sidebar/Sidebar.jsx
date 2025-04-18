import React from "react";
import SidebarItem from "./SidebarItem";
import "./Sidebar.css";
import {
  Home,
  BookOpen,
  Calendar,
  Settings,
  ClipboardList,
  User,
  Shield,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="w-18 h-screen bg-slate-500 text-white flex flex-col justify-between py-8 px-2">
      {/* Parte de cima: duas secções */}
      <div className="flex flex-col items-center gap-10">
        {/* Secção 1 */}
        <div className="flex flex-col items-center gap-8 border-b border-slate-800 pb-6 w-full">
          <SidebarItem
            icon={<BookOpen className="w-8 h-8" />}
            label="Academic"
          />
          <SidebarItem icon={<User className="w-8 h-8" />} label="Personal" />
        </div>

        {/* Secção 2 */}
        <div className="flex flex-col items-center gap-12 border-b border-slate-800 pb-10 w-full">
          <SidebarItem icon={<Home className="w-8 h-8" />} label="Home" />
          <SidebarItem
            icon={<ClipboardList className="w-8 h-8" />}
            label="To-do"
          />
          <SidebarItem
            icon={<Calendar className="w-8 h-8" />}
            label="Calendar"
          />
          <SidebarItem icon={<Shield className="w-8 h-8" />} label="Clans" />
        </div>
      </div>

      {/* Parte de baixo */}
      <div className="flex flex-col items-center pt-6 w-full">
        <SidebarItem icon={<Settings className="w-8 h-8" />} label="Settings" />
      </div>
    </div>
  );
}

export default Sidebar;
