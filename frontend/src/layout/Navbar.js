import React from 'react';
import SignedIn from './SignedInLinks';
import SignedOut from './SignedOutLinks';

const Navbar = () => {
    return (
        <nav className="navBar">
            <div>
                {/* <Link to='/' className="logo"><button className="button">Pixelgram</button></Link> */}
                <SignedIn />
                <SignedOut />
            </div>
        </nav>
    )
}

export default Navbar;