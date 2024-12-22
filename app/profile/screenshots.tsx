import PFP from "../pfp.png";
import Image from 'next/image'
import { MdKeyboardArrowDown } from "react-icons/md";
import Game from "../halo.png"
import ProfileSection from "../components/profileSection"
import GameCollector from "../components/gameCollector";
import RecentActivity from "../components/recentActivity"
import Friends from "../components/friends"

export default function Screenshots() {
    return (
      <div className="bg-gradient-to-t bg-slate-700 from-slate-950 h-full pt-12 pb-36">
        <div className="flex flex-row bg-slate-800 p-8 mx-48 justify-between">
            <div className="flex flex-row w-full">
                <Image
                    className="border-solid border-white border-2 w-64 mx-4"
                    src={PFP}
                    alt="Picture of the user"
                    width={25}
                    height={25}
                />
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <div className="text-2xl font-bold">Profile</div>
                        <MdKeyboardArrowDown className="text-2xl font-bold"/>
                    </div>
                    <p className="mt-16">I'm profile and this is my favorite spot on Steam!</p>
                </div>
            </div>
            <div className="flex flex-col w-72">
                <div className="flex justify-between">
                    <button className="text-sm mb-4 py-2 px-4 bg-slate-900 hover:bg-slate-700 w-32">Edit Profile</button>
                </div>
                
                <div className="flex flex-col first:mb-4 py-2 px-4 bg-gray-900 w-72 ">
                    <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center border-purple-600 border-2 p-4 m-2 rounded-full w-16 h-16">
                            <p>60</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="m-2">Level</div>
                            <div className="m-2 text-gray-500">30,000 XP</div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                    <div className="flex items-center justify-center border-gray-500 border-2 p-4 m-2 w-16 h-16">
                        <p>6</p>
                    </div>
                        <div className="flex flex-col">
                            <div className="m-2">Years of Service</div>
                            <div className="m-2 text-gray-500">300 XP</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <div className="flex flex-row bg-slate-800 mx-48 justify-between pl-8 pr-8 pb-5">
            <div className="flex flex-col w-full mr-8">
                <GameCollector />
                <RecentActivity />
                
            </div>
            <div className="flex flex-col">
                <ProfileSection />
                <Friends />
            </div>
        </div>
      </div>
    )
  }
  