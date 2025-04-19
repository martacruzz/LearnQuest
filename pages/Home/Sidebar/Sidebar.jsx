import React from "react";
import SidebarItem from "./SidebarItem";
import Switcher from "./Switcher";
import "./Sidebar.css";
import { Home, Calendar, Settings, ClipboardList, Shield } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-16 h-screen bg-slate-500 text-white flex flex-col justify-between py-8 px-2">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-8 border-b border-slate-800 pb-6 w-full">
          <Switcher />
        </div>

        <div className="flex flex-col items-center gap-15 border-b border-slate-800 pb-12 w-full">
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

      <div className="flex flex-col items-center pt-6 w-full">
        <SidebarItem icon={<Settings className="w-8 h-8" />} label="Settings" />
      </div>
    </div>
  );
}

export default Sidebar;
