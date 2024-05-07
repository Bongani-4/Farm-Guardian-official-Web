import React, { useState } from 'react';
import './RegisterForm.css';
import { getDatabase, ref, push, set } from 'firebase/database';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import Swal from 'sweetalert2'

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        // Password strength validation
        const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        if (!strongPasswordRegex.test(password)) {
            setError(
                'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.'
            );
            return;
        }

        // Confirm password matching validation
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Validations pass, register user
        try {
            const auth = getAuth(app);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save additional user data to Firebase Realtime Database
            const database = getDatabase();
            const usersRef = ref(database, 'users');
            const newUserRef = push(usersRef);
            const newUserKey = newUserRef.key;

            await set(newUserRef, {
                email: email,
                username: username
            });

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You are successfully registered",
                showConfirmButton: false,
                timer: 3500
            });
        } catch (error) {
            console.error('Error registering user:', error.message);
            setError(error.message);
            Swal.fire({
                position: "top-end",
                icon: "warning",
                title: "Registration faced issues",
                showConfirmButton: false,
                timer: 3500
            });
        }
    };

    return (
        <div className="register-form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default RegisterForm;
