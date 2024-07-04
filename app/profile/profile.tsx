import PFP from "../pfp.png";
import Image from 'next/image'
import { MdKeyboardArrowDown } from "react-icons/md";
import Game from "../halo.png"


export default function Profile() {
    return (
      <div className="bg-gradient-to-t bg-slate-700 from-slate-950 h-full pt-12">
        <div className="flex flex-row bg-slate-800 p-8 mx-48 justify-between">
            <div className="flex flex-row w-full">
                <Image
                    className="border-solid border-white border-2 w-64 mx-4"
                    src={PFP}
                    alt="Picture of the user"
                    width={25}
                    height={25}
                />
                <div className="flex flex-col">
                    <div className="flex flex-row items-center">
                        <div className="text-2xl font-bold">Profile</div>
                        <MdKeyboardArrowDown className="text-2xl font-bold"/>
                    </div>
                    <p className="mt-16">I'm profile and this is my favorite spot on Steam!</p>
                </div>
            </div>
            <div className="flex flex-col">
                <button className="mb-4 py-2 px-4 bg-slate-900 hover:bg-slate-700 w-32">Edit Profile</button>
                <div className="">
                    <div>Level</div>
                    <div>Level</div>
                </div>
            </div>
        </div>


        <div className="flex flex-row bg-slate-800 mx-48 justify-between pb-5">
                <div className="flex flex-col">
                    <div className="flex flex-col ml-12 text-slate-400 p-1">
                        <p>Game Collector</p>
                    </div>
                    <div className="flex flex-row bg-slate-900 justify-center ml-12 py-6 p-2">
                        <div className="flex flex-row">
                            <div className="flex flex-col justify-center mx-6 items-center">
                                <p className="text-2xl font-bold">350</p>
                                <p>Games owned</p>
                            </div>
                            <div className="flex flex-col justify-center mx-6 items-center">
                                <p className="text-2xl font-bold">600</p>
                                <p>DLCs owned</p>
                            </div>
                            <div className="flex flex-col justify-center mx-6 items-center">
                                <p className="text-2xl font-bold">32</p>
                                <p>Reviewed</p>
                            </div>
                            <div className="flex flex-col justify-center mx-6 items-center">
                                <p className="text-2xl font-bold">120</p>
                                <p>Wishlisted</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 grid-rows-2 gap-2 ml-12 bg-slate-900 px-4 pb-4">
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={140}
                                height={140}
                            />
                        </div>
                    </div>
                </div>
            <div className="flex flex-col w-64 mx-8 mr-12">
                <div className="flex flex-col bg-slate-900 w-72">
                    <div className="flex flex-row bg-slate-950 justify-between p-2 m-2 mb-0 rounded-sm">
                        <p>Status</p>
                        <p className="text-blue-300">Online</p>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-900 w-72">
                    <div className="flex flex-row bg-slate-950 justify-between p-2 m-2 mb-0 rounded-sm">
                        <p>Badges</p>
                        <p className="text-gray-300">84</p>
                    </div>
                    
                    <div className="flex flex-row justify-center">
                    <Image
                            className="rounded-sm w-10 m-2" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={25} 
                            height={25}  
                        />
                    <Image
                            className="rounded-sm w-10 m-2" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={25} 
                            height={25}  
                        />
                    <Image
                            className="rounded-sm w-10 m-2" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={25} 
                            height={25}  
                        />
                    <Image
                            className="rounded-sm w-10 m-2" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={25} 
                            height={25}  
                        />
                    <Image
                            className="rounded-sm w-10 m-2" 
                            src={PFP} 
                            alt="Picture of the user"
                            width={25} 
                            height={25}  
                        />
                    </div>
                </div>
                <div className="flex flex-col bg-slate-900 w-72">
                    <div className="flex flex-row bg-slate-950 justify-between p-2 m-2 mb-0 rounded-sm">
                        <p>Games</p>
                        <p className="text-gray-300">350</p>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-900 w-72">
                    <div className="flex flex-row bg-slate-950 justify-between p-2 m-2 mb-0 rounded-sm">
                        <p>Wishlist</p>
                        <p className="text-gray-300">120</p>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-900 w-72">
                    <div className="flex flex-row bg-slate-950 justify-between p-2 m-2 mb-0 rounded-sm">
                        <p>Inventory</p>
                        <p className="text-gray-300"></p>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-900 w-72">
                    <div className="flex flex-row bg-slate-950 justify-between p-2 m-2 mb-0 rounded-sm">
                        <p>Screenshots</p>
                        <p className="text-gray-300">40</p>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-900 w-72">
                    <div className="flex flex-row bg-slate-950 justify-between p-2 m-2 mb-0 rounded-sm">
                        <p>Videos</p>
                        <p className="text-gray-300">2</p>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-900 w-72">
                    <div className="flex flex-row bg-slate-950 justify-between p-2 m-2 mb-0 rounded-sm">
                        <p>Workshop Items</p>
                        <p className="text-gray-300">3</p>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-900 w-72">
                    <div className="flex flex-row bg-slate-950 justify-between p-2 m-2 mb-0 rounded-sm">
                        <p>Reviews</p>
                        <p className="text-gray-300">32</p>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-900 w-72">
                    <div className="flex flex-row bg-slate-950 justify-between p-2 m-2 mb-0 rounded-sm">
                        <p>Guides</p>
                        <p className="text-gray-300">1</p>
                    </div>
                </div>
                <div className="flex flex-col bg-slate-900 w-72">
                    <div className="flex flex-row bg-slate-950 justify-between p-2 m-2 rounded-sm">
                        <p>Artworks</p>
                        <p className="text-gray-300">12</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
  