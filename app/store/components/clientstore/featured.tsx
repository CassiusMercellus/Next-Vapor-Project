import Image from 'next/image'
import eldencover from '../../../eldencover.jpg'
import eldensteam from '../../../eldensteam.jpg'
import { FaWindows } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export default function Featured() {
    return (
        <>
            <div className="bg-gradient-to-b from-slate-950 to-slate-900 pt-20 pb-5 px-40">
                <h1 className="mb-8 font-bold">FEATURED</h1>
                <div className="flex justify-center flex-row items-center bg-gradient-to-b from-slate-950 to-gray-900 p-2 rounded-md">
                    <div className="flex px-3">
                        <MdArrowBackIos size={25} />
                    </div>
                    <div className="bg-gray-950 rounded-md">
                    <div className="flex justify-between p-4 gap-4">
                        <div className="flex flex-col items-center w-3/5">
                            <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md"></Image>
                        </div>
                        <div className="flex flex-col w-2/5">
                            <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                            <p className="text-white">THE NEW FANTASY ACTION RPG. Rise, Tarnished. and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
                                <Image src={eldensteam} alt={"elden"} className=""></Image>
                                <Image src={eldensteam} alt={"elden"} className=""></Image>
                                <Image src={eldensteam} alt={"elden"} className=""></Image>
                                <Image src={eldensteam} alt={"elden"} className=""></Image>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-row gap-1 ">
                                    <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">Souls-like</p>
                                    <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">RPG</p>
                                    <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">Dark Fantasy</p>
                                    <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">Open-world</p>
                                    <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md"><IoIosAdd size={20}/></p>
                                </div>
                                <div className="text-gray-400 flex justify-center items-center">
                                    <FaWindows size={25}/>
                                </div>
                            </div>
                            <div className="flex justify-between mt-4 text-lg">
                                <div className="flex gap-2 flex-row text-white bg-gray-800 px-6 py-3 rounded-md items-center justify-center">
                                    <p>Wishlist</p>
                                    <FaRegHeart />
                                </div>
                                <div className="flex flex-row gap-4">
                                    <div className="flex justify-center items-center">
                                        <p className="text-white">$59.99</p>
                                    </div>
                                    <div className="bg-blue-600 rounded-md flex justify-center items-center text-white px-6 py-3">
                                        <p>Buy Now</p>
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
                    <div className="bg-slate-950 w-8 h-2 rounded-lg"></div>
                    <div className="bg-slate-950 w-8 h-2 rounded-lg"></div>
                </div>
            </div>
        </>
    )
}