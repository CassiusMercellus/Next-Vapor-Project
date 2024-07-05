import PFP from "../pfp.png";
import Image from 'next/image'

export default function ProfileSection() {
    return (
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
    )
}