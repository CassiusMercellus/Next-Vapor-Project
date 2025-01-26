import { FaCheck } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { IoIosFlag } from "react-icons/io";
import { ImEmbed } from "react-icons/im";

export default function Links() {
    return (
        <>
            <div className="bg-gray-950 mt-4 rounded-lg p-4 w-full">
                <h2 className="text-sm text-gray-400 mb-2">Links</h2>

                <div className="flex flex-col w-full gap-1">
                    <div className="flex flex-row justify-between bg-gray-900 p-2 gap-3 rounded-md">
                        <div className=""><p className="text-white text-xs">Workshop</p></div>
                    </div>

                    <div className="flex flex-row justify-between bg-gray-900 p-2 gap-3 rounded-md">
                        <div className=""><p className="text-white text-xs">Discussions</p></div>
                    </div>

                    <div className="flex flex-row justify-between bg-gray-900 p-2 gap-3 rounded-md">
                        <div className=""><p className="text-white text-xs">News</p></div>
                    </div>

                    <div className="flex flex-row justify-between bg-gray-900 p-2 gap-3 rounded-md">
                        <div className=""><p className="text-white text-xs">Updates</p></div>
                    </div>

                    <div className="flex flex-row justify-between bg-gray-900 p-2 gap-3 rounded-md">
                        <div className=""><p className="text-white text-xs">Community Groups</p></div>
                    </div>

                    <div className="flex flex-row justify-between bg-gray-900 p-2 gap-3 rounded-md">
                        <div className=""><p className="text-white text-xs">Marketplace</p></div>
                    </div>

                    <div className="flex flex-row justify-between gap-1">
                        <div className="bg-gray-900 p-2 w-1/3 rounded-md flex gap-2">
                            <IoMdShare  />
                            <p className="text-white text-xs">Share</p>
                        </div>
                        <div className="bg-gray-900 p-2 w-1/3 rounded-md flex gap-2">
                            <ImEmbed />
                            <p className="text-white text-xs">Embed</p>
                        </div>
                        <div className="bg-gray-900 p-2 w-1/3 rounded-md flex gap-2">
                            <IoIosFlag />
                            <p className="text-white text-xs">Report</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}