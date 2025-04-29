import ClanMembers from "../../components/personal/clans/ClanMembers";

const members = [
  { id: 1, name: "Alec Stone", avatarUrl: "https://i.pravatar.cc/150?img=12", role: "Leader", xp: 560, nextLevelXp: 800, joinDate: "2024-04-01", completedTasks: 32 },
  { id: 2, name: "Bob Carter", avatarUrl: "https://i.pravatar.cc/150?img=2", role: "Elder", xp: 470, nextLevelXp: 700, joinDate: "2024-03-15", completedTasks: 28 },
  { id: 3, name: "Clark Reed", avatarUrl: "https://i.pravatar.cc/150?img=3", role: "Member", xp: 240, nextLevelXp: 400, joinDate: "2024-06-02", completedTasks: 14 },
  { id: 4, name: "Daniel Wu", avatarUrl: "https://i.pravatar.cc/150?img=4", role: "Member", xp: 190, nextLevelXp: 300, joinDate: "2024-06-22", completedTasks: 9 },
  { id: 5, name: "Ella Kim", avatarUrl: "https://i.pravatar.cc/150?img=5", role: "Elder", xp: 420, nextLevelXp: 650, joinDate: "2024-02-28", completedTasks: 25 },
  { id: 6, name: "Finn Lopez", avatarUrl: "https://i.pravatar.cc/150?img=6", role: "Member", xp: 120, nextLevelXp: 200, joinDate: "2024-07-10", completedTasks: 6 },
  { id: 7, name: "Grace Patel", avatarUrl: "https://i.pravatar.cc/150?img=7", role: "Member", xp: 160, nextLevelXp: 250, joinDate: "2024-08-01", completedTasks: 7 },
  { id: 8, name: "Hugo Brown", avatarUrl: "https://i.pravatar.cc/150?img=8", role: "Member", xp: 80, nextLevelXp: 180, joinDate: "2024-09-05", completedTasks: 3 },
  { id: 9, name: "Ivy Nguyen", avatarUrl: "https://i.pravatar.cc/150?img=9", role: "Elder", xp: 500, nextLevelXp: 750, joinDate: "2024-04-15", completedTasks: 30 },
  { id: 10, name: "Maya Lee", avatarUrl: "https://i.pravatar.cc/150?img=10", role: "Member", xp: 200, nextLevelXp: 320, joinDate: "2024-07-15", completedTasks: 10 },
  { id: 11, name: "Finn Davis", avatarUrl: "https://i.pravatar.cc/150?img=11", role: "Member", xp: 130, nextLevelXp: 210, joinDate: "2024-08-18", completedTasks: 5 },
  { id: 12, name: "Leo Martinez", avatarUrl: "https://i.pravatar.cc/150?img=1", role: "Member", xp: 150, nextLevelXp: 220, joinDate: "2024-06-05", completedTasks: 6 },
  { id: 13, name: "Mark Johnson", avatarUrl: "https://i.pravatar.cc/150?img=13", role: "Elder", xp: 390, nextLevelXp: 580, joinDate: "2024-03-12", completedTasks: 22 },
  { id: 14, name: "Noah Thompson", avatarUrl: "https://i.pravatar.cc/150?img=14", role: "Member", xp: 110, nextLevelXp: 180, joinDate: "2024-09-01", completedTasks: 4 },
  { id: 15, name: "Oliver White", avatarUrl: "https://i.pravatar.cc/150?img=15", role: "Member", xp: 170, nextLevelXp: 250, joinDate: "2024-08-28", completedTasks: 8 },
  { id: 16, name: "Parker Hill", avatarUrl: "https://i.pravatar.cc/150?img=17", role: "Member", xp: 140, nextLevelXp: 210, joinDate: "2024-07-01", completedTasks: 5 },
  { id: 17, name: "Quinn Rivera", avatarUrl: "https://i.pravatar.cc/150?img=16", role: "Member", xp: 100, nextLevelXp: 160, joinDate: "2024-09-07", completedTasks: 3 },
  { id: 18, name: "Riley Chen", avatarUrl: "https://i.pravatar.cc/150?img=20", role: "Elder", xp: 450, nextLevelXp: 700, joinDate: "2024-04-20", completedTasks: 27 },
  { id: 19, name: "Sophie Adams", avatarUrl: "https://i.pravatar.cc/150?img=19", role: "Member", xp: 125, nextLevelXp: 190, joinDate: "2024-08-05", completedTasks: 6 },
  { id: 20, name: "Theo Scott", avatarUrl: "https://i.pravatar.cc/150?img=18", role: "Member", xp: 180, nextLevelXp: 260, joinDate: "2024-07-20", completedTasks: 7 },
  { id: 21, name: "Uma Morgan", avatarUrl: "https://i.pravatar.cc/150?img=21", role: "Member", xp: 145, nextLevelXp: 230, joinDate: "2024-08-10", completedTasks: 5 },
  { id: 22, name: "Victor Allen", avatarUrl: "https://i.pravatar.cc/150?img=22", role: "Member", xp: 135, nextLevelXp: 210, joinDate: "2024-08-30", completedTasks: 4 },
  { id: 23, name: "Willow Brooks", avatarUrl: "https://i.pravatar.cc/150?img=23", role: "Member", xp: 155, nextLevelXp: 240, joinDate: "2024-07-25", completedTasks: 6 },
];



function PersonalClanMembers() {
  return <ClanMembers members={members} />;
}

export default PersonalClanMembers