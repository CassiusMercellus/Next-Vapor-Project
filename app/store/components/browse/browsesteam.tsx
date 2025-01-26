
import { CgLayoutList } from "react-icons/cg";
import { CgLayoutGrid } from "react-icons/cg";
import { MdFilterAltOff } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

import Games from "./browsesteam/games"



export default function Browsesteam() {
    return (
        <>
            <div className="bg-slate-900 pb-20">
                <h1 className="text-xl font-bold mx-40 pt-20">Browse Steam</h1>
                <div className="mx-40 my-5">
                    <div className="flex flex-row bg-gray-950 mt-20 px-5 py-2 rounded-md">
                        <div className="w-1/6 text-gray-400 flex flex-row items-center gap-2">
                            <p className="">View</p>
                            <CgLayoutList className="bg-gray-900 rounded-md w-6 h-6"/>
                            <CgLayoutGrid  className="bg-gray-900 rounded-md w-6 h-6" />


                        </div>
                        <div className="w-5/6 text-gray-400 flex flex-row items-center justify-between">
                            <div className="px-3 py-2 text-gray-200 bg-gray-800 rounded-md">All Items</div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">New and Trending </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">Top Sellers </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">Top Rated </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">Discounted </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">Popular </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">Coming Soon </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">On Wishlist </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">Upcoming Events </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-row mx-40 gap-5">
                    <div className="w-1/6 bg-gray-950 p-3 rounded-md">
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between items-center text-gray-400">
                                <h2 className="text-lg font-bold">FILTERS</h2>
                                <MdFilterAltOff size={25} className="bg-slate-900 p-1" />
                            </div>
                        </div>

                        <div className="bg-blue-900 bg-opacity-20 my-5 p-3 flex flex-row justify-between items-center rounded-md">
                            <p className="text-blue-500 text-sm">Search for a tag...</p>
                            <IoIosSearch size={20} className="text-blue-500 " />
                        </div>


                        <div className="flex flex-wrap gap-1">
                            <div className="bg-gray-800 flex flex-row justify-evenly p-1 px-3 rounded-md gap-2">
                                <p className="text-gray-400">Adventure</p>
                                <p className="text-gray-500">x</p>
                            </div>
                            <div className="bg-gray-800 flex flex-row justify-evenly p-1 px-3 rounded-md gap-2">
                                <p className="text-gray-400">RPG</p>
                                <p className="text-gray-500">x</p>
                            </div>
                            <div className="bg-gray-800 flex flex-row justify-evenly p-1 px-3 rounded-md gap-2">
                                <p className="text-gray-400">Shooter</p>
                                <p className="text-gray-500">x</p>
                            </div>
                        </div>
                        

                        <div className="bg-gray-800 h-px mt-5"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Top-Level Genres</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 bg-gray-800 rounded-md mt-2">
                            <p className="text-sm">Adventure</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">RPG</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Strategy</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Simulation</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm text-gray-500">See more</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Genres</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 bg-gray-800 rounded-md mt-2">
                            <p className="text-sm">Shooter</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">JRPG</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Sandbox</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Rogue-Like</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Platformer</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm text-gray-500">See more</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Sub-genres</p>
                            <MdExpandLess size={25} />
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Visuals & Viewpoint</p>
                            <MdExpandLess size={25} />
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Themes & Moods</p>
                            <MdExpandLess size={25} />
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Features</p>
                            <MdExpandLess size={25} />
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Players</p>
                            <MdExpandLess size={25} />
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Platform</p>
                            <MdExpandLess size={25} />
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Language</p>
                            <MdExpandLess size={25} />
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Price</p>
                            <MdExpandLess size={25} />
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Achievements</p>
                            <MdExpandLess size={25} />
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Trading Cards</p>
                            <MdExpandLess size={25} />
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Items</p>
                            <MdExpandLess size={25} />
                        </div>
                    </div>





                        <div className="w-5/6 flex flex-col gap-5">
                            <Games />
                            <Games />
                            <Games />
                            <Games />
                            <Games />
                            <Games />
                            <Games />

                            <div className="flex justify-between mt-5">
                                <div></div>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <div className="bg-gray-800 rounded-md p-1 px-3">Prev</div>
                                    <div className="flex flex-row gap-1">
                                        <p className="rounded-md bg-gray-800 p-1 px-2">1</p>
                                        <p className="rounded-md bg-gray-800 p-1 px-2">2</p>
                                        <p className="rounded-md bg-gray-800 p-1 px-2">3</p>
                                        <p className="rounded-md bg-gray-800 p-1 px-2">4</p>
                                        <p className="rounded-md bg-gray-800 p-1 px-2">5</p>
                                        <p className="p-1 px-2">...</p>
                                        <p className="rounded-md bg-gray-800 p-1 px-2">10</p>
                                    </div>
                                    <div className="bg-gray-800 rounded-md p-1 px-3">Next</div>
                                    
                                </div>
                            </div>
                        </div>
                    
                    
                    </div>
                </div>

            
            
            
        </>
    )
}