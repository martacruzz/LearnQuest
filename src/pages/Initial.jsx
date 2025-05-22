import { useNavigate } from "react-router-dom";
import { GraduationCap, UserCog } from "lucide-react";

function Initial() {
  const navigate = useNavigate();

  const handleClick = (role) => {
    localStorage.setItem("userRole", role);
    if (role === "student") {
      navigate("/Personal/Student");
    }else if (role === "teacher") {
      navigate("/Personal/Teacher");
    } 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-slate-300 text-white">
      <div className="flex gap-10">
        {/* STUDENT */}
        <div
          onClick={() => handleClick("student")}
          className="bg-emerald-500 hover:bg-emerald-600 w-60 h-60 rounded-2xl flex flex-col justify-center items-center gap-4 cursor-pointer transition-transform hover:scale-105 shadow-lg"
        >
          <GraduationCap className="w-16 h-16 text-white" />
          <span className="text-xl font-semibold">Student</span>
        </div>

        {/* TEACHER */}
        <div
          onClick={() => handleClick("teacher")}
          className="bg-cyan-600 hover:bg-cyan-700 w-60 h-60 rounded-2xl flex flex-col justify-center items-center gap-4 cursor-pointer transition-transform hover:scale-105 shadow-lg"
        >
          <UserCog className="w-16 h-16 text-white" />
          <span className="text-xl font-semibold">Teacher</span>
        </div>
      </div>
    </div>
  );
}

export default Initial;
