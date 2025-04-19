import React from "react";
import SidebarItemAcademic from "./SidebarItemAcademic";
import SwitcherAcademic from "./SwitcherAcademic";
import "./SidebarAcademic";
import {
  Home,
  Calendar,
  Settings,
  GraduationCap,
  MessageSquare,
} from "lucide-react";

function SidebarAcademic() {
  return (
    <div className="w-16 h-screen bg-slate-500 text-white flex flex-col justify-between py-8 px-2">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-8 border-b border-slate-800 pb-6 w-full">
          <SwitcherAcademic />
        </div>

        <div className="flex flex-col items-center gap-15 border-b border-slate-800 pb-12 w-full">
          <SidebarItemAcademic
            icon={<Home className="w-8 h-8" />}
            label="Home"
          />
          <SidebarItemAcademic
            icon={<GraduationCap className="w-8 h-8" />}
            label="Classes"
          />
          <SidebarItemAcademic
            icon={<Calendar className="w-8 h-8" />}
            label="Calendar"
          />
          <SidebarItemAcademic
            icon={<MessageSquare className="w-8 h-8" />}
            label="Messages"
          />
        </div>
      </div>

      <div className="flex flex-col items-center pt-6 w-full">
        <SidebarItemAcademic
          icon={<Settings className="w-8 h-8" />}
          label="Settings"
        />
      </div>
    </div>
  );
}

export default SidebarAcademic;
