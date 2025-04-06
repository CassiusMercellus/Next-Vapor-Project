"use client"

import Link from 'next/link';
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import Cartdlc from "../components/cart/cartdlc";
import Cartgames from "../components/cart/cartgames";
import Client from '../../components/client';
import Header from '../../components/header';
import { onAuthStateChanged, User, getAuth } from "firebase/auth";
import { auth, db } from "../../../lib/firebase";
import { useState, useEffect } from 'react';
import { doc, getDoc, collection, query, where, getDocs, deleteDoc, getFirestore, updateDoc } from "firebase/firestore";


import gameData from "@/data/games.json";

import { app } from "../../../lib/firebase";

interface CartItem {
    id: string;
    title: string;
    price: number;
    image: string;
}

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


interface CartGameProps {
    game: Game;
}



export default function Cart() {
  
    const [games, setGames] = useState<any[]>(gameData);
    const [cart, setCart] = useState<Game[]>([]);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const [userId, setUserId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
          console.log('Current User:', currentUser);
          if (currentUser) {
            setUserId(currentUser.uid);
    
            const userRef = doc(db, 'users', currentUser.uid);
            const userSnap = await getDoc(userRef);
    
            if (userSnap.exists()) {
              setCart(userSnap.data().cart || []);
              console.log(cart)
            }
          }
          setIsLoading(false); 
        });
    
        return () => unsubscribe(); 
      }, []);

    const calculateTotal = (cart: Game[]): number => {
  
      return cart.reduce((total, gameId) => {
          const game = games.find((game) => game.id === gameId);
  
          if (game && game.packages?.Game) {
              const price = parseFloat(game.packages.Game.Price.replace('$', ''));
              const salePrice = parseFloat(game.packages.Game.Saleprice.replace('$', ''));
  
              const gamePrice = salePrice !== 0 ? salePrice : price;
  
              total += gamePrice;
          } else {
              console.log(`No price available for game with ID ${gameId}`);
          }
          return total;
      }, 0);
  };
  
    
    const total = calculateTotal(cart);
      
    async function updateUserData() {
      const auth = getAuth();
      const user = auth.currentUser;
  
      if (!user) {
          console.error('User is not logged in');
          return;
      }
  
      // Reference to the user's document in Firestore
      const userRef = doc(db, 'users', user.uid);  // Adjust this to your Firebase collection path
  
      try {
          // Fetch the current user data from Firebase
          const userSnapshot = await getDoc(userRef);
  
          if (!userSnapshot.exists()) {
              console.error('User data not found');
              return;
          }
  
          const userData = userSnapshot.data();
          const { balance, cart, games } = userData;
  
          // Check if balance is greater than total
          if (balance > total) {
              // Subtract the total from the balance and set the new balance
              const newBalance = balance - total;
  
              // Add the items from the cart to the games array
              const updatedGames = [...games, ...cart];
  
              // Update the user's data in Firestore
              await updateDoc(userRef, {
                  balance: newBalance,
                  games: updatedGames,
                  cart: [],  // Clear the cart after adding to games
              });
  
          } else {
              alert('Balance is not sufficient to complete the purchase');
          }
      } catch (error) {
          console.error('Error updating user data:', error);
      }
  }

    // CART

    const [userName, setUserName] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);
    const [userBalance, setUserBalance] = useState<number | null>(null);

    useEffect(() => {
        setIsClient(true);

        const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
        if (user) {
            console.log("User logged in:", user.email);

            
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);

            if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserName(userDoc.data().username || "Unknown User");
            setUserBalance(userData.balance || 0);
            } else {
            setUserName("Unknown User");
            setUserBalance(0);
            }
        } else {
            console.log("No user logged in");
            setUserName(null);
            setUserBalance(null);
        }
        });

        return () => unsubscribe();
    }, []);

    if (!isClient) return null; 

    async function clearCart() {
        const auth = getAuth();
        const user = auth.currentUser;
        
        if (!user) {
          console.error("User is not logged in");
          return;
        }
        
        // Reference to the user's document in Firestore
        const userRef = doc(db, 'users', user.uid);
        
        try {
          // Clear the cart in Firestore
          await updateDoc(userRef, {
            cart: []  // Set the cart to an empty array
          });
      
          // Update the local state
          setCart([]);

        } catch (error) {
          console.error("Error clearing cart:", error);
        }
      }

    return (
            <>
                <Client />
                <Header />
                <div className="bg-gradient-to-b from-slate-950 to-cyan-950 py-8">
                    <div className="px-48">
                        <h1 className="text-4xl font-bold my-5">{userName}&#39;s Shopping Cart</h1>
                    </div>
                    <div className="flex flex-row gap-5 px-48">
                        <div className="w-3/4 flex flex-col gap-5">
                        

                            {isLoading ? (
                                <p className="text-gray-400">No Items in Cart.</p>
                            ) : cart.length > 0 ? (
                                cart.map((game, index) => (
                                    <Cartgames key={index} game={game} />
                                ))  
                            ) : (
                                <p className="text-lg text-gray-400">Your cart is empty.</p>
                            )}

        
                            <div className="bg-gray-950 grid grid-cols-2 grid-rows-2 p-5 gap-10">
                                <div className="flex flex-row gap-10 w-full items-center">
                                    <p className="text-lg font-bold">Estimated Total</p>
                                </div>
                                <div className="flex flex-row gap-10 w-full justify-end items-center">
                                    <p className="text-lg font-bold">${total.toFixed(2)}</p>
                                    <Link href="/store/cart" onClick={clearCart} className="bg-gray-900 p-2 rounded-sm">
                                        <FaTrash className="text-red-500" />
                                    </Link>
                                    
                                </div>
                                
                                <div className="flex w-full">
                                  <Link href="/store" className="pt-10">
                                        <p className="bg-gray-900 p-2 px-8 rounded-sm hover:bg-gray-800">Continue Shopping</p>
                                    </Link>
                                </div>
                                <div className="flex flex-row gap-5 w-full justify-end pt-10">
                                    <h1 className="bg-sky-600 p-2 rounded-sm hover:bg-sky-500">Purchase as a Gift</h1>
                                    <Link href="/library">
                                      <button className="bg-sky-600 p-2 rounded-sm hover:bg-sky-500" onClick={() => updateUserData()}>Purchase for Myself</button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="w-1/4">
                            <h1 className="text-xl font-bold my-5">Games you might be interested in</h1>
                            <div className="flex flex-col gap-5">
                                <Cartdlc />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
        
    
}
