import Image from 'next/image'
import { FaRegHeart } from "react-icons/fa";

export default function Store() {
    return (
        <>
            <div className="px-48 bg-gradient-to-b from-slate-950 to-slate-900 py-8">
                <div className="flex justify-between bg-gray-900 pl-4 p-2 rounded-md items-center">
                    <h2 className="text-xl font-bold">Elden Ring</h2>
                    <div className="flex flex-row gap-2">
                        <p className="border border-gray-600 flex items-center p-3 px-4 rounded-md text-gray-500">Ignore</p>
                        <p className="border border-gray-600 flex items-center p-3 px-4 rounded-md text-gray-500">Follow</p>
                        <div className="flex flex-row items-center gap-2 p-3 bg-gray-800 rounded-md">
                            <p>Wishlist</p>
                            <FaRegHeart />
                        </div>
                        <p className="flex flex-row items-center gap-2 p-3 bg-gray-800 rounded-md">Browse All DLCs</p>
                        <p className="flex flex-row items-center gap-2 p-3 bg-gray-800 rounded-md">Community Hub</p>
                    </div>
                </div>

            </div>
        </>
    )
}