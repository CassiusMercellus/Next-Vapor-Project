import PFP from "../pfp.png";
import Image from 'next/image'
import { MdKeyboardArrowDown } from "react-icons/md";
import Game from "../halo.png"
import ProfileSection from "../components/profileSection"
import GameCollector from "../components/gameCollector";
import RecentActivity from "../components/recentActivity"
import Friends from "../components/friends"
import { MdStars } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

export default function GameCard() {
    return (
        <div className="flex flex-col bg-gray-800 p-2 mb-6 w-full">
        <div className="flex flex-row bg-slate-900 justify-center py-6 px-4 mb-2">
            <div className="flex flex-row w-full">
                <Image
                    className=""
                    src={Game}
                    alt="Picture of the user"
                    width={180}
                    height={180}
                />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between mx-4 mb-2">
                        <p>Mass Effect: Legendary Edition</p>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt />
                                <p>Date</p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <FaClock />
                                <p>Time</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoIosMore size="25"/>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row items-center justify-between gap-2 mx-4 p-4 rounded-md bg-slate-950">
                        <MdStars />
                        <p>35/137</p>
                        <div className="w-72 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                            className="h-full bg-blue-300 rounded-full" 
                            style={{ width: '33%' }}
                            ></div>
                        </div>
                        <div className="flex gap-2">
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        </div>

                        
                        <div className="bg-gray-800 p-1 rounded-sm">
                            <p>+30</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-row bg-slate-900 justify-center py-6 px-4 mb-2">
            <div className="flex flex-row w-full">
                <Image
                    className=""
                    src={Game}
                    alt="Picture of the user"
                    width={180}
                    height={180}
                />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between mx-4 mb-2">
                        <p>Mass Effect: Legendary Edition</p>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt />
                                <p>Date</p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <FaClock />
                                <p>Time</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoIosMore size="25"/>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row items-center justify-between gap-2 mx-4 p-4 rounded-md bg-slate-950">
                        <MdStars />
                        <p>35/137</p>
                        <div className="w-72 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                            className="h-full bg-blue-300 rounded-full" 
                            style={{ width: '33%' }}
                            ></div>
                        </div>
                        <div className="flex gap-2">
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        </div>

                        
                        <div className="bg-gray-800 p-1 rounded-sm">
                            <p>+30</p>
                        </div>

                    </div>
                </div>
                
            </div>
            
        </div>
        <div className="flex flex-row bg-slate-900 justify-center py-6 px-4 mb-2">
            <div className="flex flex-row w-full">
                <Image
                    className=""
                    src={Game}
                    alt="Picture of the user"
                    width={180}
                    height={180}
                />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between mx-4 mb-2">
                        <p>Mass Effect: Legendary Edition</p>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt />
                                <p>Date</p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <FaClock />
                                <p>Time</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoIosMore size="25"/>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row items-center justify-between gap-2 mx-4 p-4 rounded-md bg-slate-950">
                        <MdStars />
                        <p>35/137</p>
                        <div className="w-72 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                            className="h-full bg-blue-300 rounded-full" 
                            style={{ width: '33%' }}
                            ></div>
                        </div>
                        <div className="flex gap-2">
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        </div>

                        
                        <div className="bg-gray-800 p-1 rounded-sm">
                            <p>+30</p>
                        </div>

                    </div>
                </div>
                
            </div>
            
        </div>
        <div className="flex flex-row bg-slate-900 justify-center py-6 px-4 mb-2">
            <div className="flex flex-row w-full">
                <Image
                    className=""
                    src={Game}
                    alt="Picture of the user"
                    width={180}
                    height={180}
                />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between mx-4 mb-2">
                        <p>Mass Effect: Legendary Edition</p>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt />
                                <p>Date</p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <FaClock />
                                <p>Time</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoIosMore size="25"/>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row items-center justify-between gap-2 mx-4 p-4 rounded-md bg-slate-950">
                        <MdStars />
                        <p>35/137</p>
                        <div className="w-72 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                            className="h-full bg-blue-300 rounded-full" 
                            style={{ width: '33%' }}
                            ></div>
                        </div>
                        <div className="flex gap-2">
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        </div>

                        
                        <div className="bg-gray-800 p-1 rounded-sm">
                            <p>+30</p>
                        </div>

                    </div>
                </div>
                
            </div>
            
        </div>
        <div className="flex flex-row bg-slate-900 justify-center py-6 px-4 mb-2">
            <div className="flex flex-row w-full">
                <Image
                    className=""
                    src={Game}
                    alt="Picture of the user"
                    width={180}
                    height={180}
                />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between mx-4 mb-2">
                        <p>Mass Effect: Legendary Edition</p>

                        <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt />
                                <p>Date</p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <FaClock />
                                <p>Time</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoIosMore size="25"/>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-row items-center justify-between gap-2 mx-4 p-4 rounded-md bg-slate-950">
                        <MdStars />
                        <p>35/137</p>
                        <div className="w-72 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                            className="h-full bg-blue-300 rounded-full" 
                            style={{ width: '33%' }}
                            ></div>
                        </div>
                        <div className="flex gap-2">
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        <Image
                            className="rounded-sm" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={32} 
                            height={32}  
                        />
                        </div>

                        
                        <div className="bg-gray-800 p-1 rounded-sm">
                            <p>+30</p>
                        </div>

                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    )
  }
  