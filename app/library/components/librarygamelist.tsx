
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
import eldenIcon from '../../images/eldenicon.png'

export default function Librarygamelist() {
  return (
    <>
        <div className="flex flex-col p-5 gap-5">
            <div className="flex gap-3 items-center">
                <Image src={eldenIcon} alt='icon' className="w-5 h-5" />
                <p className="text-sm">Elden Ring</p>
            </div>
            <div className="flex gap-3 items-center">
                <Image src={eldenIcon} alt='icon' className="w-5 h-5" />
                <p className="text-sm">Elden Ring</p>
            </div>
            <div className="flex gap-3 items-center">
                <Image src={eldenIcon} alt='icon' className="w-5 h-5" />
                <p className="text-sm">Elden Ring</p>
            </div>
            <div className="flex gap-3 items-center">
                <Image src={eldenIcon} alt='icon' className="w-5 h-5" />
                <p className="text-sm">Elden Ring</p>
            </div>
            <div className="flex gap-3 items-center">
                <Image src={eldenIcon} alt='icon' className="w-5 h-5" />
                <p className="text-sm">Elden Ring</p>
            </div>
        </div>
    </>
  )
}
