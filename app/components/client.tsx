import Link from 'next/link'
import Image from 'next/image'
import { IoGameController  } from "react-icons/io5";
import { IoIosNotifications  } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaUserFriends, FaAngleDown } from "react-icons/fa";
import PFP from "../images/pfp.png";


export default function Client() {
    return (
        <nav className="flex flex-row bg-slate-900 w-full">
            <div className="flex flex-row justify-evenly w-full">
                <Link href="/" className="flex px-2 py-4 mx-4 items-center rounded-lg">
                    <IoGameController size={25}/>
                    <p className="mx-2 font-bold">Vapor</p>
                </Link>
                
                <Link href="/store" className="px-2 py-4 font-bold rounded-lg hover:text-blue-400">Store</Link>
                <Link href="/" className="px-2 py-4 font-bold rounded-lg hover:text-blue-400">Community</Link>
                <Link href="/profile" className="px-2 py-4 font-bold rounded-lg hover:text-blue-400">LoginName</Link>
                <Link href="/library" className="px-2 py-4 font-bold rounded-lg hover:text-blue-400">Library</Link>
                <Link href="/download" className="px-2 py-4 font-bold rounded-lg hover:text-blue-400">Downloads</Link>
                
                <div className="flex flex-row">
                    <Link href="/" className="flex px-4 py-1 my-2 mx-1 items-center rounded-md bg-slate-800 hover:bg-slate-700"><FaUserFriends size={20}/></Link>
                    <Link href="/" className="flex px-4 py-1 my-2 mx-1  items-center rounded-md bg-slate-800 hover:bg-slate-700"><IoIosNotifications size={22}/></Link>
                    <div className="flex flex-row px-1 py-1 my-2 mx-1 rounded-md bg-slate-800 hover:bg-slate-700 items-center h-10">
                        <Image
                            className="rounded-lg m-1" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={35} 
                            height={35}  
                        />
                        <p className="flex items-center mx-2">LoginName</p>
                        <p className="flex items-center mx-2 text-gray-500">$0.00</p>
                        <FaAngleDown size={40}  className="h-5"/>
                    </div>
                </div>
                <div className="flex flex-row">
                    <Link href="/" className="px-2 py-4 mx-2 font-thin rounded-lg">Help</Link>
                    <Link href="/" className="px-2 py-4 mx-2 font-thin rounded-lg">View</Link>
                </div>
            </div>
        </nav>
    )
}