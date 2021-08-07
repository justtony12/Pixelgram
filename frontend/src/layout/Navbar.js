import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navBar">
            <div>
                <Link to='/' className="logo">Pixelgram</Link>
            </div>
        </nav>
    )
}

export default Navbar;