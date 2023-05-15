import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useFirebaseApp } from 'reactfire';

import './Login.css'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const firebaseApp = useFirebaseApp();
    const auth = getAuth(firebaseApp);

    const handleRegistration = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User registration successful
                const user = userCredential.user;
                console.log('User registered:', user);
                if (auth)
                    navigate('/');
            })
            .catch((error) => {
                // User registration failed
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Error registering user:', errorCode, errorMessage);
            });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Login successful, perform any additional actions or navigate to a new page
            console.log('Login successful')
            if (auth)
                navigate('/');
        } catch (error) {
            // Handle login error
            console.error(error);
        }
    };

    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src="\assets\login\isolated-white-background-amazon-logo-159029074-removebg-preview.png" alt="" />
            </Link>
            <div className="login__form">
                <h1>Sign in</h1>
                <label htmlFor="email">E-mail
                </label>
                <input type="email" name="email" id="" value={email}
                    onChange={e => setEmail(e.target.value)} />
                <label htmlFor="password">
                    Password
                </label>
                <input type="password" name="password" id="" value={password}
                    onChange={e => setPassword(e.target.value)} />
                <button type='submit' className='sign__in' onClick={handleLogin}>Sign in</button>
                <p className="login__terms">
                    By signing-in you agree to Amazon's conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Internet-BAsed Ads Notice.
                </p>
                <button className="create__account" onClick={handleRegistration}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login