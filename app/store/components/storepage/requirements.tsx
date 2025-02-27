import { IoIosAdd } from "react-icons/io";

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

export default function Requirements({ game }: GameMainProps) {
    return (
        <>
            <div className="flex flex-col bg-gray-900 pl-4 p-2 rounded-md items-center mt-4 w-full">
                <div className="flex flex-row text-gray-500 w-full mt-2 mb-4 items-center gap-5">
                    <h2 className="font-bold">System Requirements</h2>
                    <p className="text-white text-sm bg-gray-700 p-2 rounded-md">Windows</p>
                    <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md">Mac</p>
                    <p className="text-gray-500 text-sm bg-gray-800 p-2 rounded-md flex flex-row">Linux <IoIosAdd size={20}/> SteamOS</p>
                </div>
                <div className="flex w-full gap-8">
                    <div className="w-1/2 flex flex-col">
                        <p className="text-gray-500 text-xs">Minimum</p>

                        {game.system_requirements?.minimum?.os && (
                        <div className="w-full flex flex-row mt-2">
                            <div className="w-1/2">
                                <li className="text-gray-500 text-xs">OS:</li>
                            </div>
                            <div className="w-1/2">
                                <p className="text-white text-xs">{game.system_requirements?.minimum?.os}</p>
                            </div>
                        </div>
                        )}

                        {game.system_requirements?.minimum?.processor && (

                        <div className="w-full flex flex-row mt-2">
                            <div className="w-1/2">
                                <li className="text-gray-500 text-xs">Processor:</li>
                            </div>
                            <div className="w-1/2">
                                <p className="text-white text-xs">{game.system_requirements?.minimum?.processor}</p>
                            </div>
                        </div>
                        )}

                        {game.system_requirements?.minimum?.memory && (

                        <div className="w-full flex flex-row mt-2">
                            <div className="w-1/2">
                                <li className="text-gray-500 text-xs">Memory:</li>
                            </div>
                            <div className="w-1/2">
                                <p className="text-white text-xs">{game.system_requirements?.minimum?.memory}</p>
                            </div>
                        </div>
                        )}

                        {game.system_requirements?.minimum?.graphics && (

                        <div className="w-full flex flex-row mt-2">
                            <div className="w-1/2">
                                <li className="text-gray-500 text-xs">Graphics:</li>
                            </div>
                            <div className="w-1/2">
                                <p className="text-white text-xs">{game.system_requirements?.minimum?.graphics}</p>
                            </div>
                        </div>
                        )}

                        {game.system_requirements?.minimum?.directX && (
                        <div className="w-full flex flex-row mt-2">
                            <div className="w-1/2">
                                <li className="text-gray-500 text-xs">DirectX:</li>
                            </div>
                            <div className="w-1/2">
                                <p className="text-white text-xs">{game.system_requirements?.minimum?.directX}</p>
                            </div>
                        </div>
                        )}

                        <div className="w-full flex flex-row mt-2">
                            <div className="w-1/2">
                                <li className="text-gray-500 text-xs">Storage:</li>
                            </div>
                            <div className="w-1/2">
                                <p className="text-white text-xs">{game.system_requirements?.minimum?.storage}</p>
                            </div>
                        </div>

                        {game.system_requirements?.minimum?.SoundCard && (
                            <div className="w-full flex flex-row mt-2">
                                <div className="w-1/2">
                                    <li className="text-gray-500 text-xs">Sound Card:</li>
                                </div>
                                <div className="w-1/2">
                                    <p className="text-white text-xs">{game.system_requirements.minimum.SoundCard}</p>
                                </div>
                            </div>
                        )}
                        
                    </div>

                    <div className="w-1/2">
                    <p className="text-gray-500 text-xs">Recommended</p>
                        {game.system_requirements?.recommended?.os && (
                        <div className="w-full flex flex-row mt-2">
                            <div className="w-1/2">
                                <li className="text-gray-500 text-xs">OS:</li>
                            </div>
                            <div className="w-1/2">
                                <p className="text-white text-xs">{game.system_requirements?.recommended?.os}</p>
                            </div>
                        </div>
                        )}

                        {game.system_requirements?.recommended?.processor && (

                        <div className="w-full flex flex-row mt-2">
                            <div className="w-1/2">
                                <li className="text-gray-500 text-xs">Processor:</li>
                            </div>
                            <div className="w-1/2">
                                <p className="text-white text-xs">{game.system_requirements?.recommended?.processor}</p>
                            </div>
                        </div>
                        )}

                        {game.system_requirements?.recommended?.memory && (

                        <div className="w-full flex flex-row mt-2">
                            <div className="w-1/2">
                                <li className="text-gray-500 text-xs">Memory:</li>
                            </div>
                            <div className="w-1/2">
                                <p className="text-white text-xs">{game.system_requirements?.recommended?.memory}</p>
                            </div>
                        </div>
                        )}

                        {game.system_requirements?.recommended?.graphics && (

                        <div className="w-full flex flex-row mt-2">
                            <div className="w-1/2">
                                <li className="text-gray-500 text-xs">Graphics:</li>
                            </div>
                            <div className="w-1/2">
                                <p className="text-white text-xs">{game.system_requirements?.recommended?.graphics}</p>
                            </div>
                        </div>
                        )}

                        {game.system_requirements?.recommended?.directX && (
                        <div className="w-full flex flex-row mt-2">
                            <div className="w-1/2">
                                <li className="text-gray-500 text-xs">DirectX:</li>
                            </div>
                            <div className="w-1/2">
                                <p className="text-white text-xs">{game.system_requirements?.recommended?.directX}</p>
                            </div>
                        </div>
                        )}

                        <div className="w-full flex flex-row mt-2">
                            <div className="w-1/2">
                                <li className="text-gray-500 text-xs">Storage:</li>
                            </div>
                            <div className="w-1/2">
                                <p className="text-white text-xs">{game.system_requirements?.recommended?.storage}</p>
                            </div>
                        </div>

                        {game.system_requirements?.recommended?.SoundCard && (
                            <div className="w-full flex flex-row mt-2">
                                <div className="w-1/2">
                                    <li className="text-gray-500 text-xs">Sound Card:</li>
                                </div>
                                <div className="w-1/2">
                                    <p className="text-white text-xs">{game.system_requirements.recommended.SoundCard}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex w-full">
                    <p className="mt-5 text-gray-500 text-xs bg-gray-900 w-4/5">
                    ELDEN RING & BANDAI NAMCO Entertainment inc. / 2022 FromSoftware, Inc.
                    </p>
                    <div className=""></div>
                </div>
                
            </div>
        </>
    )
}