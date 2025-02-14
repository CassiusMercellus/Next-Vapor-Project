import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYeBNcVkkDJrNi7B7kwbaoZcwiL9CSCOk",
    authDomain: "vapor-8c959.firebaseapp.com",
    projectId: "vapor-8c959",
    storageBucket: "vapor-8c959.firebasestorage.app",
    messagingSenderId: "240430932646",
    appId: "1:240430932646:web:626c2d60194bf82f418a67",
    measurementId: "G-PBXGLM9E64"
};

// Ensure Firebase initializes only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
