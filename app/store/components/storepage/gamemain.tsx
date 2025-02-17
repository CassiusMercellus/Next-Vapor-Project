"use client";


import Image from 'next/image'
import { useEffect, useState } from 'react';

import { FaRegHeart } from "react-icons/fa";
import eldencover from '../../../images/eldencover.jpg'
import eldensteam from '../../../images/eldensteam.jpg'
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import games from '../../../../api/games.json';


interface Game {
    id: number;
    title: string;
    genres: string;
    description: string;
    release_date: string;
    developer: string;
    publisher: string[];
    tags: string[];
}

export default function GameMain() {

    const [game, setGame] = useState<Game | null>(null);

    useEffect(() => {
        console.log("Fetched Games:", games);
        const foundGame = games.find((g: Game) => g.id === 1);
        console.log("Found Game:", foundGame);
        setGame(foundGame || null);
    }, []);


    return (
        <>
            
                <div className="flex justify-between bg-gray-900 pl-4 p-2 rounded-md items-center">
                    <h2 className="text-xl font-bold">{game ? game.title : 'Loading...'}</h2>
                    <div className="flex flex-row gap-2">
                        <p className="border border-gray-600 flex items-center p-3 px-4 rounded-md text-gray-500">Ignore</p>
                        <p className="border border-gray-600 flex items-center p-3 px-4 rounded-md text-gray-500">Follow</p>
                        <div className="flex flex-row items-center gap-2 p-3 bg-gray-800 rounded-md">
                            <p>Wishlist</p>
                            <FaRegHeart />
                        </div>
                        <p className="flex flex-row items-center gap-2 p-3 bg-gray-800 rounded-md">Browse All DLCs</p>
                        <p className="flex flex-row items-center gap-2 p-3 bg-gray-800 rounded-md">Community Hub</p>
                    </div>
                </div>

                <div className="flex justify-between bg-gray-900 p-4 rounded-md items-center mt-4">
                    <div className="flex gap-4">
                        <div className="w-2/3">
                            <Image src={eldensteam} alt={'eldensteam'} className="rounded-sm"></Image>
                            <div className="bg-slate-900 pt-4 w-full">
                
                                <div className="flex justify-center flex-row items-center bg-gray-900 rounded-md w-full">
                                    <div className="flex px-3">
                                        <MdArrowBackIos size={25} />
                                    </div>

                                    <div className="flex flex-row gap-2">
                                        
                                        <div className="relative w-1/4">
                                            <Image src={eldensteam} alt={"eldensteam"} className="rounded-md w-full h-full" />
                                        </div>

                                        <div className="relative w-1/4">
                                            <Image src={eldensteam} alt={"eldensteam"} className="rounded-md w-full h-full" />
                                        </div>

                                        <div className="relative w-1/4">
                                            <Image src={eldensteam} alt={"eldensteam"} className="rounded-md w-full h-full" />
                                        </div>

                                        <div className="relative w-1/4">
                                            <Image src={eldensteam} alt={"eldensteam"} className="rounded-md w-full h-full" />
                                        </div>
                                    </div>


                                    <div className="flex px-3">
                                        <MdArrowForwardIos size={25} />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="py-4">
                                <div className="flex justify-center gap-2">
                                    <div className="bg-blue-600 w-8 h-2 rounded-lg"></div>
                                    <div className="bg-slate-950 w-8 h-2 rounded-lg"></div>
                                    <div className="bg-slate-950 w-8 h-2 rounded-lg"></div>
                                    <div className="bg-slate-950 w-8 h-2 rounded-lg"></div>
                                    <div className="bg-slate-950 w-8 h-2 rounded-lg"></div>
                                    <div className="bg-slate-950 w-8 h-2 rounded-lg"></div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3 ">
                            <Image src={eldencover} alt={'eldencover'} className="rounded-sm"></Image>
                            <p className="text-sm pt-4">
                                THE NEW FANTASY eldensteam RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between
                            </p>
                            <p className="text-xs pt-4 text-gray-500">
                                Reviews
                            </p>

                            <div className="flex flex-row items-center pt-4">
                                <p className="text-sm w-1/5 items-center">Past Month</p>
                                <div className="flex flex-col w-2/5 items-center px-4">
                                    <div className="flex flex-row justify-between w-full text-xs">
                                    <p className="text-blue-400 flex items-center gap-1">80%<BiSolidLike /></p>
                                    <p className="text-red-400 flex items-center gap-1">20%<BiSolidDislike /></p>
                                    </div>
                                    <div className="flex flex-row w-full gap-1">
                                        <div className="bg-blue-400 h-1 w-4/5 rounded-sm"></div>
                                        <div className="bg-red-400 h-1 w-1/5 rounded-sm"></div>
                                    </div>
                                </div>
                                <p className="text-sm text-blue-500">534,170 Reviews</p>
                            </div>

                            <div className="flex flex-row items-center pt-4">
                                <p className="text-sm w-1/5 items-center">All Time</p>
                                <div className="flex flex-col w-2/5 items-center px-4">
                                    <div className="flex flex-row justify-between w-full text-xs">
                                        <p className="text-blue-400 flex items-center gap-1">80%<BiSolidLike /></p>
                                        <p className="text-red-400 flex items-center gap-1">20%<BiSolidDislike /></p>
                                    </div>
                                    <div className="flex flex-row w-full gap-1">
                                        <div className="bg-blue-400 h-1 w-4/5 rounded-sm"></div>
                                        <div className="bg-red-400 h-1 w-1/5 rounded-sm"></div>
                                    </div>
                                </div>
                                <p className="text-sm text-blue-500">534,170 Reviews</p>
                            </div>

                            <div className="flex flex-row items-center w-full pt-4">
                                <p className="text-xs text-gray-500 w-1/5">Release Date</p>
                                <p className="text-xs text-white w-2/5 px-4">25 Feb 2022</p>
                            </div>

                            <div className="flex flex-row items-center w-full pt-4">
                                <p className="text-xs text-gray-500 w-1/5">Developer</p>
                                <p className="text-xs text-blue-500 w-2/5 px-4">FromSoftware</p>
                            </div>

                            <div className="flex flex-row items-center w-full pt-4">
                                <p className="text-xs text-gray-500 w-1/5">Publisher</p>
                                <p className="text-xs text-blue-500 w-4/5 px-4">FromSoftware Bandai Namco Enterta...</p>
                            </div>

                            <div className="flex flex-row items-center w-full pt-4">
                                <p className="text-xs text-gray-500 w-1/5">Popular Tags</p>
                            </div>

                            <div className="flex flex-row items-center w-full pt-4">
                                <div className="flex justify-between">
                                    <div className="flex flex-row gap-1 ">
                                        <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">Souls-like</p>
                                        <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">RPG</p>
                                        <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">Dark Fantasy</p>
                                        <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">Open-world</p>
                                        <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md"><IoIosAdd size={20}/></p>
                                    </div>
                                </div>                    
                            </div>
                            
                            
                        </div>
                    </div>
                    
                </div>
            
        </>
        );
    }