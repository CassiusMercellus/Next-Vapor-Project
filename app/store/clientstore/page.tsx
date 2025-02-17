import Image from 'next/image'
import storebackground from '../../images/storebackground.png'
import Featured from '../components/clientstore/featured'
import Special from '../components/clientstore/special-offers'
import Browse from '../components/clientstore/browse'
import Freetoplay from '../components/clientstore/free-to-play'
import Updated from '../components/clientstore/recently-updated'
import News from '../components/clientstore/newtrending'
import Topsellers from '../components/clientstore/topsellers'
import Under5 from '../components/clientstore/under5'
import Streaming from '../components/clientstore/streaming'

export default function Clientstore() {
    return (
        <>
            <div className="bg-slate-950 pb-8">
                <Image src={storebackground} alt="background" className="w-full"></Image>
            </div>
            <Featured />
            <Special />
            <Browse />
            <Freetoplay />
            <Updated />
            <News />
            <Topsellers />
            <Under5 />
            <Streaming />
        </>
    )
}