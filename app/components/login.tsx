"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import bg from '../images/loginbg.png';
import { getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []); 

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      alert("You have signed out successfully.");
    } catch (error) {
      console.error("Error signing out: ", error.message);
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
  
    try {
      // Create the user with Firebase Authentication using email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in Firestore, including the username
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        balance: 150.00, 
        pfp: "",
        wishlist: [],
        games: [],
        cart: [],
        createdAt: new Date(),
      });

      await signOut(auth);
  
      alert("Account created successfully!");
      pageSwap();
    } catch (error) {
      setError((error as Error).message);
    }
  };

  function pageSwap() {
    setIsSignIn(true);
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
  
    try {
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
     
      const userDataDoc = await getDoc(doc(db, "users", user.uid));
      if (userDataDoc.exists()) {
        console.log("User Data: ", userDataDoc.data());
      }
  
      
      router.push("/store"); 
    } catch (error) {
      console.error("Error signing in: ", error.message);
      setError(error.message); 
    }
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative">
      {/* Background Image */}
      <Image src={bg} alt="Background" fill className="absolute inset-0 w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 h-screen"></div>

      {/* Form Container */}
      <div className="relative bg-gray-900 p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-4">{isSignIn ? "Sign In" : "Sign Up"}</h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <form onSubmit={isSignIn ? handleSignIn : handleSignUp}>
          {!isSignIn && (  // Show username only in sign-up mode
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-lg mb-3 placeholder-white bg-gray-800"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg mb-3 placeholder-white bg-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg mb-3 placeholder-white bg-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Between Sign In and Sign Up */}
        <p className="text-center mt-4">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button className="text-blue-500 underline" onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>

        {/* Sign Out Button */}
        <button 
          onClick={handleSignOut}
          className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 w-full mt-5"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
