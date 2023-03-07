import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './LogIn.css'

const LogIn = () => {
    const {signInWithGoogle} = useFirebase()
    return (
        <div className='login-container'>
            <h2>LogIn Please </h2>
            <div className="google-signin">
                <button onClick={signInWithGoogle}>Google SignIn</button>
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