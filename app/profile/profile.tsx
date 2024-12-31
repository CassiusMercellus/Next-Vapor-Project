
import ProfileSection from "./components/profileSection"
import GameCollector from "./components/gameCollector";
import RecentActivity from "./components/recentActivity"
import Friends from "./components/friends"
import GameCard from "./components/gameCard";
import Banner from "./components/banner"
import Screenshots from "./components/screenshots"

export default function Profile() {
    return (
      <>
      <div className="bg-gradient-to-t bg-slate-700 from-slate-950 h-full pt-12 pb-36">
        <Banner />
        <div className="flex flex-row bg-slate-800 mx-48 justify-between pl-8 pr-8 pb-5">
            <div className="flex flex-col w-full mr-8">
                <GameCollector />
                <RecentActivity />
                <GameCard />
                <Screenshots />
            </div>
            <div className="flex flex-col">
                <ProfileSection />
                <Friends />
            </div>
        </div>
        </div>
      </>
    )
  }
  