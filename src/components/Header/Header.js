import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-continer'>
            <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/login'>LogIn</Link>
            <Link to='/register'>Register</Link>
            </nav>
        </div>
    );
};

export default Header;