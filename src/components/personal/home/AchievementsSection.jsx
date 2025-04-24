const Achievements = () => {
  return (

    <div className="bg-slate-800 p-6 rounded-xl flex flex-col items-end sm:justify-left gap-6 shadow-xl text-white w-full max-w-xl mt-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Achievements</h3>
      </div>
      <div className="grid grid-cols-3 gap-6 flex-row w-full max-w-5xl">
        {/* Example Badge 1 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center text-2xl">
            <span>🏅</span>
          </div>
          <p className="mt-2">Badge 1</p>
        </div>
        {/* Example Badge 2 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-2xl">
            <span>🏅</span>
          </div>
          <p className="mt-2">Badge 2</p>
        </div>
        {/* Example Badge 3 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-2xl">
            <span>🏅</span>
          </div>
          <p className="mt-2">Badge 3</p>
        </div>
      </div>
    </div>
  );
}

export default Achievements