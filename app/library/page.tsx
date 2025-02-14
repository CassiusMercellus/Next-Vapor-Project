import Libraryheader from "../components/libraryheader"
import Image from 'next/image'
import eldencover from '../images/eldencover.jpg'
import eldensteam from '../images/eldensteam.jpg'
import { FaPlay } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";
import Librarygamelist from './components/librarygamelist'
import Friends from '../images/pfp.png'
import eldenCover from '../images/eldencover.jpg'
import { FaTools } from "react-icons/fa";


export default function Library() {
  return (
    <>
      <Libraryheader></Libraryheader>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/5 bg-gray-800">
          <Librarygamelist />
        </div>
        <div className="flex w-4/5 bg-slate-800">
          <div className="flex flex-col">
            <Image src={eldensteam} alt="eldensteam" className="w-full"></Image>
            
            
            <div className="flex flex-col p-5">
              <div className="flex justify-between mb-5">
                <div className="flex flex-row gap-8 items-center">
                  <div className="text-2xl font-bold">Elden Ring</div>
                  <div className="flex p-2 px-4 bg-lime-400 rounded-md">
                    <p className="text-black font-bold flex flex-row items-center gap-2">
                      <FaPlay size={15} /> 
                      <p className="text-black text-lg font-bold">Play</p>
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FaCalendarAlt className="text-gray-500" size={20} />
                    <div className="flex flex-col">
                      <p className="text-gray-500 text-sm">LAST PLAYED</p>
                      <p className="text-white text-sm">21 Aug 2022</p>
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <FaClock className="text-gray-500" size={20} />
                    <div className="flex flex-col">
                      <p className="text-gray-500 text-sm">PLAY TIME</p>
                      <p className="text-white text-sm">92 hours</p>
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <FaCloud className="text-gray-500" size={25} />
                    <div className="flex flex-col">
                      <p className="text-gray-500 text-sm">CLOUD STATUS</p>
                      <p className="text-white text-sm">Up to date</p>
                    </div>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <MdStars className="text-gray-500" size={25} />
                    <div className="flex flex-col">
                      <p className="text-gray-500 text-sm">ACHIEVEMENTS</p>
                      <div className="flex items-center gap-2">
                        <p className="text-white text-sm">20/65</p>
                        <div className="flex">
                          <div className="bg-sky-500 h-1 w-10 rounded-l-full"></div>
                          <div className="bg-gray-900 h-1 w-10 rounded-r-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



                <div className="flex flex-row items-center text-gray-500 gap-5 pr-5">
                  <div className="p-1">
                    <IoLogoGameControllerB size={25} />
                  </div>
                  <div className="p-1">
                    <HiUsers size={25} />
                  </div>
                  <div className="bg-gray-600 p-1 rounded-md">
                    <FaRegStar size={25} />
                  </div>
                  <div className="bg-gray-600 p-1 rounded-md">
                    <IoIosSettings size={25} />
                  </div>
                  <div className="bg-gray-600 p-1 rounded-md">
                    <FaInfoCircle size={25} />
                  </div>
                </div>
              </div>

              <div className="flex bg-gray-800 gap-10 p-5 mb-8 rounded-md">
                <p className="text-gray-500">Store Page</p>
                <p className="text-gray-500">DLCs</p>
                <p className="text-gray-500">Community</p>
                <p className="text-gray-500">Discussions</p>
                <p className="text-gray-500">Workshop</p>
                <p className="text-gray-500">Guides</p>
                <p className="text-gray-500">Support</p>
              </div>

              <div className="flex flex-row gap-8">
                <div className="flex flex-col w-2/3 gap-5">

                  <div className="flex flex-col bg-gray-800 p-5 gap-5 rounded-md">
                    <p>Friends who play this game</p>
                    <div className="flex flex-row gap-3">
                      <Image src={Friends} alt="friends" className="w-14 h-14 rounded-md" />
                      <Image src={Friends} alt="friends" className="w-14 h-14 rounded-md" />
                      <Image src={Friends} alt="friends" className="w-14 h-14 rounded-md" />
                    </div>
                  </div>

                  <div className="flex flex-col bg-gray-800 p-5 gap-5 rounded-md">
                    
                    <div className="flex jsutify-between gap-10">
                      <div className="flex flex-col gap-3">
                        <p>Achievements</p>
                        <div className="flex flex-row gap-3 items-center">
                          <Image src={Friends} alt="friends" className="w-14 h-14 rounded-md" />
                          <Image src={Friends} alt="friends" className="w-14 h-14 rounded-md" />
                          <Image src={Friends} alt="friends" className="w-14 h-14 rounded-md" />
                          <Image src={Friends} alt="friends" className="w-14 h-14 rounded-md" />
                          <div className="w-14 h-14 rounded-md bg-slate-900 flex items-center justify-center">+16</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-3">
                        <p className="text-gray-500">Locked Achievements</p>
                        <div className="flex flex-row gap-3">
                          <div className="w-14 h-14 rounded-md bg-slate-900 flex items-center justify-center"></div>
                          <div className="w-14 h-14 rounded-md bg-slate-900 flex items-center justify-center"></div>
                          <div className="w-14 h-14 rounded-md bg-slate-900 flex items-center justify-center"></div>
                          <div className="w-14 h-14 rounded-md bg-slate-900 flex items-center justify-center"></div>
                          <div className="w-14 h-14 rounded-md bg-slate-900 flex items-center justify-center">+16</div>
                        </div>
                      </div>
                    </div>
                    
                  </div>

                  <div className="flex flex-col bg-gray-800 p-5 gap-5 rounded-md">
                    <p>Screenshots</p>
                    <div className="flex flex-row gap-2">
                      <Image src={eldenCover} alt="friends" className="w-64 h-36 rounded-md" />
                      <Image src={eldenCover} alt="friends" className="w-64 h-36 rounded-md" />
                      <Image src={eldenCover} alt="friends" className="w-64 h-36 rounded-md" />
                    </div>
                  </div>

                </div>


                <div className="flex flex-col w-1/3">
                  <div className="flex flex-col bg-gray-800 p-5 gap-5 rounded-md">
                    <p className="text-gray-500">Activity</p>
                    <div className="flex flex-col gap-3">
                      <p className="text-sky-400">Oct 13</p>
                      <div className="bg-sky-400 h-px w-full"></div>
                      <div className="flex flex-row">
                        <div className="bg-sky-400 w-1 rounded-l-md"></div>
                        <div className="bg-gray-900 rounded-r-md w-full py-2 flex items-center">
                          <FaTools className="text-gray-500 px-2" size={45} />
                          <div className="flex flex-col">
                            <p className="text-gray-500 text-sm">Small Update</p>
                            <p className="">It's just a small but noteworthy update~</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <p className="text-sky-400">Oct 12</p>
                      <div className="bg-sky-400 h-px w-full"></div>
                      <div className="flex flex-row">
                        <div className="bg-sky-400 w-1 rounded-l-md"></div>
                        <div className="bg-sky-400 bg-opacity-20 rounded-r-md w-full py-2 flex items-center">
                          <FaTools className="text-gray-500 px-2" size={45} />
                          <div className="flex flex-col">
                            <p className="text-gray-500 text-sm">Big Update</p>
                            <p className="">Wow here's a BIG update!</p>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
