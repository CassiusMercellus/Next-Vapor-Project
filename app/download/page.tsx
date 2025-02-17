import { IoIosSettings } from "react-icons/io";
import { MdDownload } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import Downloaditem from './components/downloaditem'
import Header from '../components/header'
import Client from '../components/client'

export default function Download() { 
    return (
        <>

            <div className="flex flex-col h-screen">
                <Client />
            
                <div className="flex flex-col p-5 bg-slate-800 h-full">
                    <div className="flex flex-row justify-between">
                        <div className="flex gap-3 items-center">
                            <p className="text-xl font-bold">Download Manager</p>
                            <div className="flex items-center justify-center bg-gray-700 text-gray-400 rounded-md p-2">
                                <IoIosSettings size={25} />
                            </div>
                        </div>

                        <div className="flex flex-row gap-3 p-5 items-center">
                            <div className="bg-sky-400 text-black px-3 py-2 rounded-md flex flex-row items-center gap-2">
                                <MdDownload size={25} />
                                <p className="text-lg">Download Selected</p>
                            </div>

                            <div className="bg-gray-700 text-white px-3 py-2 rounded-md flex flex-row items-center gap-2">
                                <FaPause size={25} />
                                <p className="text-lg">Download Selected</p>
                            </div>

                            <div className="bg-gray-700 text-white px-3 py-2 rounded-md flex flex-row items-center gap-2">
                                <FaTrash size={20} />
                                <p className="text-lg">Clear Completed</p>
                            </div>

                            <div className="border-2 border-gray-500 w-6 h-6 rounded-sm"></div>

                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <Downloaditem />
                        <Downloaditem />
                        <Downloaditem />
                        <Downloaditem />
                        <Downloaditem />
                    </div>
                </div>
            </div>
        </>
    );
}