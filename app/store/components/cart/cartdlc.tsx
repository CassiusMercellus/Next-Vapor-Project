"use client"

import Image from 'next/image'
import { FaWindows, FaApple, FaSteam } from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import eldencover from '../../../images/eldencover.jpg'
import { useEffect, useState } from 'react';

import { db } from "../../../../lib/firebase";
import { doc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";
import { auth } from "../../../../lib/firebase";

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

interface GameMainProps {
    game: Game;
}

type CartItem = {
    gameId: number;
    dlcId?: string; 
  };

export default function Cartdlc() {

    const [randomGames, setRandomGames] = useState<Game[]>([]);
    const [userId, setUserId] = useState<string | null>(null);
    const [wishlist, setWishlist] = useState<number[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 2;
      
        useEffect(() => {
            if (games.length > 0) {
              const shuffled = [...games].sort(() => 0.5 - Math.random()).slice(0, 10);
              setRandomGames(shuffled);
            }
          }, [games]);

          const [cart, setCart] = useState<number[]>([]);


          useEffect(() => {
            const fetchUserCart = async () => {
            const currentUser = auth.currentUser;
            console.log(currentUser);
        
              if (currentUser) {
               
                const userRef = doc(db, "users", currentUser.uid);
                const userSnap = await getDoc(userRef);
        
                if (userSnap.exists()) {
                    setCart(userSnap.data().cart || []);
                }
              }
            };
        
            fetchUserCart();  
          }, []); 

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
        
          const toggleCart = async (gameId: number) => {
            const currentUser = auth.currentUser;
          
            if (!currentUser) {
              console.log("User is not authenticated");
              return;
            }
          
            console.log("gameId:", gameId);
          
            if (gameId === undefined) {
              console.error("Invalid gameId");
              return;
            }
          
            try {
              const userRef = doc(db, "users", currentUser.uid);
              const itemExists = cart.includes(gameId); // ✅ No more gameId
          
              if (itemExists) {
                await updateDoc(userRef, {
                  cart: arrayRemove(gameId), // ✅ No object wrapping
                });
                setCart((prev) => prev.filter((id) => id !== gameId)); // ✅ Just filtering numbers
                console.log("Item removed from cart!");
              } else {
                await updateDoc(userRef, {
                  cart: arrayUnion(gameId), // ✅ Just pushing the number
                });
                setCart((prev) => [...prev, gameId]); // ✅ Add just the number
                console.log("Item added to cart!");
              }
            } catch (error) {
              console.error("Error toggling cart:", error);
            }
          };

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
            <div className="flex flex-col gap-5">
            {randomGames.slice(currentIndex, currentIndex + visibleCount).map((game) => (
                <div className="flex flex-col justify-between p-4 gap-4 bg-gray-950 rounded-md" key={game.id}>
                    {game.images?.main ? (
                    <Image 
                        src={game.images.main}
                        alt={game.title}
                        width={300}
                        height={100}
                        className="w-full h-full rounded-md"
                    />
                    ) : (
                    <div className="w-full h-40 bg-gray-700 rounded-md"></div>
                    )}
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between">
                            <a href={`/store/gamepage/${game.id}`}>
                                <h2 className="text-3xl text-white font-bold">
                                    {game.title.length > 18 ? `${game.title.slice(0, 16)}...` : game.title}
                                </h2>
                            </a>

                            <button
                                onClick={() => toggleWishlist(game.id)}
                                className="flex gap-2 flex-row text-white bg-gray-800 p-3 rounded-md items-center justify-center hover:bg-gray-700"
                                >
                                {wishlist.includes(game.id) ? (
                                    <FaHeart className="text-white" />
                                ) : (
                                    <FaRegHeart />
                                )}
                            </button>
                        </div>
                        
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
                                    <p className="rounded-md flex justify-center items-center text-white px-4 py-2 font-bold">{game.packages?.Game?.Price === "0" ? "Free" : "$" + game.packages?.Game?.Price || "N/A"}</p>
                                    <button onClick={() => toggleCart(game.id)} className="bg-blue-500 rounded-md flex justify-center items-center text-white px-4 py-2 hover:bg-blue-400">
                                      {cart.includes(game.id) ? "Added to Cart" : "Add to Cart"}
                                    </button>
                                </div>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </>
    )
}