"use client";


import Image from 'next/image'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { FaWindows } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import games from "@/data/games.json";

import { db } from "../../../../lib/firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { auth } from "../../../../lib/firebase";



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


export default function Gamediscover({ game }: { game: Game }) {

  const [wishlist, setWishlist] = useState<number[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const [ownedGames, setOwnedGames] = useState<number[]>([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      console.log('Current User:', currentUser); // Log current user to ensure it's set
      if (currentUser) {
        setUserId(currentUser.uid);

        const userRef = doc(db, 'users', currentUser.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            setWishlist(userSnap.data().wishlist || []);
          setOwnedGames(userSnap.data().games || []);
        }
      }
      setIsLoading(false); // Set loading to false after fetching data
    });

    return () => unsubscribe(); // Clean up the listener on unmount
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
            <div className="flex justify-between bg-gray-950 p-4 rounded-md gap-2">

                <div className="flex w-1/2 gap-2">
                    {game.images?.main && (
                    <Image src={game.images.main} alt={game.title} width={400} height={300} className="rounded-sm w-3/4" ></Image>
                    )}
                    <div className="flex flex-col w-1/4 gap-2 justify-between">
                        {game.screenshots &&
                            game.screenshots.slice(0, 3).map((screenshot) => (
                            <Image
                                key={screenshot.id}
                                src={screenshot.image}
                                alt={`${game.title} - Screenshot ${screenshot.id}`}
                                width={400}
                                height={100}
                                className="rounded-md"
                            />
                            ))}
                    </div>
                </div>

                <div className="flex flex-row w-1/2 justify-between">
                    <div className="flex flex-col justify-between w-1/2">
                        <div className="flex flex-col">
                            <p className="text-xl font-bold text-white">{game.title}</p>
                            
                            <div className="flex justify-between">
                            <div className="flex flex-wrap gap-1 mt-5">
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
                        <div className="flex my-10 items-center">
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

                            <div className="text-gray-500 text-sm px-4">
                                <p>{game.release_date}</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5 my-5">
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
                            <p className="text-sm text-blue-500">534,170 Reviews</p>
                        </div> 
                        </div>
                        <div className="border w-1/2 flex items-center justify-center rounded-md border-gray-700 p-2 text-gray-200">Find more like this</div>
                        
                    </div>
                    
                    <div className="flex flex-col justify-between items-end w-1/2">
                        <div className="flex flex-row gap-2">
                            <div className="border flex items-center justify-center rounded-md border-gray-700 p-2 px-4 text-gray-200 hover:bg-gray-700">Ignore</div>
                            
                            <button
                                    onClick={() => {
                                    if (!ownedGames.includes(game.id)) {
                                        toggleWishlist(game.id);
                                    }
                                    }}
                                    disabled={ownedGames.includes(game.id)}
                                    className={`border flex items-center justify-center rounded-md border-gray-900 p-2 px-4 text-gray-200 bg-gray-900 gap-2 hover:bg-gray-800
                                    ${ownedGames.includes(game.id) ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
                                >
                              <p>Wishlist</p>
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
                            <a href={`/store/gamepage/${game.id}`}>
                            <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800">Visit Store Page</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
        );
    }