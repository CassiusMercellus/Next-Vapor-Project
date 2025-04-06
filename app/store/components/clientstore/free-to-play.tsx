"use client";

import Image from 'next/image'
import { useState } from "react";
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

export default function Freetoplay() {
    const freeToPlayGames = games.filter(
        (game) => game.packages?.Game?.Price === "0" || parseInt(game.packages?.Game?.Price) === 0
      );
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const itemsPerPage = 3;
    
      const nextSlide = () => {
        if (currentIndex < freeToPlayGames.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      };
      
      const prevSlide = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      };




    return (
        <>
            <div className="bg-slate-900 pt-20 pb-5 px-40">
                <div className="flex justify-between">
                    <h1 className="mb-6 font-bold">Free-to-Play Games</h1>
                    <div className="mb-6 border border-gray-500 rounded-md text-sm">
                        <p className="text-gray-500 p-2 px-4">See more</p>
                    </div>
                </div>
                
                <div className="flex justify-center flex-row items-center bg-gray-900 p-2 rounded-md">
                    <button onClick={prevSlide} disabled={currentIndex === 0} className="flex px-3 disabled:opacity-50">
                        <MdArrowBackIos size={25} />
                    </button>

                    <div className="flex flex-row gap-4">
                    {freeToPlayGames.slice(currentIndex, currentIndex + itemsPerPage).map((game) => (
                        <div key={game.id} className="bg-gray-950 rounded-md w-1/3">
                            <div className="flex flex-col justify-between p-4 gap-4">
                            <Image src={game.images?.main} alt={game.title} width={300} height={180} className="w-full h-64 rounded-md" />
                            <div className="flex flex-col">
                            <a href={`/store/gamepage/${game.id}`}><h2 className="text-3xl text-white font-bold">
                                {game.title}
                                </h2></a>
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

                                <div className="flex justify-center items-center">
                                    <p className="rounded-md flex justify-center items-center text-gray-600 pr-4 pl-2 font-bold">
                                    Free
                                    </p>
                                    <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold hover:bg-lime-500">
                                    Play Now
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <button
                    onClick={nextSlide}
                    disabled={currentIndex + itemsPerPage >= freeToPlayGames.length}
                    className="px-3 text-white disabled:opacity-50"
                    >
                        <MdArrowForwardIos size={25} />
                    </button>
                </div>
                
            </div>
            <div className="py-2 pb-20 bg-slate-900">
                <div className="flex justify-center gap-2">
                {freeToPlayGames.slice(0, freeToPlayGames.length - 2).map((_, index) => (
                    <div
                    key={index}
                    className={`w-8 h-2 rounded-lg ${
                        currentIndex === index ? "bg-blue-600" : "bg-slate-950"
                    }`}
                    ></div>
                ))}
                </div>
            </div>
        </>
    )
}