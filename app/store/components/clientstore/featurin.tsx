"use client";

import Image from 'next/image'
import { useState, useEffect } from "react";
import { FaWindows } from "react-icons/fa";
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

  export default function Featured() {
    const [featuredGames, setFeaturedGames] = useState<Game[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Fetch 5 random games on mount
    useEffect(() => {
      const shuffled = [...games].sort(() => 0.5 - Math.random());
      setFeaturedGames(shuffled.slice(0, 5));
    }, []);
  
    // Navigate carousel
    const nextGame = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredGames.length);
    };
  
    const prevGame = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + featuredGames.length) % featuredGames.length
      );
    };
  
    if (featuredGames.length === 0) return <p>Loading...</p>;
  
    const game = featuredGames[currentIndex];
  
    return (
      <>
        <div className="bg-gradient-to-b from-slate-950 to-slate-900 pt-20 pb-5 px-40">
          <h1 className="mb-8 font-bold text-white text-3xl">FEATURED</h1>
          <div className="flex justify-center items-center bg-gradient-to-b from-slate-950 to-gray-900 p-4 rounded-md">
            <button onClick={prevGame} className="px-3">
              <MdArrowBackIos size={25} className="text-white hover:text-gray-400" />
            </button>
            <div className="bg-gray-950 rounded-md p-4 flex gap-6 w-full max-w-4xl">
              <div className="w-2/5">
                {game.images?.main && (
                  <Image
                    src={game.images.main}
                    alt={game.title}
                    width={400}
                    height={250}
                    className="rounded-md"
                  />
                )}
              </div>
              <div className="w-3/5 text-white">
                <h2 className="text-3xl font-bold">{game.title}</h2>
                <p className="text-gray-300 mt-2">{game.description}</p>
                <div className="flex gap-2 mt-4">
                  {game.genres.split(", ").map((genre) => (
                    <p key={genre} className="text-gray-500 text-sm bg-gray-800 px-2 py-1 rounded-md">
                      {genre}
                    </p>
                  ))}
                  <p className="text-gray-500 text-sm bg-gray-800 px-2 py-1 rounded-md">
                    <IoIosAdd size={20} />
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-gray-400">
                    <FaWindows size={25} />
                  </div>
                  <div className="flex gap-4">
                    <p className="text-white">${game.packages?.Game?.Price || "N/A"}</p>
                    <button className="bg-blue-600 rounded-md px-6 py-3 text-white">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={nextGame} className="px-3">
              <MdArrowForwardIos size={25} className="text-white hover:text-gray-400" />
            </button>
          </div>
        </div>
        {/* Carousel Dots */}
        <div className="py-2 pb-20 bg-slate-900 flex justify-center gap-2">
          {featuredGames.map((_, index) => (
            <div
              key={index}
              className={`w-8 h-2 rounded-lg ${index === currentIndex ? "bg-blue-600" : "bg-slate-950"}`}
            ></div>
          ))}
        </div>
      </>
    );
  }