import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBYeBNcVkkDJrNi7B7kwbaoZcwiL9CSCOk",
    authDomain: "vapor-8c959.firebaseapp.com",
    projectId: "vapor-8c959",
    storageBucket: "vapor-8c959.firebasestorage.app",
    messagingSenderId: "240430932646",
    appId: "1:240430932646:web:626c2d60194bf82f418a67",
    measurementId: "G-PBXGLM9E64"
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);
const realTimeDb = getDatabase(app);


export { app, auth, db, realTimeDb };