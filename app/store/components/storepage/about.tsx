import { FaWindows } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import Image from 'next/image'
import eldencover from '../../../images/eldencover.jpg'

export default function About() {
    return (
        <>
            <div className="flex flex-col bg-gray-900 pl-4 p-2 rounded-md items-center mt-4 w-full">
                <div className="flex text-gray-500 justify-between w-full mt-2 mb-4">
                    <h2 className="font-bold">About Elden Ring</h2>
                </div>

                <Image src={eldencover} alt={"elden"} className="w-full h-full rounded-md"></Image>

                <div className="flex flex-col py-5">
                    <p className="text-white text-xs">THE NEW FANTASY ACTION RPG. Rise, Tarnished. and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.</p>

                    <div className="text-blue-400 mt-5">
                        <div className="flex items-center gap-1">
                            <li className="font-bold">A Vast World Full of Excitement</li>
                        </div>
                        <p className="text-white text-xs mt-2">A vast world where open fields with a variety of situations and huge dungeons with complex and three-dimensional designs are seamlessly connected. As you explore, the joy of discovering unknown and overwhelming threats await you, leading to a high sense of accomplishment.</p>
                    </div>

                    <div className="text-blue-400 mt-5">
                        <div className="flex items-center gap-1">
                            <li className="font-bold">Create your Own Character</li>
                        </div>
                        <p className="text-white text-xs mt-2">In addition to customizating the appearance of your character, you can freely combine the weapons, armor, and magic that you equip. You can develop yhour character according to your play style, such as increasing you muscle strength to become a strong warrior, or mastering magic.</p>
                    </div>

                    <div className="text-blue-400 mt-5">
                        <div className="flex items-center gap-1">
                            <li className="font-bold">An Epic Drama Born from a Myth</li>
                        </div>
                        <p className="text-white text-xs mt-2">A multilayered story told in fragments. An epic drama in which the various thoughts of the characters intersect in the Lands Between.</p>
                    </div>

                    <div className="text-blue-400 mt-5">
                        <div className="flex items-center gap-1">
                            <li className="font-bold">Unique Online Play that Loosely Connects You to Others</li>
                        </div>
                        <p className="text-white text-xs mt-2">In addition to multiplayer, where you can directly connect with other players and travel together, the game supports a unique asynchronous online element that allows you to feel the presence of others.</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}