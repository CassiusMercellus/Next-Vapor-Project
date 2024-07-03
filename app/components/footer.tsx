import Link from 'next/link'
import { IoGameController  } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="flex flex-row py-6 justify-evenly bg-slate-800 bottom-1">
            <div className="">
                <Link href="/" className="flex px-2 py-4 mx-4 bottom-0 rounded-lg">
                    <IoGameController size={45}/>
                    <p className="mx-10 font-bold text-5xl">V a p o r</p>
                </Link>
                <p className="text-sm text-slate-400">© 2022 Vapor Corporation. All rights reserved</p>
                <p className="text-sm text-slate-400">All trademarks are the property of their respective</p>
                <p className="text-sm text-slate-400">owners in the US and other countries.</p>
                <p className="text-sm text-slate-400">VAT included in all prices where applicable.</p>
            </div>
            <div className="flex flex-col">
                <Link href="/" className="my-1 text-sm text-slate-400">About Vapor</Link>
                <Link href="/" className="my-1 text-sm text-slate-400">Jobs</Link>
                <Link href="/" className="my-1 text-sm text-slate-400">Steamworks</Link>
                <Link href="/" className="my-1 text-sm text-slate-400">Steam Distribution</Link>
                <Link href="/" className="my-1 text-sm text-slate-400">Support</Link>
            </div>
            <div className="flex flex-col">
                <Link href="/" className="my-1 text-sm text-slate-400">Privacy Policy</Link>
                <Link href="/" className="my-1 text-sm text-slate-400">Legal</Link>
                <Link href="/" className="my-1 text-sm text-slate-400">Steam Subscriber Agreement</Link>
                <Link href="/" className="my-1 text-sm text-slate-400">Refunds</Link>
                <Link href="/" className="my-1 text-sm text-slate-400">Cookies</Link>
            </div>
            <div className="flex flex-row">
                <div className="mx-2 p-2 rounded-lg bg-slate-700 h-9 hover:bg-slate-600"><FaFacebookF size={20} /></div>
                <div className="mx-2 p-2 rounded-lg bg-slate-700 h-9 hover:bg-slate-600"><FaXTwitter size={20} /></div>
                
            </div>
        </footer>
    )
}