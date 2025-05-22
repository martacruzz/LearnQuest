import UserProfileBanner from "../../../components/personal/student/home/UserProfileBanner";
import Achievements from "../../../components/personal/student/home/AchievementsSection";
import MonthlyProgressChart from "../../../components/personal/student/home/MonthlyProgressChart";
import PersonalMiniLeaderboard from "../../../components/personal/student/home/PersonalMiniLeaderBoard";

function PersonalHome() {
  return (
    <div className="pl-16 flex flex-col">
      {/* Profile Banner and Achievements */}
      <div className="flex flex-row items-start gap-4">
        <div className="w-full">
          <UserProfileBanner />
        </div>
        <div className="justify-right w-full">
          <MonthlyProgressChart />
        </div>
      </div>

      {/* Montly stats and LeaderBoard */}
      <div className="flex flex-row items-start gap-4">
        <div className="w-full">
          <Achievements />
        </div>

        <div className="justify-right w-full">
          <PersonalMiniLeaderboard />
        </div>

      </div>
    </div>
  );
}

export default PersonalHome;
