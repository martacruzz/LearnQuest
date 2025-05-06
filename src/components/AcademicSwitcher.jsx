import { useNavigate } from "react-router-dom";
import { BookOpen, User } from "lucide-react";
import { useState, useEffect } from "react";

function AcademicSwitcher() {
  const [active, setActive] = useState("Academic");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const role = localStorage.getItem("userRole");

  const icons = {
    Academic: <BookOpen className="w-7 h-7 text-white" />,
    Personal: <User className="w-7 h-7 text-white" />,
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath.startsWith("/personal")) {
      setActive("Personal");
    } else {
      setActive("Academic");
    }
  }, []);

  const handleSwitch = () => {
    const next = active === "Academic" ? "Personal" : "Academic";
    setActive(next);
    setOpen(false);

    if (next === "Academic") {
      if (role === "student") {
        navigate("/academic/student");
      } else {
        navigate("/academic/teacher");
      }
    } else {
      navigate("/personal");
    }
  };

  return (
    <div className="relative w-14 h-14 left-0.75">
      <div
        onClick={() => setOpen(!open)}
        className="group w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center cursor-pointer hover:scale-105 transition shadow"
      >
        {icons[active]}
        <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-[9999]">
          {active}
        </span>
      </div>

      {open && (
        <div
          onClick={handleSwitch}
          className="group absolute top-0 left-14 w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center cursor-pointer hover:scale-105 transition shadow animate-slide-in"
        >
          {icons[active === "Academic" ? "Personal" : "Academic"]}
        </div>
      )}
    </div>
  );
}

export default AcademicSwitcher;
