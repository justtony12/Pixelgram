import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';

const Navbar = () => {
    return (
        <nav className="navBar">
            <div>
                <Link to='/' className="logo">Pixelgram</Link>
                <SignedInLinks />
            </div>
        </nav>
    )
}

export default Navbar;