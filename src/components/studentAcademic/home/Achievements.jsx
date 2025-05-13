const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "First Task Completed",
      icon: "✅",
      color: "bg-blue-500",
      description: "Complete your first task",
      progress: 2, // 1/1 completed
    },
    {
      id: 2,
      title: "Task Champion",
      icon: "🏆",
      color: "bg-yellow-500",
      description: "Complete 10 tasks",
      progress: 7, // 7/10 completed
    },
    {
      id: 3,
      title: "Perfect Week",
      icon: "🌟",
      color: "bg-purple-500",
      description: "Complete all tasks in a week",
      progress: 2, // 0/1 completed
    },
    {
      id: 4,
      title: "Subject Master",
      icon: "📚",
      color: "bg-green-500",
      description: "Complete all tasks in one subject",
      progress: 2, // 2/5 completed
    },
    {
      id: 5,
      title: "Early Bird",
      icon: "🐦",
      color: "bg-orange-500",
      description: "Complete 5 tasks before deadline",
      progress: 3, // 3/5 completed
    },
    {
      id: 6,
      title: "XP Collector",
      icon: "💰",
      color: "bg-emerald-500",
      description: "Earn 1000 XP from tasks",
      progress: 1000, // 650/1000 completed
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Task Achievements</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id} 
            className={`p-4 rounded-lg border ${
              achievement.progress > 0 ? 'border-transparent' : 'border-gray-200 opacity-60'
            }`}
          >
            <div className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-3`}>
              {achievement.icon}
            </div>
            <h3 className="font-semibold text-center">{achievement.title}</h3>
            <p className="text-sm text-gray-600 text-center mb-2">{achievement.description}</p>
            
            {achievement.progress > 0 && (
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className={`${achievement.color} h-2 rounded-full`} 
                  style={{
                    width: `${Math.min(100, (achievement.progress / 
                      (achievement.title.includes('XP') ? 1000 : 
                      achievement.title.includes('Task Champion') ? 10 : 
                       achievement.title.includes('Complete all') ? 1 : 
                       achievement.title.includes('10') ? 10 : 5)) * 100)}%`
                  }}
                ></div>
              </div>
            )}
            
            <p className="text-xs text-gray-500 text-center mt-1">
              {achievement.progress > 0 ? (
                `${achievement.progress}/${achievement.title.includes('XP') ? '1000' : 
                  achievement.title.includes('Task Champion') ? '10' : 
                  achievement.title.includes('Complete all') ? '1' : 
                  achievement.title.includes('10') ? '10' : '5'}`
              ) : 'Not started'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;