import { FaWindows, FaApple, FaSteam } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { useEffect, useState } from 'react';

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

export default function Expansion({ game }: GameMainProps) {
    return (
        <>
            <div className="flex justify-between bg-gray-900 pl-4 p-2 rounded-md items-center mt-4">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold">Get {game.title}</h2>
                    <p className="text-blue-400 text-sm">DEAL ENDS SOON!</p>
                </div>
                
                <div className="flex justify-between text-lg items-center">
                    <div className="text-gray-400 flex justify-center items-center px-8 gap-2">
                        {game.platforms?.some(platform => platform.name === "Windows") && <FaWindows size={20} />}
                        {game.platforms?.some(platform => platform.name === "Mac") && <FaApple size={20} />}
                        {game.platforms?.some(platform => platform.name === "Steam") && <FaSteam size={20} />}
                    </div>

                    <div></div>

                    <div className="flex flex-row gap-4">
                        {game.packages?.Game?.Saleprice !== "0" && game.packages?.Game?.Discount !== "0" ? (
                            <div className="flex justify-center items-center">
                                <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">
                                    -{game?.packages?.Game?.Discount ?? "0%"}
                                </p>
                                <div className="flex flex-col">
                                    <p className="rounded-md flex justify-center items-center text-gray-600 pr-4 pl-2 font-bold line-through">
                                        {game?.packages?.Game?.Price === "0" ? "FREE" : `$${game?.packages?.Game?.Price ?? "0.00"}`}
                                    </p>
                                    <p className="text-lime-400 rounded-md flex justify-center items-center pr-4 pl-2 font-bold">
                                        ${game?.packages?.Game?.Saleprice ?? "0.00"}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-white rounded-md flex justify-center items-center pr-4 pl-2 font-bold">
                                {game?.packages?.Game?.Price === "0" ? "FREE" : `$${game?.packages?.Game?.Price ?? "0.00"}`}
                            </p>
                        )}
                    </div>

                    <div className="bg-blue-500 rounded-md flex justify-center items-center text-white px-6 py-2">
                        <p>Add to Cart</p>
                    </div>
                </div>
            </div>


            {game.packages?.DLC?.DLC1 ? (
            <div className="flex justify-between bg-gray-900 pl-4 p-2 rounded-md items-center mt-4 w-full flex-col">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col">
                        {/* Display DLC1 if available */}
                        {game.packages?.DLC?.DLC1 ? (
                            <h2 className="text-xl font-bold">{game.packages.DLC?.DLC1.Name}</h2>
                        ) : null}
                        
                        {/* Show deal message if DLC1 is available */}
                        {game.packages?.DLC?.DLC1 && (
                            <p className="text-blue-400 text-sm">DEAL ENDS SOON!</p>
                        )}
                    </div>

                    <div className="flex justify-between text-lg items-center">
                        <div className="text-gray-400 flex justify-center items-center px-8">
                            {game.platforms?.some(platform => platform.name === "Windows") && <FaWindows size={20} />}
                            {game.platforms?.some(platform => platform.name === "Mac") && <FaApple size={20} />}
                            {game.platforms?.some(platform => platform.name === "Steam") && <FaSteam size={20} />}
                        </div>
                        
                        <div></div>

                        <div className="flex flex-row gap-4">
                            {/* Display Sale Information for DLC1 */}
                            {game.packages?.DLC?.DLC1?.Saleprice !== "0" && game.packages?.DLC?.DLC1?.Discount !== "0" ? (
                                <div className="flex justify-center items-center">
                                    <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">
                                        -{game?.packages?.DLC?.DLC1?.Discount ?? "0%"}
                                    </p>
                                    <div className="flex flex-col">
                                        <p className="rounded-md flex justify-center items-center text-gray-600 pr-4 pl-2 font-bold line-through">
                                            {game?.packages?.DLC?.DLC1?.Price === "0" ? "FREE" : `$${game?.packages?.DLC?.DLC1?.Price ?? "0.00"}`}
                                        </p>
                                        <p className="text-lime-400 rounded-md flex justify-center items-center pr-4 pl-2 font-bold">
                                            ${game?.packages?.DLC?.DLC1?.Saleprice ?? "0.00"}
                                        </p>
                                    </div>
                                </div>
                            ) : game.packages?.DLC?.DLC1?.Price !== "0" ? (
                                <p className="text-white rounded-md flex justify-center items-center pr-4 pl-2 font-bold">
                                    {game?.packages?.DLC?.DLC1?.Price === "0" ? "FREE" : `$${game?.packages?.DLC?.DLC1?.Price ?? "0.00"}`}
                                </p>
                            ) : null}
                        </div>

                        <div className="bg-blue-500 rounded-md flex justify-center items-center text-white px-6 py-2">
                            <p>Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
            ) : null}

            {game.packages?.DLC?.DLC2 ? (
            <div className="flex justify-between bg-gray-900 pl-4 p-2 rounded-md items-center mt-4 w-full flex-col">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-col">
                        {/* Display DLC2 if available */}
                        {game.packages?.DLC?.DLC2 ? (
                            <h2 className="text-xl font-bold">{game.packages.DLC?.DLC2.Name}</h2>
                        ) : null}
                        
                        {/* Show deal message if DLC2 is available */}
                        {game.packages?.DLC?.DLC2 && (
                            <p className="text-blue-400 text-sm">DEAL ENDS SOON!</p>
                        )}
                    </div>

                    
                    <div className="flex justify-between text-lg items-center">
                        <div className="text-gray-400 flex justify-center items-center px-8">
                            {game.platforms?.some(platform => platform.name === "Windows") && <FaWindows size={20} />}
                            {game.platforms?.some(platform => platform.name === "Mac") && <FaApple size={20} />}
                            {game.platforms?.some(platform => platform.name === "Steam") && <FaSteam size={20} />}
                        </div>
                        
                        <div></div>

                        <div className="flex flex-row gap-4">
                            {/* Display Sale Information for DLC2 */}
                            {game.packages?.DLC?.DLC2?.Saleprice !== "0" && game.packages?.DLC?.DLC2?.Discount !== "0" ? (
                                <div className="flex justify-center items-center">
                                    <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">
                                        -{game?.packages?.DLC?.DLC2?.Discount ?? "0%"}
                                    </p>
                                    <div className="flex flex-col">
                                        <p className="rounded-md flex justify-center items-center text-gray-600 pr-4 pl-2 font-bold line-through">
                                            {game?.packages?.DLC?.DLC2?.Price === "0" ? "FREE" : `$${game?.packages?.DLC?.DLC2?.Price ?? "0.00"}`}
                                        </p>
                                        <p className="text-lime-400 rounded-md flex justify-center items-center pr-4 pl-2 font-bold">
                                            ${game?.packages?.DLC?.DLC2?.Saleprice ?? "0.00"}
                                        </p>
                                    </div>
                                </div>
                            ) : game.packages?.DLC?.DLC2?.Price !== "0" ? (
                                <p className="text-white rounded-md flex justify-center items-center pr-4 pl-2 font-bold">
                                    {game?.packages?.DLC?.DLC2?.Price === "0" ? "FREE" : `$${game?.packages?.DLC?.DLC2?.Price ?? "0.00"}`}
                                </p>
                            ) : null}
                        </div>

                        <div className="bg-blue-500 rounded-md flex justify-center items-center text-white px-6 py-2">
                            <p>Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
            ) : null}
            {game.packages?.DLC?.DLC1 ? (
            <div className="flex flex-col bg-gray-900 pl-4 p-2 rounded-md items-center mt-4 w-full">
                <div className="flex flex-row text-gray-500 justify-between w-full">
                    <h2 className="font-bold">DLCs</h2>
                    <p className="border border-gray-500 rounded-md py-1 px-3">Browse All DLCs</p>
                </div>

                <div className="mt-4 w-full px-3 bg-gray-800 rounded-md text-sm flex justify-between gap-2 items-center">
                    <p className="text-white py-3">{game.packages.DLC?.DLC1.Name}</p>

                    {game.packages?.DLC?.DLC1?.Saleprice !== "0" && game.packages?.DLC?.DLC1?.Discount !== "0" ? (

                    <div className="flex justify-center items-center">
                        <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">-{game?.packages?.DLC?.DLC1?.Discount ?? "0%"}</p>
                        <div className="flex flex-col">
                            <p className="rounded-md flex justify-center items-center text-gray-600 pr-4 pl-2 font-bold line-through">{game?.packages?.DLC?.DLC1?.Price === "0" ? "FREE" : `$${game?.packages?.DLC?.DLC1?.Price ?? "0.00"}`}</p>
                            <p className="text-lime-400 rounded-md flex justify-center items-center pr-4 pl-2 font-bold">${game?.packages?.DLC?.DLC1?.Saleprice ?? "0.00"}</p>
                        </div>
                    </div>
                    ) : game.packages?.DLC?.DLC1?.Price !== "0" ? (
                        <p className="text-white rounded-md flex justify-center items-center pr-4 pl-2 font-bold">
                            {game?.packages?.DLC?.DLC1?.Price === "0" ? "FREE" : `$${game?.packages?.DLC?.DLC1?.Price ?? "0.00"}`}
                        </p>
                    ) : null}
                </div>


                {game.packages?.DLC?.DLC2 ? (
                <div className="mt-4 w-full px-3 bg-gray-800 rounded-md text-sm flex justify-between gap-2 items-center">
                <p className="text-white py-3">{game.packages.DLC?.DLC2.Name}</p>

                {game.packages?.DLC?.DLC2?.Saleprice !== "0" && game.packages?.DLC?.DLC2?.Discount !== "0" ? (

                <div className="flex justify-center items-center">
                    <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">-{game?.packages?.DLC?.DLC2?.Discount ?? "0%"}</p>
                    <div className="flex flex-col">
                        <p className="rounded-md flex justify-center items-center text-gray-600 pr-4 pl-2 font-bold line-through">{game?.packages?.DLC?.DLC2?.Price === "0" ? "FREE" : `$${game?.packages?.DLC?.DLC2?.Price ?? "0.00"}`}</p>
                        <p className="text-lime-400 rounded-md flex justify-center items-center pr-4 pl-2 font-bold">${game?.packages?.DLC?.DLC2?.Saleprice ?? "0.00"}</p>
                    </div>
                </div>
                ) : game.packages?.DLC?.DLC2?.Price !== "0" ? (
                    <p className="text-white rounded-md flex justify-center items-center pr-4 pl-2 font-bold">
                        {game?.packages?.DLC?.DLC2?.Price === "0" ? "FREE" : `$${game?.packages?.DLC?.DLC2?.Price ?? "0.00"}`}
                    </p>
                ) : null}
            </div>
                ) : null}


                <div className="flex flex-row justify-between w-full mt-3">
                    <div></div>
                    <div className="flex justify-between text-lg items-center">
                        <div></div>

                        {game.packages?.DLC?.DLC1?.Saleprice !== "0" && game.packages?.DLC?.DLC1?.Discount !== "0" ? (
                    
                        <div className="flex flex-row gap-4">
                            <div className="flex justify-center items-center">
                                <p className="bg-lime-400 rounded-md flex justify-center items-center text-black px-4 py-2 font-bold">-{game?.packages?.DLC?.DLC1?.Discount ?? "0%"}</p>
                                <div className="flex flex-col">
                                    <p className="rounded-md flex justify-center items-center text-gray-600 pr-4 pl-2 font-bold line-through">
                                        {parseFloat(game?.packages?.DLC?.DLC1?.Price ?? "0") + parseFloat(game?.packages?.DLC?.DLC2?.Price ?? "0") === 0 
                                            ? "FREE" 
                                            : `$${(parseFloat(game?.packages?.DLC?.DLC1?.Price ?? "0") + parseFloat(game?.packages?.DLC?.DLC2?.Price ?? "0")).toFixed(2)}`}
                                    </p>
                                    <p className="text-lime-400 rounded-md flex justify-center items-center pr-4 pl-2 font-bold">
                                        ${(
                                            parseFloat(game?.packages?.DLC?.DLC1?.Saleprice ?? "0") + 
                                            parseFloat(game?.packages?.DLC?.DLC2?.Saleprice ?? "0")
                                        ).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        
                        </div>

                        ) : game.packages?.DLC?.DLC1?.Price !== "0" ? (
                            <p className="text-white rounded-md flex justify-center items-center pr-4 pl-2 font-bold">
                                ${(
                                    parseFloat(game?.packages?.DLC?.DLC1?.Price ?? "0") + 
                                    parseFloat(game?.packages?.DLC?.DLC2?.Price ?? "0")
                                ).toFixed(2)}
                            </p>
                        ) : null}

                        <div className="bg-blue-500 rounded-md flex justify-center items-center text-white px-6 py-2">
                            <p>Add to Cart</p>
                        </div>
                    </div>
                </div>
            </div>
            ) : null}
        </>
    )
}