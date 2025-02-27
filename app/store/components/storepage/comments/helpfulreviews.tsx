import Image from 'next/image';
import PFP from '../../../../images/pfp.png';
import { FaSteam } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import { RiMedalFill } from "react-icons/ri";



export default function HelpfulReviews() {
    return (
        <>
            <div className="flex bg-gray-900 flex-col rounded-md p-3">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex items-center justify-evenly gap-3">
                        <Image src={PFP} alt="pfp" className="w-8 h-8 rounded-md"></Image>
                        <p className="text-white">Username</p>
                        <p className="text-gray-500">3 reviews</p>
                    </div>
                    <div className="text-gray-500">Posted on 12 Sep 2023</div>
                    
                </div>

                <div className="w-full bg-gray-950 my-5 rounded-md flex">
                    <div className="w-1/2 flex flex-row gap-2 p-2">
                        <div className="">
                            <Image src={PFP} alt="pfp" className="w-12 h-12 rounded-md"></Image>
                        </div>
                        <div className="flex flex-col justify-between">
                            <p className="text-sm">Recommended</p>
                            <p className="text-gray-500 text-xs">2.130.2 hrs on record (2.069.9 hrs at review time)</p>

                        </div>
                    </div>
                    <div className="flex justify-between w-1/2 p-2">
                        <div></div>
                        <FaSteam className="text-blue-300"/>
                    </div>
                </div>

                <div className="text-white text-lg">
                    <p>Its fine I guess lol</p>
                </div>

                <div className="bg-gray-800 h-px my-2"></div>

                <div className="text-gray-500 text-sm">
                    <p>Was this review helpful?</p>
                </div>

                <div className="flex flex-wrap mt-5 gap-2">
                    <div className="flex flex-row gap-2 bg-slate-950 p-2 rounded-md items-center">
                        <p className="text-gray-400 text-sm">Yes</p>
                        <AiFillLike className="text-gray-400" />
                        <p className="text-blue-400 text-sm">374</p>
                    </div>
                
                    <div className="flex flex-row gap-2 bg-slate-950 p-2 rounded-md items-center">
                        <p className="text-gray-400 text-sm">No</p>
                        <AiFillDislike className="text-gray-400" />
                    </div>

                    <div className="flex flex-row gap-2 bg-slate-950 p-2 rounded-md items-center">
                        <p className="text-gray-400 text-sm">Funny</p>
                        <FaRegSmile className="text-gray-400" />
                        <p className="text-blue-400 text-sm">6</p>
                    </div>

                    <div className="flex flex-row gap-2 bg-slate-950 p-2 rounded-md items-center">
                        <p className="text-gray-400 text-sm">Award</p>
                        <RiMedalFill  className="text-gray-400" />
                        <p className="text-blue-400 text-sm">5</p>
                    </div>

                </div>

            </div>
            
        </>
    )
}