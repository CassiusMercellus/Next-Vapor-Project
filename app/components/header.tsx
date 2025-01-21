import Link from 'next/link'
import { FaSearch } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

export default function Header() {
    return (
        <nav>
            <div className="flex flex-row w-full justify-between bg-slate-700 items-center h-12">
                <div className="flex flex-row items-center bg-slate-700 w-full ml-6">
                    <Link href="/" className="mx-1 px-3 my-1 py-1 rounded-sm text-sm hover:bg-slate-600">Home</Link>
                    <Link href="/" className="mx-1 px-3 my-1 py-1 rounded-sm text-sm hover:bg-slate-600">Browse</Link>
                    <Link href="/" className="mx-1 px-3 my-1 py-1 rounded-sm text-sm hover:bg-slate-600">Discover</Link>
                    <Link href="/" className="mx-1 px-3 my-1 py-1 rounded-sm text-sm hover:bg-slate-600">Points Shop</Link>
                    <Link href="/" className="mx-1 px-3 my-1 py-1 rounded-sm text-sm hover:bg-slate-600">Curators</Link>
                    <Link href="/" className="mx-1 px-3 my-1 py-1 rounded-sm text-sm hover:bg-slate-600">Gift Cards</Link>
                    <Link href="/" className="mx-1 px-3 my-1 py-1 rounded-sm text-sm hover:bg-slate-600">News</Link>
                </div>
                <div className="flex flex-row bg-slate-800 items-center rounded-md pr-3 h-10">
                    <input type="search" placeholder="Search..." className="px-4 w-72 bg-slate-800 rounded-md text-slate-300 border-hidden outline-none"/>
                    <FaSearch size={14} className="text-slate-500" />
                </div>
                
                <div className="flex flex-row px-4 items-center bg-slate-700">
                    <Link href="/" className="mx-4 text-slate-400">Wishlist</Link>
                    <Link href="/" className="mx-4 text-slate-400">Cart</Link>
                    <Link href="/" className="flex px-2 p-1 m-1 items-center rounded-lg bg-slate-800 hover:bg-slate-600"><IoMdSettings size={20} className="text-slate-500" /></Link>
                </div>
                
                
            </div>
          
        </nav>
    )
}