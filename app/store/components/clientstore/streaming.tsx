import Image from 'next/image'
import eldencover from '../../../eldencover.jpg'
import eldensteam from '../../../eldensteam.jpg'
import { FaWindows } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export default function Streaming() {
    return (
        <>
            <div className="bg-slate-900 pt-20 pb-5 px-40">
                <div className="flex justify-between">
                    <h1 className="mb-6 font-bold">Games Streaming Now</h1>
                    <div className="mb-6 border border-gray-500 rounded-md text-sm">
                        <p className="text-gray-500 p-2 px-4">See more</p>
                    </div>
                </div>
                
                <div className="flex justify-center flex-row items-center bg-gray-900 p-2 rounded-md">
                    <div className="flex px-3">
                        <MdArrowBackIos size={25} />
                    </div>

                    <div className="flex flex-row gap-4">
                        <div className="bg-gray-950 rounded-md w-1/3">
                            <div className="flex flex-col justify-between p-4 gap-4 relative">
                                <div className="relative w-full h-full">
                                    <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md" />

                                    <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-md flex items-center gap-2">
                                        <FaCircle />
                                        LIVE
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-gray-800 bg-opacity-50 rounded-full p-4">
                                            <FaPlay />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        <div className="text-blue-400 flex justify-center items-center gap-2">
                                            <FaEye />
                                            <p>20k</p>
                                        </div>

                                        <div className="flex flex-row gap-4">
                                            <div className="flex gap-2 flex-row text-white bg-gray-800 px-6 py-2 rounded-md items-center justify-center">
                                                <p>Store Page</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-950 rounded-md w-1/3">
                            <div className="flex flex-col justify-between p-4 gap-4 relative">
                                <div className="relative w-full h-full">
                                    <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md" />

                                    <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-md flex items-center gap-2">
                                        <FaCircle />
                                        LIVE
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-gray-800 bg-opacity-50 rounded-full p-4">
                                            <FaPlay />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        <div className="text-blue-400 flex justify-center items-center gap-2">
                                            <FaEye />
                                            <p>20k</p>
                                        </div>

                                        <div className="flex flex-row gap-4">
                                            <div className="flex gap-2 flex-row text-white bg-gray-800 px-6 py-2 rounded-md items-center justify-center">
                                                <p>Store Page</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    <div className="bg-gray-950 rounded-md w-1/3">
                            <div className="flex flex-col justify-between p-4 gap-4 relative">
                                <div className="relative w-full h-full">
                                    <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md" />

                                    <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-md flex items-center gap-2">
                                        <FaCircle />
                                        LIVE
                                    </div>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-gray-800 bg-opacity-50 rounded-full p-4">
                                            <FaPlay />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        <div className="text-blue-400 flex justify-center items-center gap-2">
                                            <FaEye />
                                            <p>20k</p>
                                        </div>

                                        <div className="flex flex-row gap-4">
                                            <div className="flex gap-2 flex-row text-white bg-gray-800 px-6 py-2 rounded-md items-center justify-center">
                                                <p>Store Page</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                <div className="flex px-3">
                        <MdArrowForwardIos size={25} />
                    </div>
                </div>
                
            </div>
            <div className="py-2 pb-20 bg-slate-900">
                <div className="flex justify-center gap-2">
                    <div className="bg-blue-600 w-8 h-2 rounded-lg"></div>
                    <div className="bg-slate-950 w-8 h-2 rounded-lg"></div>
                    <div className="bg-slate-950 w-8 h-2 rounded-lg"></div>
                    <div className="bg-slate-950 w-8 h-2 rounded-lg"></div>
                    
                </div>
            </div>
        </>
    )
}