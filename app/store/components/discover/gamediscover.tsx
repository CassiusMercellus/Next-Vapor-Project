import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";
import eldencover from '../../../images/eldencover.jpg'
import eldensteam from '../../../images/eldensteam.jpg'
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { FaWindows } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export default function Gamediscover() {
    return (
        <>
            <div className="flex justify-between bg-gray-950 p-4 rounded-md gap-2">

                <div className="flex w-1/2 gap-2">
                    <Image src={eldencover} alt={'eldencover'} className="rounded-sm w-3/4" ></Image>
                    <div className="flex flex-col w-1/4 gap-2 justify-between">
                        <Image src={eldencover} alt={'eldencover'} className="rounded-sm" ></Image>
                        <Image src={eldencover} alt={'eldencover'} className="rounded-sm" ></Image>
                        <Image src={eldencover} alt={'eldencover'} className="rounded-sm" ></Image>
                    </div>
                </div>

                <div className="flex flex-row w-1/2 justify-between">
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-white">Elden Ring</p>
                            <p className="text-md text-gray-500">Since you played <span className="text-white">Dark Souls III</span></p>
                            <div className="flex justify-between">
                            <div className="flex flex-row gap-1 mt-5">
                                <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">Souls-like</p>
                                <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">RPG</p>
                                <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">Dark Fantasy</p>
                                <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">Open-world</p>
                                <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md"><IoIosAdd size={20}/></p>
                            </div>
                        </div> 
                        <div className="flex my-10 items-center">
                            <div className="text-gray-400 flex justify-center items-center gap-2">
                                <FaWindows size={25}/>
                                <FaApple size={25}/>
                                <FaSteam size={25}/>
                            </div>

                            <div className="text-gray-500 text-sm px-4">
                                <p>Aug 21, 2021</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5 my-5">
                            <div className="flex flex-col w-2/5 items-center">
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
                        </div>
                        <div className="border w-1/2 flex items-center justify-center rounded-md border-gray-700 p-2 text-gray-200">Find more like this</div>
                        
                    </div>
                    
                    <div className="flex flex-col justify-between items-end">
                        <div className="flex flex-row gap-2">
                            <div className="border flex items-center justify-center rounded-md border-gray-700 p-2 px-4 text-gray-200">Ignore</div>
                            <div className="border flex items-center justify-center rounded-md border-gray-900 p-2 px-4 text-gray-200 bg-gray-900">Wishlist</div>
                        </div>
                        
                        <div className="flex flex-row gap-4 items-center">
                            <div className="text-gray-700 text-sm px-4">
                                <p>Until Nov 2</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">-30%</p>
                                <div className="flex flex-col">
                                    <p className="rounded-md flex justify-center items-center text-gray-600 pr-4 pl-2 font-bold line-through">$59.99</p>
                                    <p className="text-white rounded-md flex justify-center items-center pr-4 pl-2 font-bold">$41.99</p>
                                </div>
                            </div>
                            <div className="bg-gray-900 text-white px-4 py-2 rounded-md">Visit Store Page</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }