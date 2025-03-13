"use client"

import WishlistFilter from '../components/wishlist/wishlistfilter'
import Header from '../../components/header'
import Client from '../../components/client'
import Footer from '../../components/footer'

import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "../../../lib/firebase";
import { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";

export default function Wishlist() {

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

    return (
        <>
            <Client></Client>
            <Header></Header>
            <div className=" bg-gradient-to-b from-slate-950 to-cyan-950 py-8">
                <div className="px-48">
                    <h1 className="text-4xl font-bold my-5">{userName}'s Wishlist</h1>
                    <WishlistFilter />

                </div>
                
            </div>
            <Footer></Footer>
            
        </>
    )
}