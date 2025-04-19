import { Routes, Route, Navigate } from "react-router-dom";

// ----------- LAYOUTS -----------
import TeacherLayout from "./layouts/TeacherLayout";

// ----------- PERSONAL PAGES -----------

// ----------- ACADEMIC PAGES - STUDENT -----------

// ----------- ACADEMIC PAGES - PROFESSOR -----------
import TeacherHome from "./pages/Academic/Teacher/TeacherHome";
import TeacherClasses from "./pages/Academic/Teacher/TeacherClasses";

function Placeholder({ text }) {
  return <h1 style={{ color: "white" }}>{text} Page</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/academic/teacher" />} />
      <Route path="/academic/teacher" element={<TeacherLayout />}>
        <Route index element={<TeacherHome />} />
        <Route path="classes" element={<TeacherClasses />} />
        <Route path="calendar" element={<Placeholder text="Calendar" />} />
        <Route path="messages" element={<Placeholder text="Messages" />} />
        <Route path="settings" element={<Placeholder text="Settings" />} />
      </Route>
    </Routes>
  );
}

export default App;
