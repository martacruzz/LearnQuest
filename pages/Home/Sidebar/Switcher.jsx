import { BookOpen, User } from "lucide-react";
import { useState } from "react";

function Switcher() {
  const [active, setActive] = useState("Personal");
  const [showSwitch, setShowSwitch] = useState(false);

  const icons = {
    Academic: <BookOpen className="w-8 h-8" />,
    Personal: <User className="w-8 h-8" />,
  };

  const getOther = () => (active === "Personal" ? "Academic" : "Personal");

  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      {/* Botão principal (ativo) */}
      <div
        onClick={() => setShowSwitch((prev) => !prev)}
        className="group w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-slate-500 transition relative"
      >
        {icons[active]}
        <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow">
          {active}
        </span>
      </div>

      {/* Botão alternativo com animação de slide */}
      <div
        className={`absolute left-14 top-1/2 -translate-y-1/2 transform transition-all duration-300 ${
          showSwitch
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-4 pointer-events-none"
        }`}
        onClick={() => {
          setActive(getOther());
          setShowSwitch(false);
        }}
      >
        <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer shadow-md">
          {icons[getOther()]}
        </div>
      </div>
    </div>
  );
}

export default Switcher;
