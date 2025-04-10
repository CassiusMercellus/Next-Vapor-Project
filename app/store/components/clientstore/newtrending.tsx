"use client";

import Image from 'next/image'
import { useState, useEffect } from "react";
import { FaWindows, FaApple, FaSteam } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


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

export default function News() {

    const [randomGames, setRandomGames] = useState<Game[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [wishlist, setWishlist] = useState<number[]>([]);
    const [userId, setUserId] = useState<string | null>(null);

    const [ownedGames, setOwnedGames] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(true);

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
                            <a href={`/store/gamepage/${game.id}`}><h2 className="text-3xl text-white font-bold">{game.title}</h2></a>
                                <div className="flex justify-between mt-4 text-lg items-center">
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
                                
                                    <div className="flex flex-row gap-4">
                                        <div className="flex justify-center items-center">
                                            <p className="text-white">{game.packages?.Game?.Price === "0" ? "Free" : "$" + game.packages?.Game?.Price || "N/A"}</p>
                                        </div>
                                        <button
                                          onClick={() => {
                                            if (!ownedGames.includes(game.id)) {
                                              toggleWishlist(game.id);
                                            }
                                          }}
                                          disabled={ownedGames.includes(game.id)}
                                          className={`flex gap-2 flex-row text-white bg-gray-800 px-6 py-3 rounded-md items-center justify-center
                                            ${ownedGames.includes(game.id) ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`}
                                        >
                                        
                                        {wishlist.includes(game.id) ? (
                                            <FaHeart className="text-white" />
                                        ) : (
                                            <FaRegHeart />
                                        )}
                                        </button>
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