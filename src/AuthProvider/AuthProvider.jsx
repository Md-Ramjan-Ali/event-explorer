import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)

  //create user or register user email and password
  const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }

  //sign or login user email and password
  const loginUser=(email,password)=>{
     setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  //Update profile
  const updateUser=(updateData)=>{
    return updateProfile(auth.currentUser,updateData)
  }

  //signout or logout
  const logOut=()=>{
     setLoading(true);
    return signOut(auth)
  }



  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
      console.log(currentUser);
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      unsubscribe()
    }
  },[])

  const userInfo = {
    user,
    setUser,
    createUser,
    loginUser,
    updateUser,
    logOut,
    loading
  };
  return (
    <div>
      <AuthContext value={userInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;