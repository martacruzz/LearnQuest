const AccountPanel = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Name and Avatar */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Profile</h2>
        <div className="flex items-center gap-6">
          <img 
            src="/src/assets/images/joana-magalhaes.jpg"  // Caminho para a imagem do avatar
            alt="Joana's avatar"
            className="w-16 h-16 rounded-full object-cover border-2 border-slate-200"
          />
          <div className="flex flex-col gap-1">
            <input
              type="text"
              defaultValue="Joana Magalhães"
              className="px-3 py-2 rounded bg-slate-100 text-sm w-60"
            />
            <a href="#" className="text-slate-600 text-sm hover:underline">
              Change photo
            </a>
          </div>
        </div>
      </div>

      {/* Security - Restante do código mantido igual */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Security</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-sm text-slate-600">Email</p>
              <p className="text-sm">joanamagalhaes667@gmail.com</p>
            </div>
            <button className="px-3 py-1 text-sm rounded bg-slate-200 hover:bg-slate-300">
              Change email
            </button>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-sm text-slate-600">Password</p>
              <p className="text-sm text-slate-500">Set a password to secure your account.</p>
            </div>
            <button className="px-3 py-1 text-sm rounded bg-slate-200 hover:bg-slate-300">
              Set password
            </button>
          </div>
          <div className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="text-sm text-slate-600">Two-factor authentication</p>
              <p className="text-sm text-slate-500">Add an extra layer of security.</p>
            </div>
            <button className="px-3 py-1 text-sm rounded bg-slate-100 text-slate-400 cursor-not-allowed">
              Coming soon
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-slate-600">Security keys</p>
              <p className="text-sm text-slate-500">Biometric or device authentication.</p>
            </div>
            <button className="px-3 py-1 text-sm rounded bg-slate-100 text-slate-400 cursor-not-allowed">
              Coming soon
            </button>
          </div>
        </div>
      </div>

      {/* Reset Settings */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">System Settings</h2>
        <p className="text-sm text-slate-600 mb-4">
          This option resets all system preferences to default values. It won't affect your data or content.
        </p>
        <button className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-500">
          Reset settings
        </button>
      </div>
    </div>
  );
};

export default AccountPanel;