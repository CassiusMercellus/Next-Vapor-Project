"use client";

import Image from 'next/image'
import { useState, useEffect } from "react";
import eldencover from "../../../../images/eldencover.jpg";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaWindows, FaApple, FaSteam } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import { db } from "../../../../../lib/firebase";
import { arrayRemove, doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
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


export default function Games({ isGrid, gameId }: { isGrid: boolean; gameId: number }) {

    const [wishlist, setWishlist] = useState<number[]>([]);
    const [userId, setUserId] = useState<string | null>(null);

    const [isLoading, setIsLoading] = useState(true);
    const [ownedGames, setOwnedGames] = useState<number[]>([]);  

    const [cart, setCart] = useState<number[]>([]);

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
        console.log('Current User:', currentUser); // Log current user to ensure it's set
        if (currentUser) {
          setUserId(currentUser.uid);
  
          const userRef = doc(db, 'users', currentUser.uid);
          const userSnap = await getDoc(userRef);
  
          if (userSnap.exists()) {

            setCart(userSnap.data().cart || []);
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

    const game = games.find(game => game.id === Number(gameId));



        if (!game) {
        return <p>Game Not Found</p>;
        
        }

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


    return (
        <>
            <div className={`flex bg-gray-950 p-4 rounded-md gap-5 ${isGrid ? "w-full flex-col" : "w-full justify-between"}`}>
                <div className={`${isGrid ? "w-full" : "w-1/4"}`}>
                    {game.images?.main && (
                        <Image
                        src={game.images.main}
                        alt={game.title}
                        width={300}
                        height={100}
                        className="w-full h-48 object-cover"
                        />
                    )}
                </div>

                <div className={`${!isGrid ? "flex flex-row w-3/4 justify-between" : "flex flex-col"}`}>
                    <div className="flex flex-col justify-between">
                      <a href={`/store/gamepage/${game.id}`}><p className="text-xl font-bold text-white">{game.title}</p></a>
                        <div className="flex justify-between">
                            <div className="flex flex-wrap gap-1 ">
                                {game.tags && game.tags.length > 0 ? (
                                  game.tags.map((tag, index) => (
                                    <p key={index} className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">
                                      {tag}
                                    </p>
                                  ))
                                ) : (
                                  <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">No Tags Available</p>
                                )}
                                <p className={`text-gray-500 text-sm bg-gray-800 p-2 rounded-md ${isGrid ? "hidden" : "flex"}`}><IoIosAdd size={20}/></p>
                            </div>
                        </div> 
                        <div className={`flex ${isGrid ? "flex-row" : "flex-col"}`}>
                            <div className="flex my-3 items-center">
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

                                <div className="text-gray-700 text-sm px-4">
                                    <p>{game.release_date}</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-5">
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
                                <p className="text-sm text-blue-500 w-36">534,170 Reviews</p>
                            </div> 
                        </div>
                    </div>
                    
                    <div className="flex flex-col justify-between items-end">
                        <button className={`flex text-white bg-gray-800 p-3 rounded-md items-center justify-center w-12 ${isGrid ? "hidden" : "flex"}`} onClick={() => toggleWishlist(game.id)}>
                          {wishlist.includes(game.id) ? (
                              <FaHeart className="text-white" />
                          ) : (
                              <FaRegHeart />
                          )}
                        </button>
                        <div className="flex flex-row gap-4 items-center">
                            <div className={`text-gray-700 text-sm px-4 ${isGrid ? "hidden" : "flex"}`}>
                                
                            </div>
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
                            <button onClick={() => toggleCart(game.id)} className={` rounded-md flex justify-center items-center text-white px-4 py-2  ${
                            ownedGames.includes(game.id)
                            ? "bg-gray-500 text-white cursor-not-allowed"
                            : cart.includes(game.id)
                            ? "bg-blue-500 text-white hover:bg-blue-400"
                            : "bg-blue-500 text-white hover:bg-blue-400"
                            }`}>
                              {ownedGames.includes(game.id)
                            ? "Owned"
                            : cart.includes(game.id)
                            ? "Added to Cart"
                            : "Add to Cart"}
                            </button>
                            <div className={`flex text-white bg-gray-800 p-3 rounded-md items-center justify-center w-12 ${!isGrid ? "hidden" : "flex"} ${ownedGames.includes(game.id) ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"}`} >
                                <FaRegHeart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}