import { Routes, Route, Navigate } from "react-router-dom";
import './index.css'

// ----------- LAYOUTS -----------
import TeacherLayout from "./layouts/TeacherLayout";
import PersonalLayout from "./layouts/PersonalLayout"

// ----------- PERSONAL PAGES -----------
import PersonalHome from "./pages/personal/PersonalHome";
import PersonalTasks from "./pages/personal/PersonalTasks";
import PersonalCalendar from "./pages/personal/PersonalCalendar";
import PersonalClansDashboard from "./pages/personal/PersonalClanDashboard";
import PersonalClanLeaderBoard from "./pages/personal/PersonalClanLeaderBoard";
import PersonalClanMembers from "./pages/personal/PersonalClanMembers";
import PersonalClansChat from "./pages/personal/PersonalClanChat";

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

      <Route path="/personal" element={<PersonalLayout />}>
        <Route index element={<PersonalHome />} />
        <Route path="tasks" element={<PersonalTasks />} />
        <Route path="calendar" element={<PersonalCalendar />} />
        <Route path="clans" element={<PersonalClansDashboard />} />
        <Route path="clans/leaderboard" element={<PersonalClanLeaderBoard />} />
        <Route path="clans/members" element={<PersonalClanMembers />} />
        <Route path="clans/chat" element={<PersonalClansChat />} />
      </Route>
    </Routes>
  );
}

export default App;
