import ClanLeaderboard from "../../../components/studentAcademic/clans/ClanLeaderboard";

const clans = [
  {
    id: 1,
    name: "Warriors of Light",
    avatarUrl: "/src/assets/images/light_warriors.jpg",
    level: 41,
    currentXp: 12000,
    nextLevelXp: 20000,
    memberCount: 50,
    completedTasksThisWeek: 200,
  },
  {
    id: 2,
    name: "Shadow Legion",
    avatarUrl: "/src/assets/images/shadow_legion.jpg",
    level: 40,
    currentXp: 10000,
    nextLevelXp: 12000,
    memberCount: 35,
    completedTasksThisWeek: 180,
  },
  // Add more clans...
  {
    id: 3,
    name: "Golden Wolves",
    avatarUrl: "/src/assets/images/clan_logo.jpg",
    level: 5,
    currentXp: 1200,
    nextLevelXp: 2000,
    memberCount: 23,
    completedTasksThisWeek: 75,
  }

];


function StudentClanLeaderBoard() {
  return <ClanLeaderboard clans={clans} />;
}

export default StudentClanLeaderBoard