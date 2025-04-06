import Link from 'next/link'
import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaFilter } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { FaRegCirclePlay } from "react-icons/fa6";
import { AiFillLayout } from "react-icons/ai";
import { RiLayout2Fill } from "react-icons/ri";
import { RiLayout3Fill } from "react-icons/ri";



export default function Libraryheader() {
    return (
        <nav>
            <div className="flex flex-row w-full justify-between bg-slate-700 items-center h-12">
                <div className="flex flex-row items-center bg-slate-700 w-1/4 ml-6">
                    <Link href="/" className="mx-1 px-3 my-1 py-1 rounded-sm text-sm hover:bg-slate-600">Home</Link>
                    <Link href="/library" className="mx-1 px-3 my-1 py-1 rounded-sm text-sm hover:bg-slate-600">Collections</Link>
                    <Link href="/library" className="mx-1 px-3 my-1 py-1 rounded-sm text-sm hover:bg-slate-600">News and Updates</Link>
                </div>
                <div className="flex flex-row w-1/4 gap-2">

                    <div className="flex flex-row bg-slate-800 items-center rounded-md pr-3 h-10">
                        <input type="search" placeholder="Search..." className="px-4 w-72 bg-slate-800 rounded-md text-slate-300 border-hidden outline-none"/>
                        <FaSearch size={14} className="text-slate-500" />
                    </div>
                    <Link href="/library" className="flex justify-center h-10 w-10 px-2 items-center rounded-lg bg-gray-800 hover:bg-slate-600"><FaFilter  size={20} className="text-slate-500" /></Link>
                    <Link href="/library" className="flex justify-center h-10 w-10 px-2 items-center rounded-lg bg-gray-800 hover:bg-slate-600"><FaRegClock  size={20} className="text-slate-500" /></Link>
                    <Link href="/library" className="flex justify-center h-10 w-10 px-2 items-center rounded-lg bg-gray-800 hover:bg-slate-600"><FaRegCirclePlay  size={20} className="text-slate-500" /></Link>
                    
                </div>

                <div className="flex items-center gap-2 h-10">
                    <p className="text-sm">View</p>
                    <div className="flex justify-center h-10 w-10 items-center rounded-lg bg-gray-800 hover:bg-slate-600"><AiFillLayout size={20} className="text-white" /></div>
                    <div className="flex justify-center h-10 w-10 items-center rounded-lg bg-gray-800 hover:bg-slate-600"><RiLayout2Fill size={20} className="text-slate-500" /></div>
                    <div className="flex justify-center h-10 w-10 items-center rounded-lg bg-gray-800 hover:bg-slate-600"><RiLayout3Fill size={20} className="text-slate-500" /></div>
                </div>
                
                
                <div className="flex flex-row px-4 items-center bg-slate-700 w-1/4">
                    <Link href="/library" className="mx-4 text-slate-400">Activate a Product</Link>
                    <Link href="/library" className="mx-4 text-slate-400">Add a non-Steam Game</Link>
                </div>
                
                
            </div>
          
        </nav>
    )
}