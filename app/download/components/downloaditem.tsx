import { IoIosSettings } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import eldenCover from '../../images/eldencover.jpg'
import Image from 'next/image'
import { HiOutlineBars2 } from "react-icons/hi2";
import { FaServer } from "react-icons/fa";


export default function Downloaditem() { 
    return (
        <>
            <div className="bg-slate-950 rounded-md flex flex-row justify-between p-2 px-5">
                <div className="flex gap-5">
                    <div className="flex items-center"><HiOutlineBars2 size={25} /></div>
                    <Image src={eldenCover} alt="downloadcover" className="w-72 h-32" />
                    <p className="text-xl font-bold">Elden Ring</p>
                </div>

                <div className="flex items-center gap-5">

                    <div className="flex flex-col px-5">
                        <p className="text-sm text-gray-500">CURRENT</p>
                        <p className="">12 MBps</p>
                    </div>
                    <div className="flex flex-col px-5">
                        <p className="text-sm text-gray-500">PEAK</p>
                        <p className="">48 MBps</p>
                    </div>
                    <div className="flex flex-col px-5">
                        <p className="text-sm text-gray-500">DISK</p>
                        <p className="">64 MBps</p>
                    </div>

                    <div className="flex flex-col px-5 w-80 gap-2">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center gap-2">
                                <p className="text-white">00:12</p>
                                <p className="text-sm text-gray-500">Remaining</p>
                            </div>

                            <div className="flex flex-row items-center gap-2">
                                <p className="text-sm text-gray-500">UPDATING 25%</p>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="bg-gray-800 w-80 h-2 rounded-md">
                                <div className="bg-sky-400 w-1/3 h-2 rounded-md"></div>
                            </div>
                        </div>

                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row items-center gap-2">
                                <MdDownload className=" text-gray-500" size={20} />
                                <p className="text-sm text-white">1.5 GB /</p>
                                <p className="text-sm text-gray-500">6 GB</p>
                            </div>

                            <div className="flex flex-row items-center gap-2">
                                <FaServer  className=" text-gray-500" size={15} />
                                <p className="text-sm text-white">3 GB /</p>
                                <p className="text-sm text-gray-500">12 GB</p>
                            </div>
                        </div>
                        

                    </div>


                    <div className="bg-gray-700 text-white px-10 py-4 rounded-sm flex flex-row items-center gap-2">
                        <FaPause size={25} />
                        <p className="text-lg">Pause</p>
                    </div>
                    <div className="border-2 border-gray-500 w-6 h-6 rounded-sm"></div>
                </div>
            </div>
        </>
    );
}