const sections = [
  "Conta",
  "Preferências",
  "Notificações",
  "Segurança",
  "Acessibilidade",
  "Idioma & Região",
  "Conexões",
];

function SettingsNav({ active, setActive }) {
  return (
    <nav className="w-64 bg-slate-500 text-white py-8 px-6 flex-shrink-0 h-full overflow-y-auto">
      <ul className="flex flex-col gap-4">
        {sections.map((section) => (
          <li key={section}>
            <button
              onClick={() => setActive(section)}
              className={`w-full text-left px-3 py-2 rounded transition ${
                active === section
                  ? "bg-slate-700 font-semibold"
                  : "hover:bg-slate-700"
              }`}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SettingsNav;
