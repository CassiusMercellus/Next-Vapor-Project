"use client"
import Image from 'next/image'
import eldenIcon from '../../images/eldenicon.png'
import { useState, useEffect, useCallback  } from "react";
import games from "@/data/games.json";

import { db, auth } from "../../../lib/firebase";
import { arrayRemove, doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";


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

  interface LibrarygamelistProps {
    games: Game[];
    onGameClick: (index: number) => void;
  };

  const Librarygamelist = ({ games, onGameClick }: LibrarygamelistProps) => {

    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState<string | null>(null);
    const [ownedGames, setOwnedGames] = useState<number[]>([]);
    const [libraryGames, setLibraryGames] = useState<Game[]>([]);
    
    useEffect(() => {
          const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
            console.log('Current User:', currentUser);
            if (currentUser) {
              setUserId(currentUser.uid);
      
              const userRef = doc(db, 'users', currentUser.uid);
              const userSnap = await getDoc(userRef);
      
              if (userSnap.exists()) {
                setOwnedGames(userSnap.data().games || []);
              }
            }
            setIsLoading(false); 
          });
      
          return () => unsubscribe(); 
        }, []);

        useEffect(() => {
            if (games.length > 0 && ownedGames.length > 0) {
              const filteredGames = games.filter(game => ownedGames.includes(game.id));
              setLibraryGames(filteredGames);
            }
          }, [ownedGames]);

  return (
    <>
        <div className="flex flex-col p-5">
        {libraryGames.map((game, index) => (
          <div key={game.id} onClick={() => onGameClick(index)} className="flex gap-3 p-2 rounded-md items-center hover:bg-gray-700">
            <Image src={game.images?.icon || eldenIcon} alt={game.title}
            width={20} height={20}/>
            <p className="text-sm">{game.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Librarygamelist;