import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <div className='mx-auto '>
                <Link className='text-decoration-none text-black ms-3 font-bold' to="/">Home</Link>
                <Link className='text-decoration-none text-black ms-3 font-bold' to="/login">login</Link>
                <Link className='text-decoration-none text-black ms-3 font-bold' to="/register">Register</Link>
            </div>
        </div>
    );
};

export default Header;