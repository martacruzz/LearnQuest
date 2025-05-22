import ClanDashboard from "../../../components/personal/student/clans/ClanDashboard";


const clan = {
  name: "Golden Wolves",
  level: 5,
  avatarUrl: "/src/assets/images/clan_logo.jpg",
  currentXp: 1200,
  nextLevelXp: 2000,
  memberCount: 23,
  avgTasksPerWeek: 150,
  completedTasksThisWeek: 75,
};


function PersonalClansDashboard() {
  return <ClanDashboard clan={clan} />;
}

export default PersonalClansDashboard