import ClanMembers from "../../../components/studentAcademic/clans/ClanMembers";

const members = [
  { id: 1, name: "Leonor Ferreira", avatarUrl: "/src/assets/images/leonor.jpg", role: "Member", xp: 1514, nextLevelXp: 2000, joinDate: "2024-06-02", completedTasks: 14 },
  { id: 2, name: "Lucas Pereira", avatarUrl: "https://i.pravatar.cc/150?img=12", role: "Leader", xp: 1750, nextLevelXp: 2000, joinDate: "2024-04-01", completedTasks: 32 },
  { id: 3, name: "Sofia Almeida", avatarUrl: "https://i.pravatar.cc/150?img=2", role: "Elder", xp: 1423, nextLevelXp: 1500, joinDate: "2024-03-15", completedTasks: 28 },
  { id: 4, name: "Pedro Martins", avatarUrl: "https://i.pravatar.cc/150?img=4", role: "Member", xp: 1369, nextLevelXp: 1500, joinDate: "2024-06-22", completedTasks: 9 },
  { id: 5, name: "Raquel Costa", avatarUrl: "https://i.pravatar.cc/150?img=5", role: "Elder", xp: 1245, nextLevelXp: 1500, joinDate: "2024-02-28", completedTasks: 25 },
  { id: 6, name: "Bruno Oliveira", avatarUrl: "https://i.pravatar.cc/150?img=6", role: "Member", xp: 1183, nextLevelXp: 1500, joinDate: "2024-07-10", completedTasks: 6 },
  { id: 7, name: "Camila Sousa", avatarUrl: "https://i.pravatar.cc/150?img=7", role: "Member", xp: 1151, nextLevelXp: 1500, joinDate: "2024-08-01", completedTasks: 7 },
  { id: 8, name: "Daniela Gomes", avatarUrl: "https://i.pravatar.cc/150?img=8", role: "Member", xp: 1136, nextLevelXp: 1500, joinDate: "2024-09-05", completedTasks: 3 },
  { id: 9, name: "Fábio Rocha", avatarUrl: "https://i.pravatar.cc/150?img=9", role: "Elder", xp: 1119, nextLevelXp: 1500, joinDate: "2024-04-15", completedTasks: 30 },
  { id: 10, name: "Rui Silva", avatarUrl: "https://i.pravatar.cc/150?img=10", role: "Member", xp: 1100, nextLevelXp: 1500, joinDate: "2024-07-15", completedTasks: 10 },
  { id: 11, name: "Mariana Costa", avatarUrl: "https://i.pravatar.cc/150?img=11", role: "Member", xp: 950, nextLevelXp: 1000, joinDate: "2024-08-18", completedTasks: 5 },
  { id: 12, name: "Tiago Lopes", avatarUrl: "https://i.pravatar.cc/150?img=1", role: "Member", xp: 900, nextLevelXp: 1000, joinDate: "2024-06-05", completedTasks: 6 },
  { id: 13, name: "Inês Martins", avatarUrl: "https://i.pravatar.cc/150?img=13", role: "Elder", xp: 870, nextLevelXp: 1000, joinDate: "2024-03-12", completedTasks: 22 },
  { id: 14, name: "João Pinto", avatarUrl: "https://i.pravatar.cc/150?img=14", role: "Member", xp: 830, nextLevelXp: 1000, joinDate: "2024-09-01", completedTasks: 4 },
  { id: 15, name: "Beatriz Rocha", avatarUrl: "https://i.pravatar.cc/150?img=15", role: "Member", xp: 780, nextLevelXp: 1000, joinDate: "2024-08-28", completedTasks: 8 },
  { id: 16, name: "Carlos Nunes", avatarUrl: "https://i.pravatar.cc/150?img=17", role: "Member", xp: 740, nextLevelXp: 1000, joinDate: "2024-07-01", completedTasks: 5 },
  { id: 17, name: "Ana Reis", avatarUrl: "https://i.pravatar.cc/150?img=16", role: "Member", xp: 680, nextLevelXp: 1000, joinDate: "2024-09-07", completedTasks: 3 },
  { id: 18, name: "Liliana Antunes", avatarUrl: "https://i.pravatar.cc/150?img=20", role: "Elder", xp: 634, nextLevelXp: 1000, joinDate: "2024-04-20", completedTasks: 27 },
  { id: 19, name: "Guilherme Ribeiro", avatarUrl: "https://i.pravatar.cc/150?img=19", role: "Member", xp: 597, nextLevelXp: 1000, joinDate: "2024-08-05", completedTasks: 6 },
  { id: 20, name: "Henrique Marques", avatarUrl: "https://i.pravatar.cc/150?img=18", role: "Member", xp: 548, nextLevelXp: 1000, joinDate: "2024-07-20", completedTasks: 7 },
];

function StudentClanMembers() {
  return <ClanMembers members={members} />;
}

export default StudentClanMembers;