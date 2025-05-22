const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "First Task Completed",
      icon: "✅",
      color: "bg-blue-500",
      description: "Complete your first task",
      progress: 1,   // 1/1 completed
      maxProgress: 1,
    },
    {
      id: 2,
      title: "Task Champion",
      icon: "🏆",
      color: "bg-yellow-500",
      description: "Complete 10 tasks",
      progress: 6,   // 7/10 completed
      maxProgress: 10,
    },
    {
      id: 3,
      title: "Perfect Week",
      icon: "🌟",
      color: "bg-purple-500",
      description: "Complete all tasks in a week",
      progress: 0,   // 1/1 completed
      maxProgress: 1,
    },
    {
      id: 4,
      title: "Project Master",
      icon: "📚",
      color: "bg-green-500",
      description: "Complete all tasks in one subject",
      progress: 3,   // 4/5 completed
      maxProgress: 5,
    },
    {
      id: 5,
      title: "Early Bird",
      icon: "🐦",
      color: "bg-orange-500",
      description: "Complete 5 tasks before deadline",
      progress: 6,   // 3/5 completed
      maxProgress: 5,
    },
    {
      id: 6,
      title: "XP Collector",
      icon: "💰",
      color: "bg-emerald-500",
      description: "Earn 1000 XP from tasks",
      progress: 470, // 470/1000 completed
      maxProgress: 1000,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Task Achievements</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {achievements.map(({ id, title, icon, color, description, progress, maxProgress }) => (
          <div 
            key={id} 
            className={`p-4 rounded-lg border ${
              progress > 0 ? 'border-transparent' : 'border-gray-200 opacity-60'
            }`}
          >
            <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center text-3xl mx-auto mb-3`}>
              {icon}
            </div>
            <h3 className="font-semibold text-center">{title}</h3>
            <p className="text-sm text-gray-600 text-center mb-2">{description}</p>
            
            {progress > 0 && (
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div 
                  className={`${color} h-2 rounded-full`} 
                  style={{
                    width: `${Math.min(100, (progress / maxProgress) * 100)}%`
                  }}
                ></div>
              </div>
            )}
            
            <p className="text-xs text-gray-500 text-center mt-1">
              {progress > 0 ? `${progress}/${maxProgress}` : 'Not started'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
