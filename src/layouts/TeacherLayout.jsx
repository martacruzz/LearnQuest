import { Outlet } from "react-router-dom";
import AcademicSidebar from "../sidebars/AcademicSidebar";

function TeacherLayout() {
  return (
    <div className="flex ">
      <AcademicSidebar /> {/* sidebar fixa à esquerda */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default TeacherLayout;
