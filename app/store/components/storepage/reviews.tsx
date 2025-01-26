import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { MdFilterAltOff } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import HelpfulReviews from './comments/helpfulreviews';
import RecentReviews from './comments/recentreviews';


export default function Reviews() {
    return (
        <>
            <div className="mt-14">
                <div className="flex justify-between">
                    <h1 className="mb-5 font-bold text-lg">User Reviews</h1>
                </div>
                <div className="flex gap-5">

                    <div className="w-1/4 bg-slate-950 p-3 rounded-md">
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between items-center text-gray-400">
                                <h2 className="text-lg font-bold">FILTERS</h2>
                                <MdFilterAltOff size={25} className="bg-slate-900 p-1" />
                            </div>
                        </div>

                        <div className="bg-gray-800 flex flex-row justify-evenly p-1 my-5 w-1/2 rounded-md">
                            <p className="text-gray-400">Your Language</p>
                            <p className="text-gray-500">x</p>
                        </div>

                        <div className="bg-gray-800 h-px"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Review Type</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 bg-gray-800 rounded-md mt-2">
                            <p className="text-sm">All</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Positive</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Negative</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Purchase Type</p>
                            <MdExpandLess size={25} />
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Languages</p>
                            <MdExpandLess size={25} />
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Date Range</p>
                            <MdExpandLess size={25} />
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Playtime</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">No Minimum</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Over 1 hour</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Over 10 hours</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Over 100 hours</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Over 1,000 hours</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Updates</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">All Time</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">After v1</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">After v2</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">After v3</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">After v4</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Display As</p>
                            <MdExpandMore size={25} />
                        </div>

                    </div>

                    <div className="w-3/4">
                        <div className="flex flex-col">
                            <div className="bg-slate-950 flex flex-row p-2 rounded-md">

                                <div className="flex flex-row items-center w-1/2">

                                    <p className="text-sm text-white">Overal Reviews</p>
                                    <div className="flex flex-col w-2/5 items-center px-4">
                                        <div className="flex flex-row justify-between w-full text-xs">
                                            <p className="text-blue-400 flex items-center gap-1">80%<BiSolidLike /></p>
                                            <p className="text-red-400 flex items-center gap-1">20%<BiSolidDislike /></p>
                                        </div>
                                        <div className="flex flex-row w-full gap-1">
                                            <div className="bg-blue-400 h-1 w-4/5 rounded-sm"></div>
                                            <div className="bg-red-400 h-1 w-1/5 rounded-sm"></div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-blue-500">534,170 Reviews</p>

                                </div>

                                <div className="flex flex-row items-center w-1/2">

                                    <p className="text-sm text-white">Recent Reviews</p>
                                    <div className="flex flex-col w-2/5 items-center px-4">
                                        <div className="flex flex-row justify-between w-full text-xs">
                                            <p className="text-blue-400 flex items-center gap-1">80%<BiSolidLike /></p>
                                            <p className="text-red-400 flex items-center gap-1">20%<BiSolidDislike /></p>
                                        </div>
                                        <div className="flex flex-row w-full gap-1">
                                            <div className="bg-blue-400 h-1 w-4/5 rounded-sm"></div>
                                            <div className="bg-red-400 h-1 w-1/5 rounded-sm"></div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-blue-500">534,170 Reviews</p>

                                    <div className="border border-gray-400 rounded-md text-gray-400 p-2 ml-5">See Graph</div>

                                </div>

                            </div>
                        </div>

                        <div className="flex flex-row my-5 gap-5">
                            <div className="flex flex-col w-2/3">

                                <div className="flex flex-row gap-2">
                                    <h1 className="mb-5 font-bold text-lg">User Reviews</h1>
                                    <h1 className="mb-5 font-bold text-lg text-gray-400">(Past 30 days)</h1>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <HelpfulReviews></HelpfulReviews>
                                    <HelpfulReviews></HelpfulReviews>
                                    <HelpfulReviews></HelpfulReviews>
                                </div>

                                
                            </div>
                            <div className="flex w-1/3 flex-col">
                                <h1 className="mb-5 font-bold text-lg">Recent Reviews</h1>
                                <div className="flex flex-col gap-5">
                                    <RecentReviews></RecentReviews>
                                    <RecentReviews></RecentReviews>
                                    <RecentReviews></RecentReviews>
                                </div>
                            </div>
                        </div>


                    </div>

                    
                </div>
            </div>
        </>
    )
}