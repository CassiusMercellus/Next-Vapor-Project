"use client"

import Image from 'next/image'
import { useState, useEffect } from "react";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaWindows } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { db } from "../../../../../lib/firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { auth } from "../../../../../lib/firebase";

import games from "@/data/games.json";

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


export default function Wishlistedgames({ isGrid, gameId }: { isGrid: boolean; gameId: number }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [userId, setUserId] = useState<string | null>(null);

    console.log('Game ID:', gameId); 
    
    const game = games.find((game) => game.id === gameId);

    console.log('Full Game Data:', game); 

    if (!game) {
        return <p>Game not found!</p>;
    }

    useEffect(() => {
        const fetchUserWishlist = async () => {
          const currentUser = auth.currentUser;
          if (currentUser) {
            setUserId(currentUser.uid);
            const userRef = doc(db, "users", currentUser.uid);
            const userSnap = await getDoc(userRef);
            if (userSnap.exists()) {
              setWishlist(userSnap.data().wishlist || []);
            }
          }
        };
    
        fetchUserWishlist();
      }, []);


    const toggleWishlist = async (gameId: number) => {
        if (!userId) return;
      
        try {
          const userRef = doc(db, "users", userId);
  
          if (wishlist.includes(gameId)) {
  
            await updateDoc(userRef, {
              wishlist: wishlist.filter((id) => id !== gameId),
            });
            setWishlist((prev) => prev.filter((id) => id !== gameId));
            console.log("Game removed from wishlist!");
          } else {
            await updateDoc(userRef, {
              wishlist: arrayUnion(gameId),
            });
            setWishlist((prev) => [...prev, gameId]);
            console.log("Game added to wishlist!");
          }
        } catch (error) {
          console.error("Error toggling wishlist:", error);
        }
      };

    return (
        <>
            <div className={`${isGrid ? "flex flex-col justify-between bg-gray-950 p-4 rounded-md h-96" : "flex justify-between bg-gray-950 p-4 rounded-md gap-5"}`}>
                <div className={`${isGrid ? "hidden" : "flex items-center text-gray-700"}`}>
                    <GiHamburgerMenu />
                </div>
                <div className={`${isGrid ? "flex w-full h-full relative" : "flex w-1/4 relative"}`}>
                    {game.images?.main && (
                        <Image src={game.images.main}
                        alt={game.title}
                        fill
                        className="rounded-sm object-contain" >
                        </Image>
                    )}
                </div>

                <div className={`${isGrid ? "flex flex-col w-full justify-between" : "flex flex-row w-3/4 justify-between"}`} >
                    <div className="flex flex-col justify-between">
                        <a href={`/store/gamepage/${game.id}`}><p className="text-xl font-bold text-white">{game.title}</p></a>
                        <div className="flex justify-between">
                            <div className={`${isGrid ? "hidden" : "flex flex-wrap gap-1 "}`}>
                                {game.tags && game.tags.length > 0 ? (
                                  game.tags.map((tag, index) => (
                                    <p key={index} className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">
                                      {tag}
                                    </p>
                                  ))
                                ) : (
                                  <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">No Tags Available</p>
                                )}
                                <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md"><IoIosAdd size={20}/></p>
                            </div>
                        </div> 
                        <div className="flex my-3 items-center justify-between w-full">
                            <div className="text-gray-400 flex justify-center items-center gap-2">
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
                            
                            {!isGrid ? (
                            <div className="text-gray-700 text-sm px-4">
                                <p className={`${isGrid ? "hidden" : ""}`}>{game.release_date}</p>
                            </div>
                            ): (
                                <div className={`${isGrid ? "flex flex-row items-center gap-5" : "hidden"}`}>
                            <div className="flex flex-col w-full items-center">
                                <div className="flex flex-row justify-between w-full text-xs gap-5">
                                    <p className="text-blue-400 flex items-center gap-1">80%<BiSolidLike /></p>
                                    <p className="text-red-400 flex items-center gap-1">20%<BiSolidDislike /></p>
                                </div>
                                <div className="flex flex-row w-full gap-1">
                                    <div className="bg-blue-400 h-1 w-4/5 rounded-sm"></div>
                                    <div className="bg-red-400 h-1 w-1/5 rounded-sm"></div>
                                </div>
                            </div>
                            <p className={`${isGrid ? "hidden" : "text-sm text-blue-500"}`}>534,170 Reviews</p>
                        </div> 
                            )}
                        </div>
                        <div className={`${isGrid ? "hidden" : "flex flex-row items-center gap-5"}`}>
                            <div className="flex flex-col w-2/5 items-center">
                                <div className="flex flex-row justify-between w-full text-xs">
                                    <p className="text-blue-400 flex items-center gap-1">80%<BiSolidLike /></p>
                                    <p className="text-red-400 flex items-center gap-1">20%<BiSolidDislike /></p>
                                </div>
                                <div className="flex flex-row w-full gap-1">
                                    <div className="bg-blue-400 h-1 w-4/5 rounded-sm"></div>
                                    <div className="bg-red-400 h-1 w-1/5 rounded-sm"></div>
                                </div>
                            </div>
                            <p className={`${isGrid ? "hidden" : "text-sm text-blue-500"}`}>534,170 Reviews</p>
                        </div> 
                    </div>
                    
                    <div className={`${isGrid ? "flex flex-row justify-between items-end mt-5" : "flex flex-col justify-between items-end"}`}>
                        <div className="flex flex-row gap-5 items-center">
                            
                            <button
                                onClick={() => toggleWishlist(game.id)}
                                className="flex gap-2 flex-row text-white bg-gray-800 px-6 py-3 rounded-md items-center justify-center"
                                >
                                {wishlist.includes(game.id) ? (
                                    <FaHeart className="text-white" />
                                ) : (
                                    <FaRegHeart />
                                )}
                            </button>
                        </div>
                        
                        <div className="flex flex-row gap-4 items-center">
                            <div className="flex justify-center items-center">
                                {game.packages?.Game?.Price === "0" ? (
                                    <p className="text-white font-bold">Free</p>
                                    ) : (
                                    <>
                                        {game.packages?.Game?.Saleprice === "0" ? (
                                        <p className="text-white font-bold">${game.packages?.Game?.Price}</p>
                                        ) : (
                                        <>
                                            <p className={`${isGrid ? "hidden" : "bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold"}`}>-{game.packages?.Game?.Discount}</p>
                                            <div className="flex flex-col">
                                            <p className="rounded-md flex justify-center items-center text-gray-600 pr-4 pl-2 font-bold line-through">${game.packages?.Game?.Price}</p>
                                            <p className="text-lime-400 rounded-md flex justify-center items-center pr-4 pl-2 font-bold">${game.packages?.Game?.Saleprice}</p>
                                            </div>
                                        </>
                                        )}
                                    </>
                                )}
                            </div>
                            <div className="bg-blue-500 text-white px-4 py-2 rounded-md">Add to Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}