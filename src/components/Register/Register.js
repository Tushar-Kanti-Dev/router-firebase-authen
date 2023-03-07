import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register-container'>
            <h3>Register Now!!</h3>
            <form action="">
                <input type="text" name="" id="" placeholder='your name'/>
                <br />
                <input type="email" name="" id="" placeholder='your email'/>
                <br />
                <input type="password" name="" id="" placeholder='your password'/>
                <br />
                <input className='register-button' type="submit" value="Register" />
            </form>

        </div>
    );
};

export default Register;