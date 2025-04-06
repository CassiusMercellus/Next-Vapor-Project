"use client";

import Image from 'next/image'
import { useState, useEffect } from "react";
import eldencover from '../../../images/eldencover.jpg'
import eldensteam from '../../../images/eldensteam.jpg'
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

export default function Topsellers() {

    const [randomGames, setRandomGames] = useState<Game[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [wishlist, setWishlist] = useState<number[]>([]);
    const [userId, setUserId] = useState<string | null>(null);

    const [ownedGames, setOwnedGames] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(true);

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
                                <a href={`/store/gamepage/${game.id}`}><h2 className="text-3xl text-white font-bold">{game.title.length > 25 ? game.title.slice(0, 25) + "..." : game.title}</h2></a>
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