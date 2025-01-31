import { FaTrash } from "react-icons/fa";
import eldencover from "../../../images/eldencover.jpg"
import Image from 'next/image'
import { FaWindows } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


export default function Cartgames() {
    return (
        <>
            <div className="bg-gray-950 flex justify-between p-5">
                <div className="flex flex-row gap-5 items-center">
                    <Image src={eldencover} alt={"elden"} className="rounded-md h-24 w-52"></Image>
                    <h1 className="text-lg font-bold">Elden Ring</h1>
                    <FaWindows size={25} className="text-gray-500" />
                </div>
                
                <div className="flex flex-row gap-10 justify-end items-center">
                    <p className="text-lg font-bold">$59.99</p>
                    <div className="bg-gray-900 p-2 rounded-sm">
                        <FaTrash className="text-gray-500" />
                    </div>
                    
                </div>

            </div>
        
        </>
    )
}