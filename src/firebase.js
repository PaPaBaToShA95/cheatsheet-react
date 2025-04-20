
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBZeGiDmJwWYDMtIW7qMHSzQKtrZjHfH5s",
    authDomain: "front-end-cheatsheet.firebaseapp.com",
    projectId: "front-end-cheatsheet",
    storageBucket: "front-end-cheatsheet.firebasestorage.app",
    messagingSenderId: "206979670162",
    appId: "1:206979670162:web:33f57506a095c8627f064b",
    measurementId: "G-PMHHHTDB39",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
