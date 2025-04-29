import UserProfile from "../../../components/studentAcademic/home/UserProfileBanner";
import Achievements from "../../../components/studentAcademic/home/Achievements";
import MonthlyProgress from "../../../components/studentAcademic/home/MonthlyProgressChart";
import StudentMiniLeader from "../../../components/studentAcademic/home/StudentMiniLeaderBoard";

function StudentHome() {
  return (
    <div className="pl-16 flex flex-col">
      {/* Profile Banner and Achievements */}
      <div className="flex flex-row items-start gap-4">
        <div className="w-full">
          <UserProfile />
        </div>
        <div className="justify-right w-full">
          <MonthlyProgress />
        </div>
      </div>

      {/* Montly stats and LeaderBoard */}
      <div className="flex flex-row items-start gap-4">
        <div className="w-full">
          <Achievements />
        </div>

        <div className="justify-right w-full">
          <StudentMiniLeader />
        </div>

      </div>
    </div>
  );
}

export default StudentHome;
