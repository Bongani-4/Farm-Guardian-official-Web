import React from 'react'

import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const Googleprovider = new GoogleAuthProvider();
const LoginForm = () => {
    return (
        <div>LoginForm</div>
    )
}

export default LoginForm