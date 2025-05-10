import ClanLeaderboard from "../../../components/studentAcademic/clans/ClanLeaderboard";

const clans = [
  {
    id: 1,
    name: "12ºB",
    avatarUrl: "/src/assets/images/light_warriors.jpg",
    level: 9,
    currentXp: 1750,
    nextLevelXp: 2000,
    memberCount: 20,
    completedTasksThisWeek: 64,
  },
  {
    id: 2,
    name: "12ºE",
    avatarUrl: "/src/assets/images/shadow_legion.jpg",
    level: 9,
    currentXp: 1678,
    nextLevelXp: 2000,
    memberCount: 19,
    completedTasksThisWeek: 59,
  },
  // Add more clans...
  {
    id: 3,
    name: "12ºA",
    avatarUrl: "/src/assets/images/viado.jpeg",
    level: 8,
    currentXp: 1462,
    nextLevelXp: 1500,
    memberCount: 23,
    completedTasksThisWeek: 51,
  },

  {
    id: 4,
    name: "12ºD",
    avatarUrl: "/src/assets/images/clan_logo2.webp",
    level: 8,
    currentXp: 1273,
    nextLevelXp: 1500,
    memberCount: 22,
    completedTasksThisWeek: 43,
  },

  {
    id: 5,
    name: "12ºC",
    avatarUrl: "/src/assets/images/clan_logo3.jpg",
    level: 8,
    currentXp: 1154,
    nextLevelXp: 1500,
    memberCount: 21,
    completedTasksThisWeek: 40,
  }

];


function StudentClanLeaderBoard() {
  return <ClanLeaderboard clans={clans} />;
}

export default StudentClanLeaderBoard