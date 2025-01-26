import { FaUser } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { GiAchievement } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { TbCardsFilled } from "react-icons/tb";
import { FaCloud } from "react-icons/fa";

export default function GameFeatures() {
    return (
        <>
            <div className="bg-gray-950 mt-4 rounded-lg p-4 w-full">
                <h2 className="text-sm text-gray-400 mb-2">Features</h2>

                <div className="flex flex-col w-full gap-1">
                    <div className="flex flex-row bg-gray-900 p-2 gap-3 rounded-md">
                        <FaUser className="text-blue-400" />
                        <p className="text-blue-400 text-xs">Single Player</p>
                    </div>

                    <div className="flex flex-row bg-gray-900 p-2 gap-3 rounded-md">
                        <HiUsers className="text-blue-400" />
                        <p className="text-blue-400 text-xs">Online Co-Op</p>
                    </div>

                    <div className="flex flex-row bg-gray-900 p-2 gap-3 rounded-md">
                        <GiAchievement  className="text-blue-400" />
                        <p className="text-blue-400 text-xs">Steam Achievements</p>
                    </div>

                    <div className="flex flex-row bg-gray-900 p-2 gap-3 rounded-md">
                        <IoGameController  className="text-blue-400" />
                        <p className="text-blue-400 text-xs">Full Controller Support</p>
                    </div>

                    <div className="flex flex-row bg-gray-900 p-2 gap-3 rounded-md">
                        <TbCardsFilled  className="text-blue-400" />
                        <p className="text-blue-400 text-xs">Steam Trading Cards</p>
                    </div>

                    <div className="flex flex-row bg-gray-900 p-2 gap-3 rounded-md">
                        <FaCloud  className="text-blue-400" />
                        <p className="text-blue-400 text-xs">Steam Cloud</p>
                    </div>

                </div>
            </div>

        </>
    )
}