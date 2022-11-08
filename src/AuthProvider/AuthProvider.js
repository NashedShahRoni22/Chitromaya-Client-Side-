import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../Firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // const user ={displayName:"Arvi"};
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    //google sign in
    const createGoogleUser =()=>{
        return signInWithPopup(auth, googleProvider);
    }
    //create user with email and password
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    //sign in user with email and password
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createGoogleUser,
        createUser,
        loginUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;