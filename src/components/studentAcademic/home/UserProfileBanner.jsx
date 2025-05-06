import { useState } from "react";

const UserProfileBanner = () => {
  const [hairColor, setHairColor] = useState("#4B2E2E");
  const [shirtColor, setShirtColor] = useState("#3B82F6");
  const [gender, setGender] = useState("feminino");
  const [skinTone, setSkinTone] = useState("#f5cba7");
  const [hasGlasses, setHasGlasses] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [avatarBg, setAvatarBg] = useState("#FFFFFF");

  const HAIR_COLORS = [
    { value: "#4B2E2E", label: "Castanho" },
    { value: "#FFD700", label: "Loiro" },
    { value: "#1F1F1F", label: "Preto" },
    { value: "#FF69B4", label: "Cor-de-Rosa" },
  ];

  const SHIRT_COLORS = [
    { value: "#3B82F6", label: "Azul" },
    { value: "#10B981", label: "Verde" },
    { value: "#EF4444", label: "Vermelho" },
    { value: "#A855F7", label: "Roxo" },
    { value: "#F59E0B", label: "Laranja" },
    { value: "#6B7280", label: "Cinza" },
    { value: "#1E3A8A", label: "Azul Escuro" },
    { value: "#D97706", label: "Âmbar" },
    { value: "#BE185D", label: "Rosa Escuro" },
    { value: "#065F46", label: "Verde Escuro" }
];

  const SKIN_TONES = [
    { value: "#f5cba7", label: "Claro" },
    { value: "#d2a679", label: "Médio" },
    { value: "#8d5524", label: "Escuro" },
  ];

  const BG_COLORS = [
    { value: "#FFFFFF", label: "Branco" },
    { value: "#F0F4F8", label: "Cinza Claro" },
    { value: "#E0F2FE", label: "Azul Claro" },
    { value: "#FEF9C3", label: "Amarelo Claro" },
    { value: "#DCFCE7", label: "Verde Claro" },
    { value: "#FEE2E2", label: "Rosa Claro" },
    { value: "#1F2937", label: "Cinza Escuro" },
    { value: "#0F172A", label: "Azul Muito Escuro" },
    { value: "#111827", label: "Preto Suave" },
    { value: "#4B5563", label: "Grafite" },
    { value: "#FCD34D", label: "Amarelo Forte" },
    { value: "#34D399", label: "Verde Água" },
    { value: "#A78BFA", label: "Lilás" }
];

  return (
    <div className="bg-white/0 p-6 rounded-xl flex flex-col sm:flex-row items-center sm:items-end gap-6  text-slate-800 text-base sm:text-lg  w-full max-w-xl text-slate-800 w-full max-w-xl">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold text-center">Leonor Ferreira</h2>
        <div className="relative w-56 h-56 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-md opacity-30 animate-pulse" />
          <div className="relative w-full h-full rounded-full border-4 border-slate-300 flex items-center justify-center" style={{ backgroundColor: avatarBg }}>
            <svg viewBox="0 0 100 100" className="w-64 h-64">
              {gender === "feminino" && (
                <>
                  <rect x="20" y="15" width="60" height="50" rx="10" ry="10" fill={hairColor} />
                  <path d="M30,25 C40,15 60,15 70,25 C65,20 55,18 50,20 C45,22 35,20 30,25 Z" fill={hairColor} />
                </>
              )}
              {gender === "masculino" && (
                <>
                  <path d="M25,25 C25,5 75,5 75,25 C75,45 65,50 50,45 C35,50 25,45 25,25 Z" fill={hairColor} />
                  <path d="M30,20 C40,10 60,10 70,20 C65,15 50,12 35,15 C32,17 30,18 30,20 Z" fill={hairColor} />
                </>
              )}

              <circle cx="50" cy="35" r="20" fill={skinTone} />
              <circle cx="42" cy="35" r="2.5" fill="#000" />
              <circle cx="58" cy="35" r="2.5" fill="#000" />

              {hasGlasses && (
                <g stroke="#000" strokeWidth="1.2" fill="none">
                  <circle cx="42" cy="35" r="5" />
                  <circle cx="58" cy="35" r="5" />
                  <line x1="47" y1="35" x2="53" y2="35" />
                </g>
              )}

              <path d="M50,38 Q49,40 50,42" stroke="#333" strokeWidth="1" fill="none" />
              <path d="M44,46 Q50,50 56,46" stroke="#b91c1c" strokeWidth="1.5" fill="none" />
              <rect x="25" y="60" width="50" height="25" rx="8" fill={shirtColor} />
            </svg>
          </div>
        </div>

        <button
          onClick={() => setEditMode(!editMode)}
          className="mt-2 px-4 py-2 bg-slate-200 text-slate-800 rounded hover:bg-slate-300"
        >
          {editMode ? "Concluído" : "Editar Avatar"}
        </button>
      </div>

      {editMode && (
        <div className="grid grid-cols-1 gap-3 w-full sm:w-auto">
          <div className="flex items-center gap-3">
            <label htmlFor="gender" className="w-24">Género:</label>
            <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="flex-1 bg-slate-100 text-slate-800 rounded px-3 py-1.5 text-sm">
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="hair" className="w-24">Cabelo:</label>
            <select id="hair" value={hairColor} onChange={(e) => setHairColor(e.target.value)} className="flex-1 bg-slate-100 text-slate-800 rounded px-3 py-1.5 text-sm">
              {HAIR_COLORS.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="shirt" className="w-24">Roupa:</label>
            <select id="shirt" value={shirtColor} onChange={(e) => setShirtColor(e.target.value)} className="flex-1 bg-slate-100 text-slate-800 rounded px-3 py-1.5 text-sm">
              {SHIRT_COLORS.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="skin" className="w-24">Tom de Pele:</label>
            <select id="skin" value={skinTone} onChange={(e) => setSkinTone(e.target.value)} className="flex-1 bg-slate-100 text-slate-800 rounded px-3 py-1.5 text-sm">
              {SKIN_TONES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="bg" className="w-24">Fundo:</label>
            <select id="bg" value={avatarBg} onChange={(e) => setAvatarBg(e.target.value)} className="flex-1 bg-slate-100 text-slate-800 rounded px-3 py-1.5 text-sm">
              {BG_COLORS.map((b) => (
                <option key={b.value} value={b.value}>{b.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="glasses" className="w-24">Óculos:</label>
            <input id="glasses" type="checkbox" checked={hasGlasses} onChange={() => setHasGlasses(!hasGlasses)} className="w-5 h-5 rounded text-cyan-500" />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileBanner;
