import Image from 'next/image'
import eldencover from '../../../eldencover.jpg'
import eldensteam from '../../../eldensteam.jpg'
import { FaWindows } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export default function Updated() {
    return (
        <>
            <div className="bg-slate-900 pt-20 pb-5 px-40">
                <div className="flex justify-between">
                    <h1 className="mb-6 font-bold">Recently updated</h1>
                    <div className="mb-6 border border-gray-500 rounded-md text-sm">
                        <p className="text-gray-500 p-2 px-4">See more</p>
                    </div>
                </div>
                
                <div className="flex justify-center flex-row items-center bg-gray-900 p-2 rounded-md">
                    <div className="flex px-3">
                        <MdArrowBackIos size={25} />
                    </div>

                    <div className="flex flex-row gap-4">
                        <div className="bg-gray-950 rounded-md w-1/4">
                            <div className="flex flex-col justify-between p-4 gap-4">
                                <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md"></Image>
                                <div className="flex flex-col">
                                    <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                                    <div className="text-gray-400 flex justify-center items-center">
                                            <p>Conquer Tamriel's Fears and Earn Special Rewards during the Witches Festival Event...</p>
                                        </div>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        
                                        
                                        <div className="flex justify-evenly items-center w-full gap-2"> 
                                            <p className="rounded-md flex justify-center items-center text-gray-200 border border-gray-700 p-2">In Library</p>
                                            <p className="bg-gray-800 rounded-md flex justify-center items-center text-gray-200 p-2">View Updates</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-950 rounded-md w-1/4">
                            <div className="flex flex-col justify-between p-4 gap-4">
                                <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md"></Image>
                                <div className="flex flex-col">
                                    <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                                    <div className="text-gray-400 flex justify-center items-center">
                                            <p>Conquer Tamriel's Fears and Earn Special Rewards during the Witches Festival Event...</p>
                                        </div>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        
                                        
                                        <div className="flex justify-evenly items-center w-full gap-2"> 
                                            <p className="rounded-md flex justify-center items-center text-gray-200 border border-gray-700 p-2">In Library</p>
                                            <p className="bg-gray-800 rounded-md flex justify-center items-center text-gray-200 p-2">View Updates</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-950 rounded-md w-1/4">
                            <div className="flex flex-col justify-between p-4 gap-4">
                                <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md"></Image>
                                <div className="flex flex-col">
                                    <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                                    <div className="text-gray-400 flex justify-center items-center">
                                            <p>Conquer Tamriel's Fears and Earn Special Rewards during the Witches Festival Event...</p>
                                        </div>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        
                                        
                                        <div className="flex justify-evenly items-center w-full gap-2"> 
                                            <p className="rounded-md flex justify-center items-center text-gray-200 border border-gray-700 p-2">In Library</p>
                                            <p className="bg-gray-800 rounded-md flex justify-center items-center text-gray-200 p-2">View Updates</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-950 rounded-md w-1/4">
                            <div className="flex flex-col justify-between p-4 gap-4">
                                <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md"></Image>
                                <div className="flex flex-col">
                                    <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                                    <div className="text-gray-400 flex justify-center items-center">
                                            <p>Conquer Tamriel's Fears and Earn Special Rewards during the Witches Festival Event...</p>
                                        </div>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        
                                        
                                        <div className="flex justify-evenly items-center w-full gap-2"> 
                                            <p className="rounded-md flex justify-center items-center text-gray-200 border border-gray-700 p-2">In Library</p>
                                            <p className="bg-gray-800 rounded-md flex justify-center items-center text-gray-200 p-2">View Updates</p>
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