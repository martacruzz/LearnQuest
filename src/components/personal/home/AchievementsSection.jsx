const Achievements = () => {
  return (
    <div className="bg-white p-10 rounded-xl flex flex-col items-start gap-6 text-gray-800 w-full max-w-xl mt-6">
      <div>
        <h3 className="text-3xl lg:text-4xl font-bold">Achievements</h3>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Example Badge 1 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center text-2xl text-white shadow-md">
            <span>🏅</span>
          </div>
          <p className="mt-2 text-sm font-medium">Badge 1</p>
        </div>
        {/* Example Badge 2 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-2xl text-white shadow-md">
            <span>🏅</span>
          </div>
          <p className="mt-2 text-sm font-medium">Badge 2</p>
        </div>
        {/* Example Badge 3 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-2xl text-white shadow-md">
            <span>🏅</span>
          </div>
          <p className="mt-2 text-sm font-medium">Badge 3</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
