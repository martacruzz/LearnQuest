const Achievements = () => {
  return (
    <div className="bg-white p-10 rounded-xl flex flex-col items-start gap-6 text-gray-800 w-full max-w-xl mt-6">
      <div>
        <h3 className="text-3xl lg:text-4xl font-bold">Study Achievements</h3>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Badge: Completed a Task */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-2xl text-white shadow-md">
            <span>✅</span>
          </div>
          <p className="mt-2 text-sm font-medium">Completed a Task</p>
        </div>

        {/* Badge: Studied for 10 hours */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-2xl text-white shadow-md">
            <span>⏳</span>
          </div>
          <p className="mt-2 text-sm font-medium">Studied for 10 hours</p>
        </div>

        {/* Badge: Reached Level 5 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-2xl text-white shadow-md">
            <span>🌟</span>
          </div>
          <p className="mt-2 text-sm font-medium">Reached Level 5</p>
        </div>

        {/* Badge: Completed All Tasks */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center text-2xl text-white shadow-md">
            <span>🏅</span>
          </div>
          <p className="mt-2 text-sm font-medium">Completed All Tasks</p>
        </div>

        {/* Badge: High Score on Quiz */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center text-2xl text-white shadow-md">
            <span>🎯</span>
          </div>
          <p className="mt-2 text-sm font-medium">High Score on Quiz</p>
        </div>

        {/* Badge: First Submission */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-teal-500 rounded-full flex items-center justify-center text-2xl text-white shadow-md">
            <span>🚀</span>
          </div>
          <p className="mt-2 text-sm font-medium">First Submission</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
