import { useNavigate } from "react-router-dom";
import { BookOpen, User } from "lucide-react";
import { useState, useEffect } from "react";

function PersonalSwitcher() {
  const [active, setActive] = useState("Personal");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const role = localStorage.getItem("userRole");

  const icons = {
    Academic: <BookOpen className="w-7 h-7 text-white" />,
    Personal: <User className="w-7 h-7 text-white" />,
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath.startsWith("/academic")) {
      setActive("Academic");
    } else {
      setActive("Personal");
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
    <div
      className="relative w-14 h-14 left-0.75"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="group w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center cursor-pointer hover:scale-105 transition shadow">
        {icons[active]}
        <span className="absolute top-14 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-500 whitespace-nowrap z-10">
          {active}
        </span>
      </div>

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
