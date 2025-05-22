import ClanMembers from "../../../components/personal/student/clans/ClanMembers";

const members = [
  { id: 1, name: "Leonor Ferreira", avatarUrl: "/src/assets/images/leonor.jpg", role: "Elder", xp: 580, nextLevelXp: 700, joinDate: "2024-06-02", completedTasks: 30 },
  { id: 2, name: "Rui Silva", avatarUrl: "https://i.pravatar.cc/150?img=54", role: "Member", xp: 520, nextLevelXp: 640, joinDate: "2024-04-10", completedTasks: 22 },
  { id: 3, name: "Mariana Costa", avatarUrl: "https://i.pravatar.cc/150?img=42", role: "Member", xp: 480, nextLevelXp: 580, joinDate: "2024-05-12", completedTasks: 26 },
  { id: 4, name: "Tiago Lopes", avatarUrl: "https://i.pravatar.cc/150?img=12", role: "Member", xp: 460, nextLevelXp: 560, joinDate: "2024-03-18", completedTasks: 24 },
  { id: 5, name: "Inês Martins", avatarUrl: "https://i.pravatar.cc/150?img=44", role: "Member", xp: 430, nextLevelXp: 500, joinDate: "2024-06-25", completedTasks: 19 },
  { id: 6, name: "João Pinto", avatarUrl: "https://i.pravatar.cc/150?img=14", role: "Member", xp: 410, nextLevelXp: 480, joinDate: "2024-05-30", completedTasks: 18 },
  { id: 7, name: "Beatriz Rocha", avatarUrl: "https://i.pravatar.cc/150?img=46", role: "Member", xp: 390, nextLevelXp: 450, joinDate: "2024-07-03", completedTasks: 20 },
  { id: 8, name: "Carlos Nunes", avatarUrl: "https://i.pravatar.cc/150?img=13", role: "Member", xp: 360, nextLevelXp: 430, joinDate: "2024-06-11", completedTasks: 16 },
  { id: 9, name: "Ana Reis", avatarUrl: "https://i.pravatar.cc/150?img=48", role: "Member", xp: 330, nextLevelXp: 400, joinDate: "2024-04-20", completedTasks: 17 },
  { id: 10, name: "Pedro Lopes", avatarUrl: "https://i.pravatar.cc/150?img=49", role: "Member", xp: 325, nextLevelXp: 390, joinDate: "2024-08-01", completedTasks: 15 },
  { id: 11, name: "Liliana Antunes", avatarUrl: "https://i.pravatar.cc/150?img=50", role: "Member", xp: 312, nextLevelXp: 380, joinDate: "2024-06-18", completedTasks: 14 },
  { id: 12, name: "Guilherme Ribeiro", avatarUrl: "https://i.pravatar.cc/150?img=51", role: "Member", xp: 307, nextLevelXp: 370, joinDate: "2024-05-05", completedTasks: 13 },
  { id: 13, name: "Henrique Marques", avatarUrl: "https://i.pravatar.cc/150?img=52", role: "Member", xp: 296, nextLevelXp: 360, joinDate: "2024-07-20", completedTasks: 12 },
  { id: 14, name: "Bruno Oliveira", avatarUrl: "https://i.pravatar.cc/150?img=53", role: "Member", xp: 283, nextLevelXp: 340, joinDate: "2024-08-05", completedTasks: 11 },
  { id: 15, name: "Camila Sousa", avatarUrl: "https://i.pravatar.cc/150?img=41", role: "Member", xp: 271, nextLevelXp: 330, joinDate: "2024-08-15", completedTasks: 10 },
];



function PersonalClanMembers() {
  return <ClanMembers members={members} />;
}

export default PersonalClanMembers