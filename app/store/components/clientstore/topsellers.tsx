"use client";

import Image from 'next/image'
import { useState, useEffect } from "react";
import eldencover from '../../../images/eldencover.jpg'
import eldensteam from '../../../images/eldensteam.jpg'
import { FaWindows, FaApple, FaSteam } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


import games from "@/data/games.json";
import { notFound } from "next/navigation";


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

export default function Topsellers() {

    const [randomGames, setRandomGames] = useState<Game[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 6;

    const pages = 3; // Based on size of API adjust accordingly



    const totalCount = pages * 6;

  
    useEffect(() => {
        if (games.length > 0) {
            const uniqueGames = [...games]
                .sort(() => Math.random() - 0.5)
                .slice(0, totalCount);
            setRandomGames(uniqueGames);
        }
    }, []);
    
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + visibleCount) % randomGames.length);
        
        
    };
    
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - visibleCount + randomGames.length) % randomGames.length);
        
    };
    



    return (
        <>
            <div className="bg-slate-900 pt-20 pb-5 px-40">
                <div className="flex justify-between">
                    <h1 className="mb-6 font-bold">Top Sellers</h1>
                    <div className="mb-6 border border-gray-500 rounded-md text-sm">
                        <p className="text-gray-500 p-2 px-4">See more</p>
                    </div>
                </div>
                
                <div className="flex justify-center flex-row items-center bg-gray-900 p-2 rounded-md w-full">
                    <button onClick={prevSlide} disabled={currentIndex === 0} className="px-3 text-white disabled:opacity-50">
                        <MdArrowBackIos size={25} />
                    </button>

                    <div className="grid grid-rows-3 grid-cols-2 gap-4 w-full">
                        {randomGames.slice(currentIndex, currentIndex + visibleCount).map((game) => (
                        <div key={game.id} className="bg-gray-950 rounded-md w-full">
                            <div className="flex flex-row justify-between p-4 gap-4 h-36">
                                <div className="w-1/3 relative">
                                    {game.images?.main ? (
                                        <Image
                                            src={game.images.main}
                                            alt={game.title}
                                            fill
                                            className="w-full h-full rounded-md object-cover"
                                        />
                                        ) : (
                                        <div className="w-full h-40 bg-gray-700 rounded-md"></div>
                                        )}
                                </div>
                                
                                <div className="flex flex-col w-2/3">
                                    <h2 className="text-3xl text-white font-bold">{game.title.length > 25 ? game.title.slice(0, 25) + "..." : game.title}</h2>
                                    <div className="flex justify-between mt-4 text-lg items-center">
                                        <div className="text-gray-400 flex justify-center items-center">
                                            {game.platforms?.map((platform) => {
                                                switch (platform.name) {
                                                    case "Windows":
                                                        return <FaWindows key={platform.id} size={25} />;
                                                    case "macOS":
                                                        return <FaApple key={platform.id} size={25} />;
                                                    case "Steam":
                                                        return <FaSteam key={platform.id} size={25} />;
                                                    default:
                                                        return null;
                                                }
                                            })}
                                        </div>
                                    
                                        <div className="flex flex-row gap-4">
                                            <div className="flex justify-center items-center">
                                                {game.packages?.Game?.Price === "0" ? (
                                                <p className="text-white font-bold">Free</p>
                                                ) : (
                                                <>
                                                    {game.packages?.Game?.Saleprice === "0" ? (
                                                    <p className="text-white font-bold">${game.packages?.Game?.Price}</p>
                                                    ) : (
                                                    <>
                                                        <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">-{game.packages?.Game?.Discount}</p>
                                                        <div className="flex flex-col">
                                                        <p className="rounded-md flex justify-center items-center text-gray-600 pr-4 pl-2 font-bold line-through">${game.packages?.Game?.Price}</p>
                                                        <p className="text-lime-400 rounded-md flex justify-center items-center pr-4 pl-2 font-bold">${game.packages?.Game?.Saleprice}</p>
                                                        </div>
                                                    </>
                                                    )}
                                                </>
                                                )}
                                            </div>
                                            <div className="flex gap-2 flex-row text-white bg-gray-800 p-3 rounded-md items-center justify-center">
                                                <FaRegHeart />
                                            </div>
                                            </div>


                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}

                        
                        
                    </div>



                    <button className="flex px-3 disabled:opacity-50" onClick={nextSlide} disabled={currentIndex + visibleCount >= randomGames.length}>
                        <MdArrowForwardIos size={25} />
                    </button>
                </div>
                
            </div>
            <div className="py-2 pb-20 bg-slate-900">
                <div className="flex justify-center gap-2">
                    {Array.from({ length: totalCount / 6 }).map((_, index) => (
                        <div
                        key={index}
                        className={`w-8 h-2 rounded-lg ${
                            index === currentIndex / 6 ? "bg-blue-600" : "bg-slate-950"
                        }`}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    )
}