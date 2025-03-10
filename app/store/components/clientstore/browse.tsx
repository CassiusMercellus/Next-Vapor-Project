import Image from 'next/image'
import Action from '../../../images/action.png'
import Rpg from '../../../images/rpg.png'
import Fighting from '../../../images/fighting.png'
import Freetoplay from '../../../images/freetoplay.png'
import Sports from '../../../images/sports.png'
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export default function Browse() {
    return (
        <>
            <div className="bg-slate-900 pt-20 pb-5 px-40">
                <div className="flex justify-between">
                    <h1 className="mb-6 font-bold">Browse Steam</h1>
                    <div className="mb-6 border border-gray-500 rounded-md text-sm">
                        <p className="text-gray-500 p-2 px-4">See more</p>
                    </div>
                </div>
                
                <div className="flex justify-center flex-row items-center bg-gray-900 p-2 rounded-md">
                    <div className="flex px-3">
                        <MdArrowBackIos size={25} />
                    </div>

                    <div className="flex flex-row gap-4">
                        {/* Action */}
                        <div className="relative w-1/5">
                            <Image src={Action} alt={"action"} className="rounded-lg object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-700 to-transparent rounded-lg"></div>
                            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                                Action
                            </p>
                        </div>

                        {/* RPG */}
                        <div className="relative w-1/5">
                            <Image src={Rpg} alt={"rpg"} className="rounded-lg object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-gradient-to-t from-yellow-700 to-transparent rounded-lg"></div>
                            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                                RPG
                            </p>
                        </div>

                        {/* Fighting */}
                        <div className="relative w-1/5">
                            <Image src={Fighting} alt={"fighting"} className="rounded-lg object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-gradient-to-t from-sky-700 to-transparent rounded-lg"></div>
                            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                                Fighting
                            </p>
                        </div>

                        {/* Free to Play */}
                        <div className="relative w-1/5">
                            <Image src={Freetoplay} alt={"freetoplay"} className="rounded-lg object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-700 to-transparent rounded-lg"></div>
                            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                                Free to Play
                            </p>
                        </div>

                        {/* Sports */}
                        <div className="relative w-1/5">
                            <Image src={Sports} alt={"sports"} className="rounded-lg object-cover w-full h-full" />
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-700 to-transparent rounded-lg"></div>
                            <p className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
                                Sports
                            </p>
                        </div>
                    </div>


                    <div className="flex px-3">
                        <MdArrowForwardIos size={25} />
                    </div>
                </div>
                
            </div>
            <div className="py-2 pb-20 bg-slate-900">
                <div className="flex justify-center gap-2">
                    <div className="bg-blue-600 w-8 h-2 rounded-lg"></div>
                    <div className="bg-slate-950 w-8 h-2 rounded-lg"></div>
                    <div className="bg-slate-950 w-8 h-2 rounded-lg"></div>
                    <div className="bg-slate-950 w-8 h-2 rounded-lg"></div>
                    
                </div>
            </div>
        </>
    )
}