import Image from 'next/image'
import storebackground from '../storebackground.png'

export default function Clientstore() {
    return (
        <>
            <div className="bg-indigo-950">
                <Image src={storebackground} alt="background" className="w-full"></Image>
                
            </div>
        </>
    )
}