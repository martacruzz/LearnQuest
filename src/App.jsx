import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Initial from "./pages/Initial";

// ----------- LAYOUTS -----------
import TeacherLayout from "./layouts/TeacherLayout";
import StudentPersonalLayout from "./layouts/StudentPersonalLayout";
import TeacherPersonalLayout from "./layouts/TeacherPersonalLayout";
import StudentLayout from "./layouts/StudentLayout";

// ----------- PERSONAL-Student PAGES -----------
import StudentPersonalHome from "./pages/Personal/Student/PersonalHome";
import StudentPersonalTasks from "./pages/Personal/Student/PersonalTasks";
import StudentPersonalCalendar from "./pages/Personal/Student/PersonalCalendar";
import StudentPersonalClansDashboard from "./pages/Personal/Student/PersonalClanDashboard";
import StudentPersonalClanLeaderBoard from "./pages/Personal/Student/PersonalClanLeaderBoard";
import StudentPersonalClanMembers from "./pages/Personal/Student/PersonalClanMembers";
import StudentPersonalClansChat from "./pages/Personal/Student/PersonalClanChat";
import StudentPersonalSettings from "./pages/Personal/Student/PersonalSettings";

// ----------- PERSONAL-Teacher PAGES -----------
import TeacherPersonalHome from "./pages/Personal/Teacher/PersonalHome";
import TeacherPersonalTasks from "./pages/Personal/Teacher/PersonalTasks";
import TeacherPersonalCalendar from "./pages/Personal/Teacher/PersonalCalendar";
import TeacherPersonalClansDashboard from "./pages/Personal/Teacher/PersonalClanDashboard";
import TeacherPersonalClanLeaderBoard from "./pages/Personal/Teacher/PersonalClanLeaderBoard";
import TeacherPersonalClanMembers from "./pages/Personal/Teacher/PersonalClanMembers";
import TeacherPersonalClansChat from "./pages/Personal/Teacher/PersonalClanChat";
import TeacherPersonalSettings from "./pages/Personal/Teacher/PersonalSettings";

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

      {/* LAYOUT TEACHER */}
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

      {/* LAYOUT PESSOAL-STUDENT */}
      <Route path="/personal/student" element={<StudentPersonalLayout />}>
        <Route index element={<StudentPersonalHome />} />
        <Route path="tasks" element={<StudentPersonalTasks />} />
        <Route path="calendar" element={<StudentPersonalCalendar />} />
        <Route path="clans" element={<StudentPersonalClansDashboard />} />
        <Route path="clans/leaderboard" element={<StudentPersonalClanLeaderBoard />} />
        <Route path="clans/members" element={<StudentPersonalClanMembers />} />
        <Route path="clans/chat" element={<StudentPersonalClansChat />} />
        <Route path="settings" element={<StudentPersonalSettings />} />
      </Route>

      {/* LAYOUT PESSOAL-TEACHER */}
      <Route path="/personal/teacher" element={<TeacherPersonalLayout />}>
        <Route index element={<TeacherPersonalHome />} />
        <Route path="tasks" element={<TeacherPersonalTasks />} />
        <Route path="calendar" element={<TeacherPersonalCalendar />} />
        <Route path="clans" element={<TeacherPersonalClansDashboard />} />
        <Route path="clans/leaderboard" element={<TeacherPersonalClanLeaderBoard />} />
        <Route path="clans/members" element={<TeacherPersonalClanMembers />} />
        <Route path="clans/chat" element={<TeacherPersonalClansChat />} />
        <Route path="settings" element={<TeacherPersonalSettings />} />
      </Route>
    </Routes>

  );
}

export default App;
