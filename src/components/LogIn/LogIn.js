import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './LogIn.css'

const auth = getAuth(app)
const LogIn = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth)
    
    return (
        <div className='login-container'>
            <h2>LogIn Please </h2>
            <div className="google-signin">
                
                <button onClick={()=> signInWithGoogle()}>Google SignIn</button>
            </div>

            <form action="">
                
                <input type="email" name="" id="" placeholder='your email'/>
                <br />
                <input type="password" name="" id="" placeholder='your password'/>
                <br />
                <input className='login-button' type="submit" value="Login" />
            </form>
        </div>
    );
};

export default LogIn;