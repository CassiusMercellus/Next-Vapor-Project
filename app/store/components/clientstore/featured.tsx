"use client";

import Link from 'next/link';
import Image from 'next/image'
import { useState, useEffect, useCallback  } from "react";
import { FaWindows, FaApple, FaSteam } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import games from "@/data/games.json";

import { db } from "../../../../lib/firebase";
import { arrayRemove, doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
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

export default function Featured() {

  const [featuredGames, setFeaturedGames] = useState<Game[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<number[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Combine user data fetching into a single effect
  useEffect(() => {
      const fetchUserData = async () => {
          const currentUser = auth.currentUser;
          if (currentUser) {
              setUserId(currentUser.uid);
              const userRef = doc(db, "users", currentUser.uid);
              const userSnap = await getDoc(userRef);
              
              if (userSnap.exists()) {
                  setWishlist(userSnap.data().wishlist || []);
                  setCart(userSnap.data().cart || []);
              }
          }
          setIsLoading(false);
      };

      fetchUserData();
  }, []);

  // Initialize featured games
  useEffect(() => {
      if (games.length > 0) {
          const shuffled = [...games].sort(() => 0.5 - Math.random());
          setFeaturedGames(shuffled.slice(0, 5));
      }
  }, []);

  const nextGame = useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredGames.length);
  }, [featuredGames.length]);

  const prevGame = useCallback(() => {
      setCurrentIndex((prevIndex) => 
          (prevIndex - 1 + featuredGames.length) % featuredGames.length
      );
  }, [featuredGames.length]);

  const toggleWishlist = useCallback(async (gameId: number) => {
      if (!userId) return;
  
      try {
          const userRef = doc(db, "users", userId);
          const newWishlist = wishlist.includes(gameId) 
              ? wishlist.filter((id) => id !== gameId)
              : [...wishlist, gameId];
          
          await updateDoc(userRef, {
              wishlist: newWishlist,
          });
          setWishlist(newWishlist);
      } catch (error) {
          console.error("Error toggling wishlist:", error);
      }
  }, [userId, wishlist]);

  const toggleCart = useCallback(async (gameId: number) => {
      if (!userId) {
          console.log("User is not authenticated");
          return;
      }
  
      try {
          const userRef = doc(db, "users", userId);
          const newCart = cart.includes(gameId)
              ? cart.filter((id) => id !== gameId)
              : [...cart, gameId];
          
          await updateDoc(userRef, {
              cart: newCart,
          });
          setCart(newCart);
      } catch (error) {
          console.error("Error toggling cart:", error);
      }
  }, [userId, cart]);

  if (isLoading || featuredGames.length === 0) {
      return <p className="bg-gradient-to-b from-slate-950 to-slate-900 pt-20 pb-5 px-40">Loading Featured...</p>;
  }

  const game = featuredGames[currentIndex];
    
    return (
        <>
            <div className="bg-gradient-to-b from-slate-950 to-slate-900 pt-20 pb-5 px-40">
                <h1 className="mb-8 font-bold">FEATURED</h1>
                <div className="flex justify-center flex-row items-center bg-gradient-to-b from-slate-950 to-gray-900 p-2 rounded-md w-full">
                    <button onClick={prevGame} className="px-3">
                        <MdArrowBackIos size={25} className="text-white hover:text-gray-400" />
                    </button>
                    <div className="bg-gray-950 rounded-md w-full">
                    <div className="flex justify-between p-4 gap-4 w-full">
                        <div className="flex flex-col items-center w-3/5 relative">
                            {game.images?.main && (
                                <Image
                                src={game.images.main}
                                alt={game.title}
                                fill
                                className="object-contain"
                                />
                            )}
                        </div>
                        <div className="flex flex-col w-2/5">
                        <a href={`/store/gamepage/${game.id}`}><h2 className="text-3xl text-white font-bold">{game.title}</h2></a>
                            <p className="text-white text-sm">{game.description}</p>
                            <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4 relative">
                                {game.screenshots &&
                                    game.screenshots.slice(0, 4).map((screenshot) => (
                                    <Image
                                        key={screenshot.id}
                                        src={screenshot.image}
                                        alt={`${game.title} - Screenshot ${screenshot.id}`}
                                        width={400}
                                        height={200}
                                        className="rounded-md"
                                    />
                                    ))}
                            </div>

                            <div className="flex justify-between">
                                <div className="flex flex-row gap-1 ">
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
                            </div>
                            <div className="flex justify-between mt-4 text-lg">
                                  <button
                                    onClick={() => toggleWishlist(game.id)}
                                    className="flex gap-2 flex-row text-white bg-gray-800 px-6 py-3 rounded-md items-center justify-center"
                                  >
                                  <p>Wishlist</p>
                                  {wishlist.includes(game.id) ? (
                                      <FaHeart className="text-white" />
                                  ) : (
                                      <FaRegHeart />
                                  )}
                                  </button>
                                
                                <div className="flex flex-row gap-4">
                                    <div className="flex justify-center items-center">
                                        <p className="text-white">{game.packages?.Game?.Price === "0" ? "Free" : game.packages?.Game?.Price || "N/A"}</p>
                                    </div>
                                    
                                      <Link href="/store/cart" onClick={() => toggleCart(game.id)}  className="bg-blue-600 rounded-md px-6 py-3 text-white">
                                      Buy Now
                                      </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button onClick={nextGame} className="px-3">
                    <MdArrowForwardIos size={25} className="text-white hover:text-gray-400" />
                </button>
                </div>
                
            </div>
            <div className="py-2 pb-20 bg-slate-900">
                <div className="py-2 pb-20 bg-slate-900 flex justify-center gap-2">
                    {featuredGames.map((_, index) => (
                        <div
                        key={index}
                        className={`w-8 h-2 rounded-lg ${index === currentIndex ? "bg-blue-600" : "bg-slate-950"}`}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    )
}