import ClanDashboard from "../../../components/personal/teacher/clans/ClanDashboard";


const clan = {
  name: "History Teachers",
  level: 11,
  avatarUrl: "/src/assets/images/history.jpeg",
  currentXp: 3730,
  nextLevelXp: 5000,
  memberCount: 8,
  avgTasksPerWeek: 50,
  completedTasksThisWeek: 43,
};


function PersonalClansDashboard() {
  return <ClanDashboard clan={clan} />;
}

export default PersonalClansDashboard