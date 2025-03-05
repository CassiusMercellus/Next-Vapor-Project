"use client";

import Link from 'next/link';
import Image from 'next/image';
import { IoGameController } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaUserFriends, FaAngleDown } from "react-icons/fa";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useState, useEffect } from 'react';
import PFP from "../images/pfp.png";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function Client() {
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
    <nav className="flex flex-row bg-slate-900 w-full">
      <div className="flex flex-row justify-evenly w-full">
        <Link href="/" className="flex px-2 py-4 mx-4 items-center rounded-lg">
          <IoGameController size={25} />
          <p className="mx-2 font-bold">Vapor</p>
        </Link>

        <Link href="/store" className="px-2 py-4 font-bold rounded-lg hover:text-blue-400">Store</Link>
        <Link href="/community" className="px-2 py-4 font-bold rounded-lg hover:text-blue-400">Community</Link>

        {/* Only show profile link when a user is logged in */}
        {userName && (
            <>
            <Link href="/profile" className="px-2 py-4 font-bold rounded-lg hover:text-blue-400">
                {userName}
            </Link>
            <Link href="/library" className="px-2 py-4 font-bold rounded-lg hover:text-blue-400">Library</Link>
            <Link href="/download" className="px-2 py-4 font-bold rounded-lg hover:text-blue-400">Downloads</Link>
          </>
        )}

        <div className="flex flex-row">
          {/* Show profile section only when logged in */}
          {userName && (
            <>
                <Link href="/" className="flex px-4 py-1 my-2 mx-1 items-center rounded-md bg-slate-800 hover:bg-slate-700">
                    <FaUserFriends size={20} />
                </Link>
                <Link href="/" className="flex px-4 py-1 my-2 mx-1 items-center rounded-md bg-slate-800 hover:bg-slate-700">
                    <IoIosNotifications size={22} />
                </Link>
                <div className="flex flex-row px-1 py-1 my-2 mx-1 rounded-md bg-slate-800 hover:bg-slate-700 items-center h-10 w-64 justify-between">
                    <div className="flex flex-row">
                        <Image
                            className="rounded-lg m-1"
                            src={PFP}
                            alt="User Profile"
                            width={35}
                            height={35}
                        />
                        <p className="flex items-center mx-2">{userName}</p>
                        <p className="flex items-center mx-2 text-gray-500">${userBalance !== null ? userBalance.toFixed(2) : "0.00"}</p>
                    </div>
                    <FaAngleDown size={40} className="h-5" />
                </div>
            </>
          )}
        </div>

        <div className="flex flex-row">
          <Link href="/" className="px-2 py-4 mx-2 font-thin rounded-lg">Help</Link>
          <Link href="/" className="px-2 py-4 mx-2 font-thin rounded-lg">View</Link>
        </div>
      </div>
    </nav>
  );
}
