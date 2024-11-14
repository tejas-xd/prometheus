import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";

const FirebaseContext = createContext(null);
const firebaseConfig = {
    apiKey: "AIzaSyAcqh-rwXDpHnfSTDov-R__95ooiYhep7c",
    authDomain: "aimockint.firebaseapp.com",
    projectId: "aimockint",
    storageBucket: "aimockint.firebasestorage.app",
    messagingSenderId: "509995101774",
    appId: "1:509995101774:web:3f78fc065074f106739d1f",
    measurementId: "G-FJESZW7Q3G"
};

const app = initializeApp(firebaseConfig);
export const useFirebase = () => useContext(FirebaseContext);
const firebaseAuth = getAuth(app)
export const FirebaseProvider = (props) => {
    const createNewUserWithEmailAndPassword = (email,password) => createUserWithEmailAndPassword(firebaseAuth,email,password);
    const signInUserWithEmailAndPassword = (email,password) => signInWithEmailAndPassword(firebaseAuth,email,password);
    return (
        <FirebaseContext.Provider value={{createNewUserWithEmailAndPassword,signInUserWithEmailAndPassword}}>
            {props.children}
        </FirebaseContext.Provider>
    )
};