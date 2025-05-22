import ClanMembers from "../../../components/personal/teacher/clans/ClanMembers";

const members = [
  { id: 1, name: "Bruno Carvalho", avatarUrl: "https://i.pravatar.cc/150?img=13", role: "Member", xp: 540, nextLevelXp: 600, joinDate: "2024-03-10", completedTasks: 22 },
  { id: 2, name: "Matilde Fonseca", avatarUrl: "https://i.pravatar.cc/150?img=5", role: "Member", xp: 530, nextLevelXp: 600, joinDate: "2024-02-18", completedTasks: 25 },
  { id: 3, name: "Joana Magalhães", avatarUrl: "/src/assets/images/joana-magalhaes.jpg", role: "Elder", xp: 490, nextLevelXp: 550, joinDate: "2024-01-22", completedTasks: 30 },
  { id: 4, name: "Filipe Gomes", avatarUrl: "https://i.pravatar.cc/150?img=14", role: "Member", xp: 470, nextLevelXp: 520, joinDate: "2024-04-01", completedTasks: 18 },
  { id: 5, name: "Tiago Moreira", avatarUrl: "https://i.pravatar.cc/150?img=8", role: "Member", xp: 440, nextLevelXp: 480, joinDate: "2024-05-15", completedTasks: 20 },
  { id: 6, name: "Beatriz Correia", avatarUrl: "https://i.pravatar.cc/150?img=10", role: "Member", xp: 430, nextLevelXp: 470, joinDate: "2024-06-10", completedTasks: 17 },
  { id: 7, name: "João Ribeiro", avatarUrl: "https://i.pravatar.cc/150?img=18", role: "Member", xp: 420, nextLevelXp: 460, joinDate: "2024-07-05", completedTasks: 19 },
  { id: 8, name: "Marta Lopes", avatarUrl: "https://i.pravatar.cc/150?img=16", role: "Elder", xp: 410, nextLevelXp: 450, joinDate: "2024-08-01", completedTasks: 23 },
];

function PersonalClanMembers() {
  return <ClanMembers members={members} />;
}

export default PersonalClanMembers