import { useNavigate } from "react-router-dom";
import { BookOpen, User } from "lucide-react";
import { useState } from "react";

function PersonalSwitcher() {
  const [active, setActive] = useState("Personal");
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
    <div
      className="relative w-14 h-14 left-0.75"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Main button */}
      <div className="group w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center cursor-pointer hover:scale-105 transition shadow">
        {icons[active]}
        <span className="absolute top-14 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-500 whitespace-nowrap z-10">
          {active}
        </span>


      </div>

      {/* Alternative button */}
      {open && (
        <div
          onClick={handleSwitch}
          className="group absolute top-0 left-14 w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center cursor-pointer hover:scale-105 transition shadow animate-slide-in"
        >
          {icons[active === "Academic" ? "Personal" : "Academic"]}
          <span className="absolute top-14 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-500 whitespace-nowrap z-10">
            {active === "Academic" ? "Personal" : "Academic"}
          </span>
        </div>
      )}

    </div>
  );
}

export default PersonalSwitcher;
