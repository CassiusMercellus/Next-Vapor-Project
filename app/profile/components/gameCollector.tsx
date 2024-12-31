import Image from 'next/image'
import Game from "../../halo.png"


export default function GameCollector() {
    return(
        <div className="flex flex-col bg-gray-800 p-2 mb-6 w-full">
                    <div className="flex flex-col text-slate-400 p-1">
                        <p>Game Collector</p>
                    </div>
                    <div className="flex flex-row bg-slate-900 justify-center py-6 p-2">
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
                    <div className="grid grid-cols-5 grid-rows-2 gap-4 bg-slate-900 px-4 pb-4">
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={180}
                                height={180}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={180}
                                height={180}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={180}
                                height={180}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={180}
                                height={180}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={180}
                                height={180}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={180}
                                height={180}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={180}
                                height={180}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={180}
                                height={180}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={180}
                                height={180}
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <Image
                                className=""
                                src={Game}
                                alt="Picture of the user"
                                width={180}
                                height={180}
                            />
                        </div>
                    </div>
                </div>
    )
}