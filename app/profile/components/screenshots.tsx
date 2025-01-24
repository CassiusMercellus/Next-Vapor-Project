import { MdOutlineExpandMore } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Image from 'next/image';
import PNG from "../../images/space.jpg"
import { IoMdThumbsUp } from "react-icons/io";
import { BiSolidComment } from "react-icons/bi";

export default function Screenshots() {
    return (
      <>
        <div className="flex flex-col bg-gray-800 p-1">
            <div className="flex justify-between bg-slate-900 p-1 rounded-sm">
                <div className="flex flex-row gap-1">
                    <div className="flex p-3 px-8 items-center justify-center bg-gray-800 rounded-sm">
                        <p>Upload</p>
                    </div>
                    <div className="flex gap-1 p-3 px-8 items-center justify-center bg-gray-800 rounded-sm">
                        <p>Actions</p>
                        <MdOutlineExpandMore size={20} />
                    </div>
                </div>
                <div className="flex flex-row gap-3">
                    <div className="flex gap-1 p-3 items-center justify-center rounded-sm">
                        <p className="text-slate-500">Newest</p>
                        <MdOutlineExpandMore className="text-slate-500" size={20} />
                    </div>
                    <div className="flex gap-1 p-3 items-center justify-center rounded-sm">
                        <p className="text-slate-500">All Screenshots</p>
                        <MdOutlineExpandMore className="text-slate-500" size={20} />
                    </div>
                    <div className="flex gap-12 p-3 items-center justify-center rounded-sm bg-blue-950 text-blue-500">
                        <p className="">Search games...</p>
                        <FaSearch className="" size={15} />
                    </div>
                </div>
            </div>

            <div className="grid grid-rows-3 grid-cols-2 gap-4 bg-slate-800 mt-2">

                <div className="pt-2 px-2 bg-slate-900 rounded-sm">
                    <Image src={PNG} alt="screenshot" className="w-full object-contain" />
                    <div className="flex justify-between items-center bg-slate-900 py-2 w-full">
                        <p className="text-blue-400 py-2">me when uh space</p>
                        <div className="flex items-center gap-2">
                            <div className="flex bg-slate-950 px-2 rounded-md items-center gap-1">
                                <IoMdThumbsUp className="text-slate-400 text-xl" />
                                <p className="text-blue-400 py-2">5</p>
                            </div>
                            <div className="flex bg-slate-950 px-2 rounded-md items-center gap-1">
                                <BiSolidComment className="text-slate-400 text-xl" />
                                <p className="text-blue-400 py-2">2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-2 px-2 bg-slate-900 rounded-sm">
                    <Image src={PNG} alt="screenshot" className="w-full object-contain" />
                    <div className="flex justify-between items-center bg-slate-900 py-2 w-full">
                        <p className="text-blue-400 py-2">me when uh space</p>
                        <div className="flex items-center gap-2">
                            <div className="flex bg-slate-950 px-2 rounded-md items-center gap-1">
                                <IoMdThumbsUp className="text-slate-400 text-xl" />
                                <p className="text-blue-400 py-2">5</p>
                            </div>
                            <div className="flex bg-slate-950 px-2 rounded-md items-center gap-1">
                                <BiSolidComment className="text-slate-400 text-xl" />
                                <p className="text-blue-400 py-2">2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-2 px-2 bg-slate-900 rounded-sm">
                    <Image src={PNG} alt="screenshot" className="w-full object-contain" />
                    <div className="flex justify-between items-center bg-slate-900 py-2 w-full">
                        <p className="text-blue-400 py-2">me when uh space</p>
                        <div className="flex items-center gap-2">
                            <div className="flex bg-slate-950 px-2 rounded-md items-center gap-1">
                                <IoMdThumbsUp className="text-slate-400 text-xl" />
                                <p className="text-blue-400 py-2">5</p>
                            </div>
                            <div className="flex bg-slate-950 px-2 rounded-md items-center gap-1">
                                <BiSolidComment className="text-slate-400 text-xl" />
                                <p className="text-blue-400 py-2">2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-2 px-2 bg-slate-900 rounded-sm">
                    <Image src={PNG} alt="screenshot" className="w-full object-contain" />
                    <div className="flex justify-between items-center bg-slate-900 py-2 w-full">
                        <p className="text-blue-400 py-2">me when uh space</p>
                        <div className="flex items-center gap-2">
                            <div className="flex bg-slate-950 px-2 rounded-md items-center gap-1">
                                <IoMdThumbsUp className="text-slate-400 text-xl" />
                                <p className="text-blue-400 py-2">5</p>
                            </div>
                            <div className="flex bg-slate-950 px-2 rounded-md items-center gap-1">
                                <BiSolidComment className="text-slate-400 text-xl" />
                                <p className="text-blue-400 py-2">2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-2 px-2 bg-slate-900 rounded-sm">
                    <Image src={PNG} alt="screenshot" className="w-full object-contain" />
                    <div className="flex justify-between items-center bg-slate-900 py-2 w-full">
                        <p className="text-blue-400 py-2">me when uh space</p>
                        <div className="flex items-center gap-2">
                            <div className="flex bg-slate-950 px-2 rounded-md items-center gap-1">
                                <IoMdThumbsUp className="text-slate-400 text-xl" />
                                <p className="text-blue-400 py-2">5</p>
                            </div>
                            <div className="flex bg-slate-950 px-2 rounded-md items-center gap-1">
                                <BiSolidComment className="text-slate-400 text-xl" />
                                <p className="text-blue-400 py-2">2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-2 px-2 bg-slate-900 rounded-sm">
                    <Image src={PNG} alt="screenshot" className="w-full object-contain" />
                    <div className="flex justify-between items-center bg-slate-900 py-2 w-full">
                        <p className="text-blue-400 py-2">me when uh space</p>
                        <div className="flex items-center gap-2">
                            <div className="flex bg-slate-950 px-2 rounded-md items-center gap-1">
                                <IoMdThumbsUp className="text-slate-400 text-xl" />
                                <p className="text-blue-400 py-2">5</p>
                            </div>
                            <div className="flex bg-slate-950 px-2 rounded-md items-center gap-1">
                                <BiSolidComment className="text-slate-400 text-xl" />
                                <p className="text-blue-400 py-2">2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
  