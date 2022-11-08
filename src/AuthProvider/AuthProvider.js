import React, { createContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../Firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const user ={displayName:"Arvi"};
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    //google sign in
    const createGoogleUser =()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const authInfo = {
        createGoogleUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;