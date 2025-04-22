import UserProfileBanner from "../../components/UserProfileBanner";
import Achievements from "../../components/AchievementsSection";
import MonthlyProgressChart from "../../components/MonthlyProgressChart";
import PersonalMiniLeaderboard from "../../components/PersonalMiniLeaderBoard";

function PersonalHome() {
  return (
    <div className="flex flex-col">
      {/* Profile Banner and Achievements */}
      <div className="flex flex-row items-start">
        <div className="w-1/2">
          <UserProfileBanner />
        </div>
        <div className="justify-right w-1/2">
          <MonthlyProgressChart />
        </div>
      </div>

      {/* Montly stats and LeaderBoard */}
      <div className="flex flex-row items-start">
        <div className="w-1/2">
          <Achievements />
        </div>

        <div className="justify-right w-1/2">
          <PersonalMiniLeaderboard />
        </div>

      </div>
    </div>
  );
}

export default PersonalHome;
