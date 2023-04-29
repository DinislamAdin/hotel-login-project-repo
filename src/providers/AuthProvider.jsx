import React, { createContext, useState } from 'react';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export  const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState();

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

    const AuthInfo ={
        user,
        createUser,
        loginUser,
        googleSignUp,
        githubSignUp,
        facebookSignUp
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;