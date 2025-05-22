import ClanLeaderboard from "../../../components/personal/teacher/clans/ClanLeaderboard";

const clans = [
  {
    id: 1,
    name: "Math Teachers",
    avatarUrl: "/src/assets/images/math.jpg",
    level: 13,
    currentXp: 6500,
    nextLevelXp: 7000,
    memberCount: 10,
    completedTasksThisWeek: 80,
    avgTasksPerWeek: 61,
  },
  {
    id: 2,
    name: "History Teachers",
    avatarUrl: "/src/assets/images/history.jpeg",
    level: 11,
    currentXp: 3730,
    nextLevelXp: 5000,
    memberCount: 8,
    completedTasksThisWeek: 50,
    avgTasksPerWeek: 43,
  },
  {
    id: 3,
    name: "Philosophy Teachers",
    avatarUrl: "/src/assets/images/philosophy.jpg",
    level: 11,
    currentXp: 3570,
    nextLevelXp: 5000,
    memberCount: 6,
    completedTasksThisWeek: 110,
    avgTasksPerWeek: 140,
  },
  {
    id: 4,
    name: "Science Teachers",
    avatarUrl: "/src/assets/images/science.jpg",
    level: 10,
    currentXp: 3160,
    nextLevelXp: 3500,
    memberCount: 11,
    completedTasksThisWeek: 45,
    avgTasksPerWeek: 37,
  },
  {
    id: 5,
    name: "Literature Teachers",
    avatarUrl: "/src/assets/images/literature.jpg",
    level: 10,
    currentXp: 3020,
    nextLevelXp: 3500,
    memberCount: 5,
    completedTasksThisWeek: 35,
    avgTasksPerWeek: 30,
  },
  {
    id: 6,
    name: "Art Teachers",
    avatarUrl: "/src/assets/images/art.jpg",
    level: 10,
    currentXp: 2980,
    nextLevelXp: 3500,
    memberCount: 4,
    completedTasksThisWeek: 30,
    avgTasksPerWeek: 28,
  },
];



function PersonalClanLeaderBoard() {
  return <ClanLeaderboard clans={clans} />;
}

export default PersonalClanLeaderBoard