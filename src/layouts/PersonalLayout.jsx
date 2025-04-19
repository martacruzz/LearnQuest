import { Outlet } from "react-router-dom";
import PersonalSideBar from "../sidebars/PersonalSidebar";

function PersonalLayout() {
  return (
    <div className="flex">
      <PersonalSideBar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default PersonalLayout;
