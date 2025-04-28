import React from "react";
import SidebarItem from "../components/SidebarItem";
import PersonalSwitcher from "../components/PersonalSwitcher";
import "../assets/Sidebar.css";
import { Home, Calendar, Settings, ClipboardList, Shield } from "lucide-react";

function Sidebar() {
  return (
    <div className="w-16 fixed h-screen bg-slate-500 text-white flex flex-col justify-between py-8 px-2">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-8 border-b border-slate-800 pb-6 w-full">
          <PersonalSwitcher />
        </div>

        <div className="flex flex-col items-center gap-15 border-b border-slate-800 pb-12 w-full">
          <SidebarItem
            icon={<Home className="w-8 h-8" />}
            label="Home"
            to="/personal"
          />

          <SidebarItem
            icon={<ClipboardList className="w-8 h-8" />}
            label="To-do"
            to="/personal/tasks"
          />
          <SidebarItem
            icon={<Calendar className="w-8 h-8" />}
            label="Calendar"
            to="/personal/calendar"
          />
          <SidebarItem
            icon={<Shield className="w-8 h-8" />}
            label="Clans"
            to="/personal/clans"
          />
        </div>
      </div>

      <div className="flex flex-col items-center pt-6 w-full">
        <SidebarItem
          icon={<Settings className="w-8 h-8" />}
          label="Settings"
          to="/settings"
        />
      </div>
    </div>
  );
}

export default Sidebar;
