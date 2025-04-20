import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = () => {

    return signInWithPopup(auth, googleProvider);
};


export const logout = () => {
    return signOut(auth);
};
