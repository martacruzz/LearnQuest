import React from "react";
import SidebarItem from "../components/SidebarItem";
import AcademicSwitcher from "../components/AcademicSwitcher";
import "../assets/Sidebar.css";
import {
  Home,
  Calendar,
  Settings,
  GraduationCap,
  MessageSquare,
} from "lucide-react";

function AcademicSidebar() {
  return (
    <div className="w-16 h-screen bg-slate-500 text-white flex flex-col justify-between py-8 px-2">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-8 border-b border-slate-800 pb-6 w-full">
          <AcademicSwitcher />
        </div>

        <div className="flex flex-col items-center gap-15 border-b border-slate-800 pb-12 w-full">
          <SidebarItem
            icon={<Home className="w-8 h-8" />}
            label="Home"
            to="/academic/teacher"
          />
          <SidebarItem
            icon={<GraduationCap className="w-8 h-8" />}
            label="Classes"
            to="/academic/teacher/classes"
          />
          <SidebarItem
            icon={<Calendar className="w-8 h-8" />}
            label="Calendar"
            to="/academic/teacher/calendar"
          />
          <SidebarItem
            icon={<MessageSquare className="w-8 h-8" />}
            label="Messages"
            to="/academic/teacher/messages"
          />
        </div>
      </div>

      <div className="flex flex-col items-center pt-6 w-full">
        <SidebarItem
          icon={<Settings className="w-8 h-8" />}
          label="Settings"
          to="/academic/teacher/settings"
        />
      </div>
    </div>
  );
}

export default AcademicSidebar;
