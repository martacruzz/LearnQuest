import ClanDashboard from "../../../components/studentAcademic/clans/ClanDashboard";


const clan = {
  name: "Class 12ºB",
  level: 9,
  avatarUrl: "/src/assets/images/light_warriors.jpg",
  currentXp: 1750,
  nextLevelXp: 2000,
  memberCount: 20,
  avgTasksPerWeek: 143,
  completedTasksThisWeek: 64,
};


function StudentClansDashboard() {
  return <ClanDashboard clan={clan} />;
}

export default StudentClansDashboard