import Image from 'next/image'
import eldencover from '../../../images/eldencover.jpg'
import eldensteam from '../../../images/eldensteam.jpg'
import { FaWindows } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export default function Topsellers() {
    return (
        <>
            <div className="bg-slate-900 pt-20 pb-5 px-40">
                <div className="flex justify-between">
                    <h1 className="mb-6 font-bold">Top Sellers</h1>
                    <div className="mb-6 border border-gray-500 rounded-md text-sm">
                        <p className="text-gray-500 p-2 px-4">See more</p>
                    </div>
                </div>
                
                <div className="flex justify-center flex-row items-center bg-gray-900 p-2 rounded-md">
                    <div className="flex px-3">
                        <MdArrowBackIos size={25} />
                    </div>

                    <div className="grid grid-rows-3 grid-cols-2 gap-4">
                        <div className="bg-gray-950 rounded-md w-full">
                            <div className="flex flex-row justify-between p-4 gap-4">
                                <div className="w-1/3">
                                    <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md"></Image>
                                </div>
                                
                                <div className="flex flex-col w-2/3">
                                    <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        <div className="text-gray-400 flex justify-center items-center">
                                            <FaWindows size={25}/>
                                        </div>
                                    
                                        <div className="flex flex-row gap-4">
                                            <div className="flex justify-center items-center">
                                                <div className="flex flex-col">
                                                    <p className="rounded-md flex justify-center items-center text-white mr-3 ml-2 font-bold">$59.99</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 flex-row text-white bg-gray-800 p-3 rounded-md items-center justify-center">
                                            <FaRegHeart />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-950 rounded-md w-full">
                            <div className="flex flex-row justify-between p-4 gap-4">
                                <div className="w-1/3">
                                    <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md"></Image>
                                </div>
                                
                                <div className="flex flex-col w-2/3">
                                    <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        <div className="text-gray-400 flex justify-center items-center">
                                            <FaWindows size={25}/>
                                        </div>
                                    
                                        <div className="flex flex-row gap-4">
                                            <div className="flex justify-center items-center">
                                                <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">-60%</p>
                                                <div className="flex flex-col">
                                                    <p className="rounded-md flex justify-center items-center text-gray-600 mr-3 ml-2 font-bold line-through">$59.99</p>
                                                    <p className="text-lime-400 rounded-md flex justify-center items-center mr-3 ml-2 font-bold">$6.78</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 flex-row text-white bg-gray-800 p-3 rounded-md items-center justify-center">
                                            <FaRegHeart />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-950 rounded-md w-full">
                            <div className="flex flex-row justify-between p-4 gap-4">
                                <div className="w-1/3">
                                    <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md"></Image>
                                </div>
                                
                                <div className="flex flex-col w-2/3">
                                    <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        <div className="text-gray-400 flex justify-center items-center">
                                            <FaWindows size={25}/>
                                        </div>
                                    
                                        <div className="flex flex-row gap-4">
                                            <div className="flex justify-center items-center">
                                                <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">-60%</p>
                                                <div className="flex flex-col">
                                                    <p className="rounded-md flex justify-center items-center text-gray-600 mr-3 ml-2 font-bold line-through">$59.99</p>
                                                    <p className="text-lime-400 rounded-md flex justify-center items-center mr-3 ml-2 font-bold">$6.78</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 flex-row text-white bg-gray-800 p-3 rounded-md items-center justify-center">
                                            <FaRegHeart />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-950 rounded-md w-full">
                            <div className="flex flex-row justify-between p-4 gap-4">
                                <div className="w-1/3">
                                    <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md"></Image>
                                </div>
                                
                                <div className="flex flex-col w-2/3">
                                    <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        <div className="text-gray-400 flex justify-center items-center">
                                            <FaWindows size={25}/>
                                        </div>
                                    
                                        <div className="flex flex-row gap-4">
                                            <div className="flex justify-center items-center">
                                                <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">-60%</p>
                                                <div className="flex flex-col">
                                                    <p className="rounded-md flex justify-center items-center text-gray-600 mr-3 ml-2 font-bold line-through">$59.99</p>
                                                    <p className="text-lime-400 rounded-md flex justify-center items-center mr-3 ml-2 font-bold">$6.78</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 flex-row text-white bg-gray-800 p-3 rounded-md items-center justify-center">
                                            <FaRegHeart />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-950 rounded-md w-full">
                            <div className="flex flex-row justify-between p-4 gap-4">
                                <div className="w-1/3">
                                    <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md"></Image>
                                </div>
                                
                                <div className="flex flex-col w-2/3">
                                    <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        <div className="text-gray-400 flex justify-center items-center">
                                            <FaWindows size={25}/>
                                        </div>
                                    
                                        <div className="flex flex-row gap-4">
                                            <div className="flex justify-center items-center">
                                                <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">-60%</p>
                                                <div className="flex flex-col">
                                                    <p className="rounded-md flex justify-center items-center text-gray-600 mr-3 ml-2 font-bold line-through">$59.99</p>
                                                    <p className="text-lime-400 rounded-md flex justify-center items-center mr-3 ml-2 font-bold">$6.78</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 flex-row text-white bg-gray-800 p-3 rounded-md items-center justify-center">
                                            <FaRegHeart />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-950 rounded-md w-full">
                            <div className="flex flex-row justify-between p-4 gap-4">
                                <div className="w-1/3">
                                    <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md"></Image>
                                </div>
                                
                                <div className="flex flex-col w-2/3">
                                    <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        <div className="text-gray-400 flex justify-center items-center">
                                            <FaWindows size={25}/>
                                        </div>
                                    
                                        <div className="flex flex-row gap-4">
                                            <div className="flex justify-center items-center">
                                                <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">-60%</p>
                                                <div className="flex flex-col">
                                                    <p className="rounded-md flex justify-center items-center text-gray-600 mr-3 ml-2 font-bold line-through">$59.99</p>
                                                    <p className="text-lime-400 rounded-md flex justify-center items-center mr-3 ml-2 font-bold">$6.78</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 flex-row text-white bg-gray-800 p-3 rounded-md items-center justify-center">
                                            <FaRegHeart />
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