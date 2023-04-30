import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export  const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const createUser =(email, password, name)=>{
        return createUserWithEmailAndPassword(auth, email, password, name);
    }

    const loginUser =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignUp =()=>{
       return signInWithPopup(auth, googleProvider)
    }

    const githubSignUp = ()=>{
        return signInWithPopup(auth, githubProvider);
    }

    const facebookSignUp = ()=>{
        return signInWithPopup(auth, facebookProvider);
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => { 
            console.log('us iam', currentUser);
            setUser(currentUser);
        })
        return unsubscribe;
    }, [])

    const logOut = ()=>{
        return signOut(auth);
    }

    const AuthInfo ={
        user,
        createUser,
        loginUser,
        googleSignUp,
        githubSignUp,
        facebookSignUp,
        logOut,
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;