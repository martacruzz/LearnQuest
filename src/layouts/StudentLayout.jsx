import { Outlet } from "react-router-dom";
import AcademicSidebar from "../sidebars/StudentAcademicBar";

function StudentLayout() {
  return (
    <div className="flex relative z-10">
      <AcademicSidebar />
      <main className="flex-1 p-6 overflow-visible">
        <Outlet />
      </main>
    </div>
  );
}

export default StudentLayout;

