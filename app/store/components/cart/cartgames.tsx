import { FaTrash, FaPlus } from "react-icons/fa";
import Image from 'next/image'
import { FaWindows } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { db, auth } from "../../../../lib/firebase";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";

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



export default function Cartgames({ gameId }: { gameId: number }) {

    const [cart, setCart] = useState<number[]>([]);
    const [userId, setUserId] = useState<string | null>(null);
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
            const fetchUserCart = async () => {
              const currentUser = auth.currentUser;
              if (currentUser) {
                setUserId(currentUser.uid);
                const userRef = doc(db, "users", currentUser.uid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    setCart(userSnap.data().cart || []);
                }
              }
            };
        
            fetchUserCart();
          }, []);

    const removeCart = async (gameId: number) => {
        if (!userId) return;
      
        try {
          const userRef = doc(db, "users", userId);
  
          if (cart.includes(gameId)) {
  
            await updateDoc(userRef, {
                cart: cart.filter((id) => id !== gameId),
            });
            setCart((prev) => prev.filter((id) => id !== gameId));
            console.log("Game added to cart!");
          } else {
            await updateDoc(userRef, {
                cart: arrayUnion(gameId),
            });
            setCart((prev) => [...prev, gameId]);
            console.log("Game removed from cart!");
            
          }
        } catch (error) {
          console.error("Error toggling cart:", error);
        }
        if (isInCart) {
            console.log("Removing game from cart...");
        } else {
            console.log("Adding game to cart...");
        }
        setIsInCart(!isInCart);
      };
    

    const game = games.find((game) => game.id === gameId);

    if (!game) {
        return <div>Game not found</div>; 
      }

    return (
        <>
            <div className="bg-gray-950 flex justify-between p-5">
                <div className="flex flex-row gap-5 items-center">
                    {game.images?.main && (
                        <Image src={game.images.main}
                        alt={game.title}
                        width={100}
                        height={100}
                        className="rounded-sm object-contain" >
                        </Image>
                    )}
                    <h1 className="text-lg font-bold">{game.title}</h1>
                    <FaWindows size={25} className="text-gray-500" />
                </div>
                
                <div className="flex flex-row gap-10 justify-end items-center">
                    {game.packages?.Game?.Price === "0" ? (
                        <p className="text-white font-bold">Free</p>
                        ) : (
                        <>
                            {game.packages?.Game?.Saleprice === "0" ? (
                            <p className="text-white font-bold">${game.packages?.Game?.Price}</p>
                            ) : (
                            <>
                                <p className={`bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold`}>-{game.packages?.Game?.Discount}</p>
                                <div className="flex flex-col">
                                <p className="rounded-md flex justify-center items-center text-gray-600 pr-4 pl-2 font-bold line-through">${game.packages?.Game?.Price}</p>
                                <p className="text-lime-400 rounded-md flex justify-center items-center pr-4 pl-2 font-bold">${game.packages?.Game?.Saleprice}</p>
                                </div>
                            </>
                            )}
                        </>
                    )}
                    <button onClick={() => removeCart(game.id)} className="bg-gray-900 p-2 rounded-sm hover:bg-gray-800">
                    {isInCart ? (
                        <FaPlus className="text-gray-500" />
                    ) : (
                        <FaTrash className="text-gray-500" />
                    )}
                </button>
                    
                </div>

            </div>
        
        </>
    )
}