import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {user, handelSignOut} = useFirebase();
    return (
        <div className='header-continer'>
            <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/register'>Register</Link>
            <span>{user?.displayName && user.displayName}</span>
            {user?.uid 
            ?
            <button onClick={handelSignOut}>Sign Out</button>
            :
            <Link to='/login'>LogIn</Link>}
            </nav>
        </div>
    );
};

export default Header;