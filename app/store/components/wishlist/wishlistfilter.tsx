"use client"

import { db } from "../../../../lib/firebase";
import { useEffect, useState } from "react";
import { getFirestore, doc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../../lib/firebase";

import { CgLayoutList } from "react-icons/cg";
import { CgLayoutGrid } from "react-icons/cg";
import { MdFilterAltOff } from "react-icons/md";
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

import Wishlistedgames from "./wishlisted/wishlistedgames"


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


interface WishlistedGameProps {
    game: Game;
}

export default function Wishlistfilter() {

    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const db = getFirestore(app);

    const gamesPerPage = 9;
    const maxGamesToDisplay = 100;
    const [currentPage, setCurrentPage] = useState(1);
    const [isGrid, setIsGrid] = useState(false);

    const totalGamesToDisplay = Math.min(wishlist.length, maxGamesToDisplay);
    const totalPages = Math.ceil(totalGamesToDisplay / gamesPerPage);
    const startIndex = (currentPage - 1) * gamesPerPage;
    const currentPageGames = wishlist.slice(startIndex, startIndex + gamesPerPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    useEffect(() => {
        const fetchWishlist = async () => {
            setLoading(true);
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    try {
                        const userRef = doc(db, "users", user.uid);
                        const userSnap = await getDoc(userRef);
                        if (userSnap.exists()) {
                            const userWishlist = userSnap.data().wishlist || [];
                            setWishlist(userWishlist);
                            console.log("Fetched wishlist: ", userWishlist);
                        } else {
                            console.log("No user data found");
                        }
                    } catch (error) {
                        console.error("Error fetching wishlist:", error);
                    }
                } else {
                    console.log("No user is signed in");
                }
                setLoading(false);
            });
        };

        fetchWishlist();
    }, [auth, db]);
  

    return (
        <>
            <div className="pb-20">
                <div className="my-5">
                    <div className="flex flex-row bg-gray-950 px-5 py-2 rounded-md">
                        <div className="w-1/6 text-gray-400 flex flex-row items-center gap-2">
                            <p className="">View</p>
                            <CgLayoutList
                                className={`rounded-md w-6 h-6 cursor-pointer ${
                                    !isGrid ? "bg-gray-800 text-white" : "bg-gray-900"
                                }`}
                                onClick={() => setIsGrid(false)}
                                />
                            <CgLayoutGrid
                                className={`rounded-md w-6 h-6 cursor-pointer ${
                                    isGrid ? "bg-gray-800 text-white" : "bg-gray-900"
                                }`}
                                onClick={() => setIsGrid(true)}
                                />


                        </div>
                        <div className="w-5/6 text-gray-400 flex flex-row items-center justify-between">
                            <div className="px-3 py-2 text-gray-200 bg-gray-800 rounded-md">All Items</div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">New and Trending </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">Top Sellers </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">Top Rated </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">Discounted </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">Popular </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">Coming Soon </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">On Wishlist </div>
                            <div className="px-3 py-2 text-gray-200 rounded-md">Upcoming Events </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-row gap-5">
                    <div className="w-1/5 bg-gray-950 p-3 rounded-md">
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between items-center text-gray-400">
                                <h2 className="text-lg font-bold">FILTERS</h2>
                                <MdFilterAltOff size={25} className="bg-slate-900 p-1" />
                            </div>
                        </div>

                        <div className="bg-blue-900 bg-opacity-20 my-5 p-3 flex flex-row justify-between items-center rounded-md">
                            <p className="text-blue-500 text-sm">Search for a tag...</p>
                            <IoIosSearch size={20} className="text-blue-500 " />
                        </div>


                        <div className="flex flex-wrap gap-1">
                            <div className="bg-gray-800 flex flex-row justify-evenly p-1 px-3 rounded-md gap-2">
                                <p className="text-gray-400">Souls-like</p>
                                <p className="text-gray-500">x</p>
                            </div>
                        </div>
                        

                        <div className="bg-gray-800 h-px mt-5"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Type</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">All Types</p>
                            <p className="text-sm text-gray-500">30</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Games</p>
                            <p className="text-sm text-gray-500">15</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Software</p>
                            <p className="text-sm text-gray-500">10</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">DLC</p>
                            <p className="text-sm text-gray-500">8</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Videos</p>
                            <p className="text-sm text-gray-500">2</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Platform</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 bg-gray-800 rounded-md mt-2">
                            <p className="text-sm">Any OS</p>
                            <p className="text-sm text-gray-500">20</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">macOS</p>
                            <p className="text-sm text-gray-500">5</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Sandbox + Linux</p>
                            <p className="text-sm text-gray-500">5</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Price</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Less than $5</p>
                            <p className="text-sm text-gray-500">10</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Less than $10</p>
                            <p className="text-sm text-gray-500">5</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Less than Steam Wallet Balance</p>
                            <p className="text-sm text-gray-500">2</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Discount</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">On Sale</p>
                            <p className="text-sm text-gray-500">5</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">50% or more</p>
                            <p className="text-sm text-gray-500">3</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">70% or more</p>
                            <p className="text-sm text-gray-500">1</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Exclude</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Early Access</p>
                            <p className="text-sm text-gray-500">2</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Pre-order</p>
                            <p className="text-sm text-gray-500">2</p>
                        </div>
                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">VR-only</p>
                            <p className="text-sm text-gray-500">1</p>
                        </div>

                        <div className="bg-gray-800 h-px mt-2"></div>

                        <div className="flex flex-row justify-between items-center mt-3">
                            <p className="text-lg">Deck Compatibility</p>
                            <MdExpandMore size={25} />
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Verified</p>
                            <p className="text-sm text-gray-500">5</p>
                        </div>

                        <div className="flex flex-row justify-between items-center p-2 rounded-md mt-2">
                            <p className="text-sm">Playable</p>
                            <p className="text-sm text-gray-500">3</p>
                        </div>
                    </div>





                        <div className="w-4/5">
                            
                            {loading ? (
                                <p className="text-gray-400">Loading wishlist...</p>
                            ) : currentPageGames.length > 0 ? (
                                <div className={`gap-5 ${isGrid ? "grid grid-cols-3" : "flex flex-col"}`}>
                                    {currentPageGames.map((gameId: number, index: number) => (
                                        <Wishlistedgames key={index} gameId={gameId} isGrid={isGrid} />
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-400">Your wishlist is empty.</p>
                            )}
                            


                            {/* Pagination */}
                            <div className="flex flex-row justify-between">
                                <div></div>
                                <div className="flex justify-center mt-5 gap-2">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 bg-gray-800 text-white rounded-md disabled:opacity-75"
                                    >
                                        Previous
                                    </button>
                                    <span className="px-4 py-2 bg-gray-800 text-white rounded-md">{currentPage}</span>
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 bg-gray-800 text-white rounded-md disabled:opacity-75"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    
                    
                    </div>
                </div>
            
            
        </>
    )
}