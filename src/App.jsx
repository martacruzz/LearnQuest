import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Initial from "./pages/Initial";

// ----------- LAYOUTS -----------
import TeacherLayout from "./layouts/TeacherLayout";
import PersonalLayout from "./layouts/PersonalLayout";
import StudentLayout from "./layouts/StudentLayout";

// ----------- PERSONAL PAGES -----------
import PersonalHome from "./pages/personal/PersonalHome";
import PersonalTasks from "./pages/personal/PersonalTasks";
import PersonalCalendar from "./pages/personal/PersonalCalendar";
import PersonalClansDashboard from "./pages/personal/PersonalClanDashboard";
import PersonalClanLeaderBoard from "./pages/personal/PersonalClanLeaderBoard";
import PersonalClanMembers from "./pages/personal/PersonalClanMembers";
import PersonalClansChat from "./pages/personal/PersonalClanChat";
import PersonalSettings from "./pages/personal/PersonalSettings";

// ----------- ACADEMIC PAGES - STUDENT -----------
import StudentHome from "./pages/Academic/Student/StudentHome";
import StudentTasks from "./pages/Academic/Student/StudentTasks";
import StudentCalendar from "./pages/Academic/Student/StudentCalendar";
import StudentClansDashboard from "./pages/Academic/Student/StudentClanDashboard";
import StudentClanLeaderBoard from "./pages/Academic/Student/StudentClanLeaderBoard";
import StudentClanMembers from "./pages/Academic/Student/StudentClanMembers";
import StudentClansChat from "./pages/Academic/Student/StudentClanChat";
import StudentSettings from "./pages/Academic/Student/StudentSettings";

// ----------- ACADEMIC PAGES - PROFESSOR -----------
import TeacherHome from "./pages/Academic/Teacher/TeacherHome";
import TeacherClasses from "./pages/Academic/Teacher/TeacherClasses";
import TeacherDisciplinePage from "./pages/Academic/Teacher/TeacherDisciplinePage";
import TeacherCalendar from "./pages/Academic/Teacher/TeacherCalendar";
import TeacherChat from "./pages/Academic/Teacher/TeacherChat";
import TeacherSettings from "./pages/Academic/Teacher/TeacherSettings";

function Placeholder({ text }) {
  return <h1 style={{ color: "white" }}>{text} Page</h1>;
}

function App() {
  return (
    <Routes>
      {/* Página inicial com seleção de tipo de utilizador */}
      <Route path="/" element={<Initial />} />

      {/* LAYOUT PROFESSOR */}
      <Route path="/academic/teacher" element={<TeacherLayout />}>
        <Route index element={<TeacherHome />} />
        <Route path="classes" element={<TeacherClasses />} />
        <Route path="calendar" element={<TeacherCalendar />} />
        <Route path="messages" element={<TeacherChat />} />
        <Route path="settings" element={<TeacherSettings />} />
        <Route
          path="discipline/:disciplinaId"
          element={<TeacherDisciplinePage />}
        />
      </Route>

      {/* LAYOUT STUDENT */}
      <Route path="/academic/student" element={<StudentLayout />}>
        <Route index element={<StudentHome />} />
        <Route path="tasks" element={<StudentTasks />} />
        <Route path="calendar" element={<StudentCalendar />} />
        <Route path="clans" element={<StudentClansDashboard />} />
        <Route path="clans/leaderboard" element={<StudentClanLeaderBoard />} />
        <Route path="clans/members" element={<StudentClanMembers />} />
        <Route path="clans/chat" element={<StudentClansChat />} />
        <Route path="settings" element={<StudentSettings />} />
      </Route>

      {/* LAYOUT PESSOAL */}
      <Route path="/personal" element={<PersonalLayout />}>
        <Route index element={<PersonalHome />} />
        <Route path="tasks" element={<PersonalTasks />} />
        <Route path="calendar" element={<PersonalCalendar />} />
        <Route path="clans" element={<PersonalClansDashboard />} />
        <Route path="clans/leaderboard" element={<PersonalClanLeaderBoard />} />
        <Route path="clans/members" element={<PersonalClanMembers />} />
        <Route path="clans/chat" element={<PersonalClansChat />} />
        <Route path="settings" element={<PersonalSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
