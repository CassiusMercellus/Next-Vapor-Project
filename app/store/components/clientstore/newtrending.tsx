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

export default function News() {

    const [randomGames, setRandomGames] = useState<Game[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 3;
  
    useEffect(() => {
        if (games.length > 0) {
          const shuffled = [...games].sort(() => 0.5 - Math.random()).slice(0, 10);
          setRandomGames(shuffled);
        }
      }, [games]);
  

    const nextGame = () => {
      setCurrentIndex((prev) => (prev + 1) % (randomGames.length - visibleCount + 1));
    };
  
    const prevGame = () => {
      setCurrentIndex((prev) => (prev - 1 + (randomGames.length - visibleCount + 1)) % (randomGames.length - visibleCount + 1));
    };

    return (
        <>
            <div className="bg-slate-900 pt-20 pb-5 px-40">
                <div className="flex justify-between">
                    <h1 className="mb-6 font-bold">New & Trending</h1>
                    <div className="mb-6 border border-gray-500 rounded-md text-sm">
                        <p className="text-gray-500 p-2 px-4">See more</p>
                    </div>
                </div>
                
                <div className="flex justify-center flex-row items-center bg-gray-900 p-2 rounded-md">
                    <button className="flex px-3 disabled:opacity-50" onClick={prevGame} disabled={currentIndex === 0}>
                        <MdArrowBackIos size={25} />
                    </button>

                    <div className="flex flex-row gap-4">
                    {randomGames.slice(currentIndex, currentIndex + visibleCount).map((game) => (
                    <div key={game.id} className="bg-gray-950 rounded-md w-1/3">
                        <div className="flex flex-col justify-between p-4 gap-4 h-96">
                            {game.images?.main ? (
                            <Image
                                src={game.images.main}
                                alt={game.title}
                                width={300}
                                height={200}
                                className="w-full h-full rounded-md"
                            />
                            ) : (
                            <div className="w-full h-40 bg-gray-700 rounded-md"></div>
                            )}
                            <div className="flex flex-col">
                                <h2 className="text-3xl text-white font-bold">{game.title}</h2>
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
                                            <p className="text-white">{game.packages?.Game?.Price === "0" ? "Free" : "$" + game.packages?.Game?.Price || "N/A"}</p>
                                        </div>
                                        <div className="flex gap-2 flex-row text-white bg-gray-800 px-6 py-3 rounded-md items-center justify-center">
                                        <FaRegHeart />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}

                    </div>



                    <button className="flex px-3 disabled:opacity-50" onClick={nextGame} disabled={currentIndex + visibleCount >= randomGames.length}>
                        <MdArrowForwardIos size={25} />
                    </button>
                </div>
                
            </div>
            <div className="py-2 pb-20 bg-slate-900">
                <div className="flex justify-center gap-2">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                    key={index}
                    className={`w-8 h-2 rounded-lg ${
                        index === currentIndex ? "bg-blue-600" : "bg-slate-950"
                    }`}
                    ></div>
                ))}
                </div>
            </div>
        </>
    )
}