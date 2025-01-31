import Image from 'next/image'
import { FaWindows } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import eldencover from '../../../images/eldencover.jpg'

export default function Cartdlc() {
    return (
        <>
            <div className="bg-gray-950 rounded-md">
                <div className="flex flex-col justify-between p-4 gap-4">
                    <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md"></Image>
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-3xl text-white font-bold">Elden Ring</h2>
                            <div className="flex gap-2 flex-row text-white bg-gray-800 p-3 rounded-md items-center justify-center">
                                <FaRegHeart />
                            </div>
                        </div>
                        
                        <div className="flex justify-between mt-4 text-lg items-center">
                            <div className="text-gray-400 flex justify-center items-center">
                                <FaWindows size={25}/>
                            </div>
                        
                            <div className="flex flex-row gap-4">
                                <div className="flex justify-center items-center">
                                    <p className="rounded-md flex justify-center items-center text-white px-4 py-2 font-bold">$59.99</p>
                                    <div className="rounded-md flex justify-center items-center text-white px-4 py-2 bg-sky-600">Add to Cart</div>
                                </div>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}