import Image from 'next/image'
import horror from '../../images/horror.jpg'

import { RiAccountCircleFill } from "react-icons/ri";
import { FaSteam } from "react-icons/fa";

import { CgLayoutList } from "react-icons/cg";
import { CgLayoutGrid } from "react-icons/cg";
import { MdFilterAltOff } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export default function Pointshop() {
    return (
        <>
            <div className="py-5 px-48 bg-gradient-to-b from-blue-950 to-slate-950">
                <div className="flex flex-row justify-between items-center pb-20">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold">Buy Games, Earn Points</h1>
                        <p className="text-white text-sm">Customize your Steam experience with Points Shop items.</p>
                    </div>
                    <div className="flex gap-5">
                        <div className="border border-gray-500 flex items-center rounded-md px-5 p-2">How it works</div>
                        <div className="border border-gray-500 flex items-center rounded-md px-5 p-2">History</div>
                        <div className="border border-gray-500 flex items-center rounded-md px-5 p-2">My Profile</div>
                        <div className="bg-blue-950 flex items-center rounded-md px-5 p-2 text-sky-400 font-bold gap-2">
                            <FaSteam size={22} className="text-white" />
                            <div className="">2,500</div>
                        </div>
                        
                    </div>
                    
                </div>

                <div className="flex flex-row gap-5">
                    <div className="w-1/5 bg-gray-950 p-3 rounded-md">

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Featured</p>
                            
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2 bg-gray-800">
                            <p className="text-sm">Featured Home</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">From Your Games</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">From Sales and Events</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Bundles</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Interface</p>
                            
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Keyboards</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Startup Movies</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Profile</p>
                            
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Avatar</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Backgrounds</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Community Awards</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Seasonal Badge</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Game Profiles</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Showcases</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Chat</p>
                            
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Animated Stickers</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Chat Effects</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Emoticons</p>
                            <p className="text-sm text-gray-500">5,000</p>
                        </div>
                    </div>
                    <div className="w-4/5 flex flex-col gap-5">
                        <div className="relative bg-cover bg-center bg-no-repeat p-10 rounded-lg" style={{ backgroundImage: `url(${horror.src})`}}>
                            <div className="absolute inset-0 bg-gray-500 bg-opacity-5 backdrop-blur-sm rounded-lg"></div>
                            <div className="flex flex-col relative z-10 rounded-lg">
                                <h1 className="text-2xl font-bold mb-10">Steam Scream 2023 Items</h1>
                                <div className="flex flex-row gap-10">
                                <div className="p-3 bg-gray-800 flex flex-col rounded-md">
                                    <Image src={horror} alt="horror" className="rounded-md h-60 object-cover"/>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-lg text-blue-400 font-bold mt-5">Greenhouse of Horror</p>
                                        <div className="flex items-center text-gray-500 gap-2">
                                            <RiAccountCircleFill size={25} />
                                            <p className="text-md text-gray-500">Game Profile</p>
                                        </div>

                                        <div className="flex items-center text-white gap-2">
                                            <FaSteam   size={22} />
                                            <p className="text-md text-white font-bold">5,000</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 bg-gray-800 flex flex-col rounded-md">
                                    <Image src={horror} alt="horror" className="rounded-md h-60 object-cover"/>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-lg text-blue-400 font-bold mt-5">Greenhouse of Horror</p>
                                        <div className="flex items-center text-gray-500 gap-2">
                                            <RiAccountCircleFill size={25} />
                                            <p className="text-md text-gray-500">Game Profile</p>
                                        </div>

                                        <div className="flex items-center text-white gap-2">
                                            <FaSteam   size={22} />
                                            <p className="text-md text-white font-bold">5,000</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 bg-gray-800 flex flex-col rounded-md">
                                    <Image src={horror} alt="horror" className="rounded-md h-60 object-cover"/>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-lg text-blue-400 font-bold mt-5">Greenhouse of Horror</p>
                                        <div className="flex items-center text-gray-500 gap-2">
                                            <RiAccountCircleFill size={25} />
                                            <p className="text-md text-gray-500">Game Profile</p>
                                        </div>

                                        <div className="flex items-center text-white gap-2">
                                            <FaSteam   size={22} />
                                            <p className="text-md text-white font-bold">5,000</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-3 bg-gray-800 flex flex-col rounded-md">
                                    <Image src={horror} alt="horror" className="rounded-md h-60 object-cover"/>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-lg text-blue-400 font-bold mt-5">Greenhouse of Horror</p>
                                        <div className="flex items-center text-gray-500 gap-2">
                                            <RiAccountCircleFill size={25} />
                                            <p className="text-md text-gray-500">Game Profile</p>
                                        </div>

                                        <div className="flex items-center text-white gap-2">
                                            <FaSteam   size={22} />
                                            <p className="text-md text-white font-bold">5,000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}