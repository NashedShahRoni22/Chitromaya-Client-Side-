import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  //google sign up provider
  const googleProvider = new GoogleAuthProvider();
  // set user information
  const [user, setUser] = useState(null);
  //spinner for loading state
  const [loading, setLoading] = useState(true);
  //google sign in
  const createGoogleUser = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //create user with email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //sign in user with email and password
  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sign out user
  const logOut =()=>{
    return signOut(auth);
  }
  //update user's profile
  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //get current user and set to user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Curent User Tracked", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  const authInfo = {
    user,
    loading, 
    setLoading,
    createGoogleUser,
    createUser,
    loginUser,
    logOut,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
