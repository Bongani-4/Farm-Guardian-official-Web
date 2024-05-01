import React from 'react'

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth();

const Googleprovider = new GoogleAuthProvider();
const handleLogin = () => {
    signInWithPopup(auth, Googleprovider).then((result) => {

        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;



    }).catch((error) => {


        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
}
const LoginForm = () => {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <button className='bg-green px-8 py-2 text-white' onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginForm