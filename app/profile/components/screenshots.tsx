import { MdOutlineExpandMore } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import PNG from "../../space.jpg"



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
        </div>
      </>
    )
  }
  