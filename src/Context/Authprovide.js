import React, { createContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/Firebase.init';




export const AuthContext = createContext()

const auth = getAuth(app)

const Authprovide = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // signup
    const creatUsers = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sigout

    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // signin

    const LogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update profile

    const updatePro = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    // statechang


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observ')
            setUser(currentUser)
            setLoading(false)
        });
        return () => unSubscribe();


    }, [])



    const authInfo = {
        updatePro,
        creatUsers,
        LogIn,
        user,
        LogOut,
        loading



    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovide;