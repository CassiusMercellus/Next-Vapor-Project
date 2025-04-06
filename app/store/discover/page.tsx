"use client"

import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import Gamediscover from '../components/discover/gamediscover'
import Header from '../../components/header'
import Client from '../../components/client'
import Footer from '../../components/footer'
import games from "@/data/games.json";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../../lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

export default function Discover() {

    const [userName, setUserName] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        
        const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
        if (user) {
    
            const userDocRef = doc(db, "users", user.uid);
            const userDoc = await getDoc(userDocRef);
    
            if (userDoc.exists()) {
              const userData = userDoc.data();
              setUserName(userDoc.data().username || "Unknown User");
            } else {
              setUserName("Guest User");
            }
          } else {
            console.log("No user logged in");
            setUserName(null);
          }
        });
        return () => unsubscribe();
    }, []);

    const shuffledGames = [...games].sort(() => 0.5 - Math.random()).slice(0, 7);



    return (
        <>
            <Client></Client>
            <Header></Header>
            <div className="px-48 bg-gradient-to-b from-cyan-950 to-blue-950 py-8">
                <div className="text-white py-14">
                    <h1 className="text-4xl font-bold">{userName}&#39;s Discovery Feed</h1>
                    <p className="text-lg">Recommendations just for you based on the games you or your friends want and play.</p>
                </div>
                <div className="flex flex-col gap-10">
                    {shuffledGames.map((game, index) => (
                        <Gamediscover key={index} game={game} />
                    ))}
                </div>
                
            </div>
            <Footer></Footer>
        </>
    )
}