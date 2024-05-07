import React, { useState } from 'react';
import { doPasswordReset, doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/Auth';
import { useAuth } from '../contexts/authContext';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, Navigate } from 'react-router-dom';

const Googleprovider = new GoogleAuthProvider();

const LoginForm = () => {
    const userLoggedIn = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                // Navigate to home page after successful login
                window.location.href = '/';
            } catch (error) {
                setErrorMessage(error.message);
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000);
            } finally {
                setIsSigningIn(false);
            }
        }


    };

    const handleForgotPassword = () => {
        if (email) {
            doPasswordReset(email)
                .then(() => {
                    alert("Password reset email sent. Please check your email.");
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                    setTimeout(() => {
                        setErrorMessage('');
                    }, 3000);

                });
        } else {
            setErrorMessage("Please enter your email to reset password.");
        }

    };

    const onGoogleSignIn = (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            doSignInWithGoogle()
                .then(() => {

                    window.location.href = '/';
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                    setIsSigningIn(false);

                    setTimeout(() => {
                        setErrorMessage('');
                    }, 5000);
                });
        }
    };


    return (

        <div className='h-screen w-full flex items-center justify-center bg-[#caeec5]'>
            {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-black space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center">
                        <div className="mt-2">
                            <h3 className="text-black text-xl font-semibold sm:text-2xl">Welcome to FG family</h3>
                        </div>
                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label className="text-sm text-black font-bold">
                                Email
                            </label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>


                        <div>
                            <label className="text-sm text-black font-bold">
                                Password
                            </label>
                            <input
                                type="password"
                                autoComplete='current-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-[#3da723] cursor-not-allowed' : 'bg-[#3ca721] hover:bg-[#12310d] hover:shadow-xl transition duration-300'}`}
                        >
                            {isSigningIn ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                    <p className="text-center text-sm">Don't have an account? <Link to={'/RegisterForm'} className="hover:underline font-bold">Sign up</Link></p>
                    <div className='flex flex-row text-center w-full'>
                        <div className='border-b-2 mb-2.5 mr-2 w-full'></div><div className='text-sm font-bold w-fit'>OR</div><div className='border-b-2 mb-2.5 ml-2 w-full'></div>
                    </div>
                    <button
                        disabled={isSigningIn}
                        onClick={(e) => { onGoogleSignIn(e) }}
                        className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium bg-[#374132]  ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-[#6af149] transition duration-300 active:bg-gray-100'}`}>
                        <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_40)">
                                <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                                <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                                <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                                <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_40">
                                    <rect width="48" height="48" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        {isSigningIn ? 'Signing In...' : 'Continue with Google'}
                    </button>
                    <div className="text-center">
                        <Link to="#" onClick={handleForgotPassword} className="text-sm text-black hover:underline font-bold">Forgot Password?</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default LoginForm