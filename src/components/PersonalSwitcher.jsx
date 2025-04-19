import { useNavigate } from "react-router-dom";
import { BookOpen, User } from "lucide-react";
import { useState } from "react";

function PersonalSwitcher() {
  const navigate = useNavigate();
  const [active, setActive] = useState("Academic");

  const toggle = () => {
    const next = active === "Academic" ? "Personal" : "Academic";
    setActive(next);

    if (next === "Academic") {
      navigate("/");
    } else {
      navigate("/personal");
    }
  };

  const icon =
    active === "Academic" ? (
      <BookOpen className="w-8 h-8" />
    ) : (
      <User className="w-8 h-8" />
    );
  const label = active === "Academic" ? "Personal" : "Academic";

  return (
    <div
      className="group relative flex justify-center items-center cursor-pointer"
      onClick={toggle}
    >
      {icon}
      <span className="absolute left-16 top-1/2 -translate-y-1/2 bg-slate-700 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition z-10 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export default PersonalSwitcher;
