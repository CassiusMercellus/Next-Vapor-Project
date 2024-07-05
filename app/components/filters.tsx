import { FaSearch } from "react-icons/fa";
import { MdOutlineFilterAltOff } from "react-icons/md";

export default function Filters() {
    return(
        <div className="flex flex-row bg-slate-900 justify-between p-5 gap-3.5">
            <div className="flex flex-col w-1/3 gap-2.5">
                <div className="flex flex-col">
                    <h2 className="my-2.5 text-lg">Type</h2>
                    <div className="pl-3">
                        <p className="h-8">Games</p>
                        <p className="h-8">Software</p>
                        <p className="h-8">Tools</p>
                        <p className="h-8">Videos</p>
                        <p className="h-8">Soundtracks</p>
                    </div>
                </div>

                <div className="flex flex-col border-t-2 border-slate-700">
                    <h2 className="my-2.5 text-lg">Players</h2>
                    <div className="pl-3">
                        <p className="h-8">Single Player</p>
                        <p className="h-8">Multiplayer</p>
                        <p className="h-8">Cooperative</p>
                    </div>
                </div>

                <div className="flex flex-col border-t-2 border-slate-700">
                    <h2 className="my-2.5 text-lg">Play State</h2>
                    <div className="pl-3">
                        <p className="h-8">Ready to Play</p>
                        <p className="h-8">Installed Locally</p>
                        <p className="h-8">Played</p>
                        <p className="h-8">Unplayed</p>
                    </div>
                </div>
            </div>
            
            
            <div className="flex flex-col w-1/3 gap-2.5">
                <div className="flex flex-col">
                    <h2 className="my-2.5 text-lg">Hardware Support</h2>
                    <div className="pl-3">
                        <p className="h-8">Controllers (full)</p>
                        <p className="h-8">Controllers (partial)</p>
                        <p className="h-8">VR</p>
                    </div>
                </div>

                <div className="flex flex-col border-t-2 border-slate-700">
                    <h2 className="my-2.5 text-lg">Features</h2>
                    <div className="pl-3">
                        <p className="h-8">Trading Cards</p>
                        <p className="h-8">Workshop</p>
                        <p className="h-8">Achievements</p>
                        <p className="h-8">Remote Play Together</p>
                    </div>
                </div>

                <div className="flex flex-col border-t-2 border-slate-700">
                    <h2 className="my-2.5 text-lg">Friends</h2>
                    <div className="flex flex-row justify-between items-center rounded-sm p-2 bg-blue-600 opacity-25">
                        <input type="text" className="text-white opacity-100 bg-blue-600 outline-none w-full" placeholder="Search for a tag..." />
                        <FaSearch />
                    </div>
                </div>
                <div className="flex flex-col border-t-2 border-slate-700">
                    <h2 className="my-2.5 text-lg">Store Tags</h2>
                    <div className="flex flex-row justify-between items-center rounded-sm p-2 bg-blue-600 opacity-25">
                        <input type="text" className="text-white opacity-100 bg-blue-600 outline-none w-full" placeholder="Search for a tag..." />
                        <FaSearch />
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-1/3 justify-between">
                <div>
                    <h2 className="mb-2 text-lg">Genre</h2>
                    <div className="flex flex-col pl-3">
                        <p className="h-8">Action</p>
                        <p className="h-8">Adventure</p>
                        <p className="h-8">Casual</p>
                        <p className="h-8">Massively Multiplayer</p>
                        <p className="h-8">Racing</p>
                        <p className="h-8">RPG</p>
                        <p className="h-8">Simulation</p>
                        <p className="h-8">Sports</p>
                        <p className="h-8">Strategy</p>
                    </div>
                </div>
                
                <div className="flex flex-row justify-center">
                    <MdOutlineFilterAltOff size={50} className="rounded-md p-2 bg-gray-800 text-white hover:bg-gray-700" />
                    <button className="rounded-md p-2 px-6 bg-blue-500 text-white ml-6 hover:bg-blue-600">Create Collection</button>
                </div>
            </div>
            
        </div>
    )
}