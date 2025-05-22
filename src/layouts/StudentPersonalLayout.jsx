import { Outlet } from "react-router-dom";
import PersonalSideBar from "../sidebars/StudentPersonalSidebar";

function StudentPersonalLayout() {
  return (
    <div className="flex relative z-10">
      <PersonalSideBar />
      <main className="flex-1 p-6 overflow-visible">
        <Outlet />
      </main>
    </div>
  );
}

export default StudentPersonalLayout;
