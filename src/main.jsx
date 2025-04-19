import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { Home } from "../pages/Home/Home";
//import Sidebar from "../pages/Home/Sidebar/Sidebar";
import SidebarAcademic from "../pages/Home/AcademicProfessor/SidebarAcademic/SidebarAcademic";
import "../pages/Home/Sidebar/Sidebar.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarAcademic />
  </StrictMode>
);
