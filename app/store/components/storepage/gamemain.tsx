"use client";

import Image from 'next/image'
import { useEffect, useState } from 'react';

import { FaRegHeart } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


type Game = {
    id: number;
    title: string;
    genres: string;
    description: string;
    release_date: string;
    developer: string;
    publisher: string[];
    tags?: string[];
    packages?: {
      Game?: {
        Name: string;
        Price: string;
        Saleprice: string;
        Discount: string;
        Platform: string | string[];
      };
      DLC?: {
        DLC1?: {
            Name: string;
            Price: string;
            Saleprice: string;
            Discount: string;
            Platform: string | string[];
            Image?: string;
          };
          DLC2?: {
            Name: string;
            Price: string;
            Saleprice: string;
            Discount: string;
            Platform: string | string[];
            Image?: string;
          };
      }
    };
    features?: string[];
    Languages: {
        English: string[];
        Simplified_Chinese?: string[];
        French?: string[];
        Italian?: string[];
        German?: string[];
      };
    About?: string;
    achievements?: string;
    links?: string[];
    system_requirements?: {
      minimum?: {
        os?: string;
        processor?: string;
        memory?: string;
        graphics?: string;
        directX?: string;
        storage?: string;
        SoundCard?: string;
      };
      recommended?: {
        os?: string;
        processor?: string;
        memory?: string;
        graphics?: string;
        directX?: string;
        storage?: string;
        SoundCard?: string;
      };
    };
    platforms?: {
      id: number;
      name: string;
    }[];
    overall_rating?: string;
    images?: {
      icon?: string;
      banner?: string;
      main?: string;
      about?: string;
      achievements?: string;
    };
    size?: string;
    screenshots?: {
      id: number;
      image: string;
    }[];
    videos?: {
      id: number;
      url: string;
    }[];
    reviews?: {
      id: number;
      title: string;
      rating: number;
      content: string;
    }[];
    streaming?: string;
  };
  


interface GameMainProps {
    game: Game;
}

export default function GameMain({ game }: GameMainProps) {

    const [currentMedia, setCurrentMedia] = useState<string | null>(
        game.screenshots?.[0]?.image || null
    );
    const [currentIndex, setCurrentIndex] = useState(0);

    const mediaItems = [
        ...(game.screenshots || []).map((s) => ({ type: "image", src: s.image })),
        ...(game.videos || []).map((v) => ({ type: "video", src: v.url })),
    ];

    const handleThumbnailClick = (index: number) => {
        setCurrentIndex(index);
        setCurrentMedia(mediaItems[index].src);
    };

    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = Math.min(prevIndex + 1, mediaItems.length - 1);
    
            // Only update startIndex if necessary
            if (newIndex >= startIndex + 4) {
                setStartIndex((prevStart) => Math.min(prevStart + 1, mediaItems.length - 4));
            }
    
            setCurrentMedia(mediaItems[newIndex].src);
            return newIndex;
        });
    };
    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = Math.max(prevIndex - 1, 0);
    
            // Only update startIndex if necessary
            if (newIndex < startIndex) {
                setStartIndex((prevStart) => Math.max(prevStart - 1, 0));
            }
    
            setCurrentMedia(mediaItems[newIndex].src);
            return newIndex;
        });
    };
    

    return (
        <>
                <div className="flex justify-between bg-gray-900 pl-4 p-2 rounded-md items-center">
                    <h2 className="text-xl font-bold">{game.title}</h2>
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
                            <div className="w-full h-[450px] flex justify-center items-center overflow-hidden rounded-sm bg-black">
                                {currentMedia ? (
                                    mediaItems[currentIndex].type === "image" ? (
                                        <Image 
                                            src={currentMedia} 
                                            alt="Showcase" 
                                            width={800} 
                                            height={450} 
                                            className="w-full h-full object-cover rounded-sm"
                                        />
                                    ) : (
                                        <iframe
                                            src={`https://www.youtube-nocookie.com/embed/${new URL(currentMedia).searchParams.get('v')}`}
                                            title="Game Video"
                                            className="w-full h-full rounded-sm"
                                            allowFullScreen
                                        ></iframe>
                                    )
                                ) : (
                                    <p className="text-gray-500">No media available</p>
                                )}
                            </div>

                            <div className="bg-slate-900 pt-4 w-full">
                
                                <div className="flex justify-center flex-row items-center bg-gray-900 rounded-md w-full">
                                <button 
                                    onClick={handlePrev} 
                                    className="px-3" 
                                    disabled={currentIndex <= 0}
                                >
                                    <MdArrowBackIos 
                                        size={25} 
                                        className={`${currentIndex <= 0 ? "opacity-50" : ""}`} 
                                    />
                                </button>

                                    <div className="flex flex-row gap-2">
                                    {mediaItems.slice(startIndex, startIndex + 4).map((item, index) => (
                                        <div
                                            key={startIndex + index}
                                            className="relative w-[150px] h-[80px] rounded-md cursor-pointer overflow-hidden"
                                            onClick={() => handleThumbnailClick(startIndex + index)}
                                        >
                                            {item.type === "image" ? (
                                                <Image
                                                    src={item.src}
                                                    alt="Thumbnail"
                                                    width={150}
                                                    height={80}
                                                    className="w-full h-full object-cover rounded-md"
                                                />
                                            ) : (
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={`https://img.youtube.com/vi/${new URL(item.src).searchParams.get('v')}/0.jpg`}
                                                        alt="Video Thumbnail"
                                                        width={150}
                                                        height={80}
                                                        className="w-full h-full object-cover rounded-md"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>


                                <button 
                                    onClick={handleNext} 
                                    className="px-3" 
                                    disabled={currentIndex >= mediaItems.length - 1} 
                                >
                                    <MdArrowForwardIos 
                                        size={25} 
                                        className={`${currentIndex >= mediaItems.length - 1 ? "opacity-50" : ""}`} 
                                    />
                                </button>
                                </div>
                                
                            </div>
                            <div className="py-4">
                                <div className="flex justify-center gap-2">
                                    {mediaItems.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-8 h-2 rounded-lg ${
                                                index === currentIndex ? "bg-blue-600" : "bg-slate-950"
                                            }`}
                                        ></div>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className="w-1/3 ">
                            <Image
                                src={game.images?.banner as string} 
                                alt="About Image"
                                width={800} 
                                height={450}
                                className="rounded-sm"
                                />

                            <p className="text-sm pt-4">
                                {game.description}
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
                                <p className="text-xs text-white w-2/5 px-4">{game.release_date}</p>
                            </div>

                            <div className="flex flex-row items-center w-full pt-4">
                                <p className="text-xs text-gray-500 w-1/5">Developer</p>
                                <p className="text-xs text-blue-500 w-2/5 px-4">{game.developer}</p>
                            </div>

                            <div className="flex flex-row items-center w-full pt-4">
                                <p className="text-xs text-gray-500 w-1/5">Publisher</p>
                                <p className="text-xs text-blue-500 w-4/5 px-4">{game.publisher}</p>
                            </div>

                            <div className="flex flex-row items-center w-full pt-4">
                                <p className="text-xs text-gray-500 w-1/5">Popular Tags</p>
                            </div>

                            <div className="flex flex-row items-center w-full pt-4">
                                <div className="flex justify-between">
                                    <div className="flex flex-row gap-1">
                                        {game.tags?.map((tag, index) => (
                                            <p key={index} className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">
                                                {tag}
                                            </p>
                                        ))}
                                        <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">
                                            <IoIosAdd size={20} />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            
                            
                        </div>
                    </div>
                    
                </div>
            
        </>
        );
    }