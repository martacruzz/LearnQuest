import { useNavigate } from "react-router-dom";
import { BookOpen, User } from "lucide-react";
import { useState } from "react";

function AcademicSwitcher() {
  const [active, setActive] = useState("Academic");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const icons = {
    Academic: <BookOpen className="w-7 h-7 text-white" />,
    Personal: <User className="w-7 h-7 text-white" />,
  };

  const handleSwitch = () => {
    const next = active === "Academic" ? "Personal" : "Academic";
    setActive(next);
    setOpen(false);
    navigate(next === "Academic" ? "/academic/teacher" : "/personal");
  };

  return (
    <div className="relative w-12 h-12">
      {/* Bolinha do modo atual */}
      <div
        onClick={() => setOpen(!open)}
        className="group w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center cursor-pointer hover:scale-105 transition shadow"
      >
        {icons[active]}
        <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-10">
          {active}
        </span>
      </div>

      {/* Bolinha alternativa, que desliza */}
      {open && (
        <div
          onClick={handleSwitch}
          className="absolute top-0 left-14 w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center cursor-pointer hover:scale-105 transition shadow animate-slide-in"
        >
          {icons[active === "Academic" ? "Personal" : "Academic"]}
        </div>
      )}
    </div>
  );
}

export default AcademicSwitcher;
