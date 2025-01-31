
import { CgLayoutList } from "react-icons/cg";
import { CgLayoutGrid } from "react-icons/cg";
import { MdFilterAltOff } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

import Wishlistedgames from "./wishlisted/wishlistedgames"



export default function Wishlistfilter() {
    return (
        <>
            <div className="pb-20">
                <div className="my-5">
                    <div className="flex flex-row bg-gray-950 px-5 py-2 rounded-md">
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


                <div className="flex flex-row gap-5">
                    <div className="w-1/5 bg-gray-950 p-3 rounded-md">
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
                                <p className="text-gray-400">Souls-like</p>
                                <p className="text-gray-500">x</p>
                            </div>
                            <div className="bg-gray-800 flex flex-row justify-evenly p-1 px-3 rounded-md gap-2">
                                <p className="text-gray-400">Adventure</p>
                                <p className="text-gray-500">x</p>
                            </div>
                            <div className="bg-gray-800 flex flex-row justify-evenly p-1 px-3 rounded-md gap-2">
                                <p className="text-gray-400">Story-based</p>
                                <p className="text-gray-500">x</p>
                            </div>
                            <div className="bg-gray-800 flex flex-row justify-evenly p-1 px-3 rounded-md gap-2">
                                <p className="text-gray-400">RPG</p>
                                <p className="text-gray-500">x</p>
                            </div>
                            <div className="bg-gray-800 flex flex-row justify-evenly p-1 px-3 rounded-md gap-2">
                                <p className="text-gray-400">Action</p>
                                <p className="text-gray-500">x</p>
                            </div>
                        </div>
                        

                        <div className="bg-gray-800 h-px mt-5"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Type</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">All Types</p>
                            <p className="text-sm text-gray-500">30</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Games</p>
                            <p className="text-sm text-gray-500">15</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Software</p>
                            <p className="text-sm text-gray-500">10</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">DLC</p>
                            <p className="text-sm text-gray-500">8</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Videos</p>
                            <p className="text-sm text-gray-500">2</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Platform</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 bg-gray-800 rounded-md mt-2">
                            <p className="text-sm">Any OS</p>
                            <p className="text-sm text-gray-500">20</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">macOS</p>
                            <p className="text-sm text-gray-500">5</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Sandbox + Linux</p>
                            <p className="text-sm text-gray-500">5</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Price</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Less than $5</p>
                            <p className="text-sm text-gray-500">10</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Less than $10</p>
                            <p className="text-sm text-gray-500">5</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Less than Steam Wallet Balance</p>
                            <p className="text-sm text-gray-500">2</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Discount</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">On Sale</p>
                            <p className="text-sm text-gray-500">5</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">50% or more</p>
                            <p className="text-sm text-gray-500">3</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">70% or more</p>
                            <p className="text-sm text-gray-500">1</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Exclude</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Early Access</p>
                            <p className="text-sm text-gray-500">2</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Pre-order</p>
                            <p className="text-sm text-gray-500">2</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">VR-only</p>
                            <p className="text-sm text-gray-500">1</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Deck Compatibility</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Verified</p>
                            <p className="text-sm text-gray-500">5</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Playable</p>
                            <p className="text-sm text-gray-500">3</p>
                        </div>
                    </div>





                        <div className="w-4/5 flex flex-col gap-5">
                            <Wishlistedgames />
                            <Wishlistedgames />
                            <Wishlistedgames />
                            <Wishlistedgames />

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