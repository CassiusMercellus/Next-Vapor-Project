import Image from 'next/image'
import eldensteam from "../../../../images/eldensteam.jpg";
import eldencover from "../../../../images/eldencover.jpg";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaWindows } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

export default function Games() {
    return (
        <>
            <div className="flex justify-between bg-gray-950 p-4 rounded-md gap-5">

                <div className="flex w-1/4">
                    <Image src={eldencover} alt={'eldencover'} className="rounded-sm" ></Image>
                </div>

                <div className="flex flex-row w-3/4 justify-between">
                    <div className="flex flex-col justify-between">
                        <p className="text-xl font-bold text-white">Elden Ring</p>
                        <div className="flex justify-between">
                            <div className="flex flex-row gap-1 ">
                                <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">Souls-like</p>
                                <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">RPG</p>
                                <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">Dark Fantasy</p>
                                <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">Open-world</p>
                                <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md"><IoIosAdd size={20}/></p>
                            </div>
                        </div> 
                        <div className="flex my-3 items-center">
                            <div className="text-gray-400 flex justify-center items-center">
                                <FaWindows size={25}/>
                            </div>

                            <div className="text-gray-700 text-sm px-4">
                                <p>Nov 10, 2020</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5">
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
                    
                    <div className="flex flex-col justify-between items-end">
                        <div className="flex text-white bg-gray-800 p-3 rounded-md items-center justify-center w-12">
                            <FaRegHeart />
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <div className="text-gray-700 text-sm px-4">
                                <p>Until Nov 2</p>
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">-60%</p>
                                <div className="flex flex-col">
                                    <p className="rounded-md flex justify-center items-center text-gray-600 pr-4 pl-2 font-bold line-through">$59.99</p>
                                    <p className="text-lime-400 rounded-md flex justify-center items-center pr-4 pl-2 font-bold">$6.78</p>
                                </div>
                            </div>
                            <div className="bg-blue-500 text-white px-4 py-2 rounded-md">Add to Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}