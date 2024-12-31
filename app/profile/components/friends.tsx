import PFP from "../../pfp.png";
import Image from 'next/image'
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Friends() {
    return (
        <div className="flex flex-col mt-8">
                <div className="flex flex-col bg-slate-900 w-72">
                    <div className="flex flex-row justify-between items-center p-2 m-2 mb-0 rounded-sm">
                        <p>Friends (4)</p>
                        <IoIosAddCircleOutline size="20" />
                    </div>
                    <div className="flex flex-col bg-slate-950 mx-2 my-1">
                        <div className="flex justify-between items-center m-1">
                            <div className="flex gap-2">
                                <Image
                                className="rounded-sm m-1" 
                                src={PFP} 
                                alt="Picture of the user"
                                width={45} 
                                height={45}  
                                />
                                <div className="flex flex-col">
                                    <p>Friend 1</p>
                                    <p>Counter Strike 2</p>
                                </div>
                            </div>
                        
                            <div className="flex justify-center items-center p-2 border-2 border-green-500 rounded-full w-10 h-10 mr-2">
                                <p>72</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-slate-950 mx-2 my-1">
                        <div className="flex justify-between items-center m-1">
                            <div className="flex gap-2">
                                <Image
                                className="rounded-sm m-1" 
                                src={PFP} 
                                alt="Picture of the user"
                                width={45} 
                                height={45}  
                                />
                                <div className="flex flex-col">
                                    <p>Friend 1</p>
                                    <p>Counter Strike 2</p>
                                </div>
                            </div>
                        
                            <div className="flex justify-center items-center p-2 border-2 border-green-500 rounded-full w-10 h-10 mr-2">
                                <p>72</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-slate-950 mx-2 my-1">
                        <div className="flex justify-between items-center m-1">
                            <div className="flex gap-2">
                                <Image
                                className="rounded-sm m-1" 
                                src={PFP} 
                                alt="Picture of the user"
                                width={45} 
                                height={45}  
                                />
                                <div className="flex flex-col">
                                    <p>Friend 1</p>
                                    <p>Counter Strike 2</p>
                                </div>
                            </div>
                        
                            <div className="flex justify-center items-center p-2 border-2 border-green-500 rounded-full w-10 h-10 mr-2">
                                <p>72</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-slate-950 mx-2 my-1">
                        <div className="flex justify-between items-center m-1">
                            <div className="flex gap-2">
                                <Image
                                className="rounded-sm m-1" 
                                src={PFP} 
                                alt="Picture of the user"
                                width={45} 
                                height={45}  
                                />
                                <div className="flex flex-col">
                                    <p>Friend 1</p>
                                    <p>Counter Strike 2</p>
                                </div>
                            </div>
                        
                            <div className="flex justify-center items-center p-2 border-2 border-green-500 rounded-full w-10 h-10 mr-2">
                                <p>72</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                    
            </div>
    )
}